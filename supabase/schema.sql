-- Run in the Supabase SQL editor. Creates the forum and buy/sell tables with row level security.

create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 30),
  created_at timestamptz not null default now()
);

create table public.admins (user_id uuid primary key references auth.users on delete cascade);

create table public.posts (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles on delete cascade,
  trade text not null default 'sheet-metal',
  kind text not null check (kind in ('discussion', 'listing')),
  category text not null,
  title text not null check (char_length(title) between 4 and 120),
  body text not null check (char_length(body) between 1 and 5000),
  price numeric check (price is null or price >= 0),
  location text check (location is null or char_length(location) <= 80),
  status text not null default 'open' check (status in ('open', 'sold', 'removed')),
  created_at timestamptz not null default now()
);

create table public.replies (
  id bigint generated always as identity primary key,
  post_id bigint not null references public.posts on delete cascade,
  user_id uuid not null references public.profiles on delete cascade,
  body text not null check (char_length(body) between 1 and 3000),
  created_at timestamptz not null default now()
);

create table public.reports (
  id bigint generated always as identity primary key,
  post_id bigint references public.posts on delete cascade,
  reply_id bigint references public.replies on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  reason text not null check (char_length(reason) between 1 and 500),
  created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean
language sql security definer stable set search_path = public
as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

alter table public.profiles enable row level security;
alter table public.admins enable row level security;
alter table public.posts enable row level security;
alter table public.replies enable row level security;
alter table public.reports enable row level security;

create policy "profiles readable" on public.profiles for select using (true);
create policy "own profile insert" on public.profiles for insert with check (auth.uid() = id);
create policy "own profile update" on public.profiles for update using (auth.uid() = id);

create policy "posts readable" on public.posts for select using (status <> 'removed' or user_id = auth.uid() or public.is_admin());
create policy "posts insert own" on public.posts for insert with check (auth.uid() = user_id and status = 'open');
create policy "posts update own or admin" on public.posts for update using (auth.uid() = user_id or public.is_admin())
  with check ((auth.uid() = user_id and status in ('open', 'sold')) or public.is_admin());
create policy "posts delete own or admin" on public.posts for delete using (auth.uid() = user_id or public.is_admin());

create policy "replies readable" on public.replies for select using (true);
create policy "replies insert own" on public.replies for insert with check (auth.uid() = user_id);
create policy "replies delete own or admin" on public.replies for delete using (auth.uid() = user_id or public.is_admin());

create policy "reports insert own" on public.reports for insert with check (auth.uid() = user_id);
create policy "reports admin read" on public.reports for select using (public.is_admin());

-- Make yourself a moderator after signing up:
-- insert into public.admins (user_id) values ('<your auth user id>');
