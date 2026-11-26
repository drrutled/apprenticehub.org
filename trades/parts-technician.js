// Parts Technician guide. Practice questions are original study aids, not official Red Seal exam questions.
{
  const I = (name, why, search) => ({ name, why, search });
  const M = (name, desc, url) => ({ name, desc, url });
  const V = (name, desc, q) => M(name, desc, "https://www.youtube.com/results?search_query=" + q);
  const Q = (q, a, w, i, explain) => { const options = [...w]; options.splice(i, 0, a); return { q, options, answer: i, explain }; };

  const toolGroups = [
    {
      title: "Day-one gear, buy once and buy well",
      note: "Parts counters and warehouses are on-your-feet jobs. Comfortable, rated protection and a few measuring tools get you started. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        I("CSA-approved safety boots (green triangle, steel or composite toe)", "Shelves, pallets, and heavy parts mean drop hazards. Cushioned, slip-resistant soles help on concrete.", "CSA safety boots composite toe slip resistant Blundstone Red Wing"),
        I("Anti-fatigue insoles", "Hours on concrete floors are tough on feet and backs.", "anti-fatigue insoles safety boots Superfeet"),
        I("Safety glasses (CSA Z94.3)", "Dust, packaging debris, and fluids in the stockroom.", "CSA Z94.3 safety glasses clear 3M"),
        I("Cut-resistant work gloves", "Protects hands from sharp edges, banding, and metal parts.", "Mechanix cut resistant gloves ANSI A4"),
        I("Digital calipers, 150 mm (6 in)", "Measure bolts, shafts, bearings, and seals to identify them correctly.", "Mitutoyo Starrett 150mm digital caliper"),
        I("Thread pitch gauge set (metric and UN) and a bolt gauge", "Identify unknown fasteners and threaded fittings at the counter.", "thread pitch gauge set metric UNC bolt thread checker"),
        I("Tape measure (5 m / 16 ft) and a 150 mm steel rule", "Quick measurements for belts, hoses, and shelving.", "Stanley FatMax tape measure 5m 16ft steel rule"),
        I("Safety box cutter with a retractable blade", "Opens cartons safely, and the blade retracts when released.", "safety box cutter retractable blade Slice Milwaukee"),
        I("Permanent markers, labels, and a pocket notebook", "Label bins and parts and note part numbers and customer requests.", "Sharpie fine point labels pocket notebook")
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your supervisor what holds up on your counter and in your warehouse.",
      items: [
        I("Micrometer, 0-25 mm", "Identify shafts, bearing sizes, and small parts accurately.", "Mitutoyo 0-25mm outside micrometer"),
        I("O-ring sizing cone or gauge and a seal measuring kit", "Match O-rings, seals, and gaskets by size.", "O-ring size gauge cone seal measuring kit"),
        I("Hose measuring tools and a hydraulic fitting identification kit", "Identify hydraulic and fuel fittings by thread type and size.", "hydraulic fitting identification kit thread gauge"),
        I("Back support belt or a good lifting strap system", "Useful with proper technique, never a substitute for it. Ask your supervisor first.", "lifting strap back support work"),
        I("Headlamp or compact flashlight", "Read part numbers on dark shelves, in the back of racking, and on equipment.", "LED headlamp rechargeable Streamlight flashlight"),
        I("Insulated lunch bag and water bottle", "A long shift on your feet needs hydration.", "insulated lunch bag water bottle")
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer. Ask before buying, and complete the training before using any equipment.",
      items: [
        I("Handheld barcode scanner or tablet (employer supplied)", "Used for receiving, counting, and picking in many shops.", "handheld barcode scanner Zebra inventory"),
        I("Label printer (employer supplied)", "Prints bin and part labels for stock.", "Brother label printer inventory labels"),
        I("Pallet jack and hand truck (employer supplied)", "Move loads safely once you are trained. Never overload.", "pallet jack hand truck warehouse"),
        I("Forklift operator training", "A training course and employer authorization are required, not a purchase. Look for courses that meet CSA B335 and provincial rules.", "forklift operator training course Canada"),
        I("TDG and WHMIS training course", "Required knowledge for handling and shipping hazardous goods and products.", "TDG transportation of dangerous goods training course Canada")
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for catalogues, math, and inventory control. Check with your school and exam body about calculator rules before you buy.",
      items: [
        I("Scientific or business calculator (Casio fx-300 or TI-30XS)", "Margin, markup, reorder points, and conversions.", "Casio fx-300 Texas Instruments TI-30XS MultiView"),
        I("Pocket notebook (Rite in the Rain) and graph paper", "Take notes on part numbers and warehouse layout.", "Rite in the Rain notebook graph paper"),
        I("Binder, dividers, and highlighters", "Organize notes by year and topic for Red Seal review.", "binder dividers highlighters"),
        I("Inventory management textbook", "Learn reorder points, turnover, and stock control methods.", "inventory management basics textbook"),
        I("Fastener identification chart", "Learn SAE and metric grade markings.", "fastener identification chart bolt grades"),
        I("Automotive or heavy equipment parts basics book", "Learn the systems you sell parts for.", "automotive systems basics textbook parts"),
        I("Mechanical pencil and pens", "Everyday note taking.", "Pentel mechanical pencil pens"),
        I("Dictionary of automotive and heavy equipment terms", "Learn part names and abbreviations.", "automotive terminology dictionary")
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        M("Red Seal exam preparation", "How Red Seal exams work and how to prepare. Find the Parts Technician trade page from here.", "https://red-seal.ca/eng/welcome.shtml"),
        M("Codes Canada", "Canadian model codes, useful for building and safety context.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"),
        M("Canadian Centre for Occupational Health and Safety (CCOHS)", "Free safety fact sheets on lifting, WHMIS, and warehouse safety.", "https://www.ccohs.ca/"),
        M("CSA Group", "Standards bodies publish lift truck and safety standards.", "https://www.csagroup.org/"),
        M("Unifor", "Union representing many parts and service workers in Canada.", "https://www.unifor.org/")
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and employer procedures.",
      items: [
        V("Parts counter basics", "How to help customers and look up parts.", "parts+counter+basics+customer+service+automotive"),
        V("Inventory control basics", "Reorder points, cycle counts, and stock control.", "inventory+control+basics+reorder+point+safety+stock"),
        V("Understanding fastener grades", "SAE and metric grade markings.", "bolt+grades+SAE+metric+explained"),
        V("Hydraulic hose and fitting identification", "Sizes and fitting types.", "hydraulic+hose+fitting+identification+dash+size"),
        V("Reading parts catalogues and diagrams", "Exploded views and part number lookups.", "how+to+read+parts+catalog+exploded+diagram"),
        V("Bearing basics", "Types of bearings and how they fail.", "bearing+types+basics+explained"),
        V("TDG for shipping dangerous goods", "Classes and shipping documents.", "transportation+of+dangerous+goods+Canada+TDG+basics"),
        V("Warehouse safety and lifting", "Safe lifting and forklift awareness.", "warehouse+safety+lifting+technique+forklift+awareness")
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for parts work yourself.",
      items: [
        M("Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"),
        M("TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"),
        M("YouTube: parts counter podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", "https://www.youtube.com/results?search_query=parts+counter+podcast")
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        M("YouTube: parts manager podcast", "Inventory, pricing, and customer service topics.", "https://www.youtube.com/results?search_query=parts+manager+podcast+inventory"),
        M("YouTube: dealership parts department podcast", "Dealer parts operations and customer service.", "https://www.youtube.com/results?search_query=dealership+parts+department+podcast"),
        M("YouTube: supply chain and inventory podcast", "Stock control and supplier topics.", "https://www.youtube.com/results?search_query=inventory+management+supply+chain+podcast")
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        M("YouTube: Red Seal parts technician exam prep (talk-through)", "Study talks you can listen to while commuting.", "https://www.youtube.com/results?search_query=Red+Seal+parts+technician+exam+preparation"),
        M("YouTube: parts department profitability podcast", "Margins, turnover, and managing a parts department.", "https://www.youtube.com/results?search_query=parts+department+profitability+podcast+turnover"),
        M("YouTube: mentoring apprentices and shop leadership", "Leadership and training skills for new journeypersons.", "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast")
      ]
    }
  ];

  const practiceBank = {
    1: [
      Q("What is the safest way to lift a heavy box from the floor?", "Bend your knees, keep the load close, and keep your back straight", ["Bend at the waist with straight legs and let your back take the load", "Twist your body while lifting so the box ends up beside you", "Jerk it up quickly using momentum so the lift is over fast"], 1, "Lift with your legs, keep the load close to your body, and avoid twisting. Get help or a lifting aid for heavy loads."),
      Q("Where can you find the hazards of a hazardous product such as brake cleaner?", "On the supplier label and the Safety Data Sheet (SDS)", ["On the customer invoice only, which lists the product name", "On the shelf tag, which lists the price and the bin location", "In the sales flyer, which lists the product features"], 0, "WHMIS requires labels and SDSs for hazardous products."),
      Q("What is a core charge?", "A refundable deposit paid until the old part is returned", ["A fee for delivery charged when a part is shipped from the warehouse", "A tax on the part that is added at the counter by law", "A cleaning fee charged when the old part is returned dirty"], 2, "Remanufacturers need old cores, so a deposit encourages their return."),
      Q("A supersession means that:", "A new part number replaces an older one", ["The part is discontinued with no replacement", "The part is on backorder", "The part has a warranty"], 1, "Check notes in the catalogue, because the new part may have different fit or hardware."),
      Q("OEM stands for:", "Original equipment manufacturer", ["Official engine model, the number stamped on the block", "Ordered electronic material, a type of purchase order", "Original engine mount, a part type for the drivetrain"], 3, "OEM parts are made by or for the maker of the vehicle or machine."),
      Q("What does a packing slip show?", "The items included in a shipment", ["The payment due from the customer, with the tax and total", "The customer's credit rating and the credit limit on file", "The warranty period for each part and the claim procedure"], 0, "Compare it to the shipment and the purchase order at receiving."),
      Q("A part costs you $60 and sells for $100. What is the gross margin?", "40%", ["60%", "67%", "25%"], 3, "Margin = (100 − 60) ÷ 100 = 40%. The markup on cost would be 40 ÷ 60 ≈ 67%."),
      Q("What is the main benefit of a bin location system?", "Parts can be found and picked quickly and accurately", ["It reduces the price of parts by cutting down on supplier costs", "It avoids the need for receiving, since parts are pre-assigned", "It stops theft completely by locking each bin with a code"], 2, "Consistent locations speed picking, counting, and training."),
      Q("FIFO stands for:", "First in, first out", ["Fastest in, fastest out", "First in, final out", "Final inventory for order"], 1, "FIFO rotates stock so older items, including those with shelf life, are used first."),
      Q("An SAE Grade 8 bolt head has how many radial lines?", "Six", ["Three", "None", "Four"], 0, "Grade 5 has three lines, and Grade 8 has six."),
      Q("Which metric bolt class is stronger?", "10.9", ["4.6", "5.8", "They are equal"], 3, "Higher property class numbers mean higher strength. 8.8 and 10.9 are common in machinery."),
      Q("In 5W-30 oil, the W means:", "Winter", ["Weight", "Wet", "Wear"], 2, "The first number rates the oil's cold flow, and the second its viscosity at operating temperature."),
      Q("CCA on a battery stands for:", "Cold cranking amps", ["Charge capacity amps", "Cell current average", "Core cell alloy"], 0, "It rates how much current a battery can supply at a cold temperature."),
      Q("To operate a forklift at work, you must:", "Be trained and authorized by your employer", ["Just hold a valid driver's licence, which covers any vehicle", "Be over 50 years old with some years of warehouse experience", "Have worked a week on site and watched another operator"], 1, "Training and authorization are required. Lift truck standards include CSA B335."),
      Q("To identify the correct part for a customer's vehicle, you should first ask for:", "Year, make, model, engine, and the VIN when needed", ["Their favourite brand only, since that sets the part choice", "Their address, so that the part can be shipped to them", "Their payment method, so that the right price is quoted"], 2, "Applications vary even within the same model year. The VIN narrows down the right part."),
      Q("Which hazard needs special handling when shipping a battery by road?", "It is a dangerous good under the TDG regulations", ["It is not regulated, because batteries are consumer goods", "It is classed as a food product under shipping law", "It only matters in winter, when the cold can crack the case"], 3, "Batteries and aerosols can be regulated, so follow your employer's TDG procedures.")
    ],
    2: [
      Q("Daily usage 5 units, lead time 6 days, safety stock 10. What is the reorder point?", "40", ["30", "16", "60"], 0, "Reorder point = (5 × 6) + 10 = 40."),
      Q("Cost of goods sold is $600 000 and average inventory is $150 000. What is the inventory turnover?", "4", ["0.25", "40", "450 000"], 1, "Turnover = COGS ÷ average inventory = 600 000 ÷ 150 000 = 4."),
      Q("In ABC analysis, A items are usually:", "The small share of parts that account for most of the inventory value", ["The cheapest parts, which sell in the greatest numbers", "Parts with no sales in the last year of operation", "The largest parts, which take up most of the floor space"], 2, "A items deserve the tightest control, and C items are many low-value parts."),
      Q("A cycle count is:", "Counting part of the inventory regularly instead of all at once", ["A count of delivery trucks arriving at the dock each day", "A once-a-decade audit of the whole warehouse by outside staff", "A count of customers who visit the counter in a week"], 0, "Cycle counts find and fix errors continuously."),
      Q("Obsolete stock is:", "Inventory with little or no demand", ["New stock that has just arrived and not yet been put away", "Stock on order from a supplier but not yet received", "Stock with a core charge still owed by the customer"], 1, "Reduce risk with careful buying and return or sale programs."),
      Q("Fill rate measures:", "The share of demand filled from stock", ["The amount of money tied up in stock on the shelves", "The number of employees needed to fill the orders", "The speed of the delivery trucks on the daily route"], 3, "High fill rate means customers get what they need immediately."),
      Q("A backorder is:", "A customer order that cannot be filled until stock arrives", ["A returned part that is waiting to be put back in its bin", "A part in the wrong bin that cannot be found on the shelf", "A cancelled order that is no longer needed by the customer"], 2, "Tell the customer the expected date and update them if it changes."),
      Q("A three-way match compares:", "The purchase order, the receiving record, and the supplier invoice", ["Three customers who ordered the same part in a week", "Three prices quoted by different suppliers for one part", "Three warehouses that hold stock of the same part"], 0, "It helps make sure you pay only for what you ordered and received."),
      Q("A hydraulic hose dash size of -8 refers to about:", "1/2 in hose inside diameter", ["1/8 in hose inside diameter, as the number suggests", "8 mm hose inside diameter, as in the metric system", "8 in hose outside diameter, for large industrial lines"], 1, "Dash sizes are in sixteenths of an inch, so -8 is 8/16 or 1/2 in."),
      Q("Brake fluid DOT 3 and DOT 4 are described as hygroscopic, which means:", "They absorb moisture from the air", ["They repel water and keep the brake lines dry for life", "They are flammable gases that must be stored in cylinders", "They are non-toxic to paint and are safe to spill on a car"], 3, "Keep containers closed because absorbed water lowers the boiling point."),
      Q("Which of these is true about engine coolant?", "Different types may not mix well, and it is toxic, so follow the SDS", ["All coolants can be mixed safely in any ratio and colour", "It is safe to drink in small amounts if it is diluted", "It never needs disposal, since it can be poured down a drain"], 2, "Ethylene glycol is toxic. Dispose of used coolant according to local rules."),
      Q("The micron rating on a filter indicates:", "The size of particles it can trap", ["The length of the filter", "The thread size", "The fluid temperature"], 1, "A lower micron rating generally means finer filtration."),
      Q("Handling refrigerants in vehicle air conditioning usually requires:", "Provincial certification or training, and recovery equipment", ["No training, since refrigerant is the same as shop air", "A forklift licence, since the cylinders are heavy to move", "A WHMIS card only, with no recovery equipment needed"], 0, "Venting refrigerant is not allowed. Rules vary by province, so check yours."),
      Q("An aftermarket part is one that is:", "Made by a company other than the original equipment maker", ["Made only by the dealer for its own service department", "Always used or rebuilt, never new from the factory", "Always cheaper than the OEM part, with lower quality"], 3, "Quality varies, so check fit and warranty."),
      Q("In a min/max inventory system, the max is:", "The stock level to order up to", ["The minimum safety stock held in case of a late delivery", "The price ceiling set by the supplier for a part", "The reorder trigger that tells you when to place an order"], 2, "When stock falls to the min or reorder point, you order up to max."),
      Q("A warranty claim usually needs:", "The failed part and documents such as the invoice and repair details", ["Only a phone call to the supplier explaining the failure", "Only a photo of the shop where the part was installed", "A new part sale first, before the claim can be started"], 1, "Follow the manufacturer's claim procedure and keep records.")
    ],
    3: [
      Q("A part costs $80 and you apply a 25% markup on cost. The selling price is:", "$100", ["$105", "$120", "$85"], 0, "80 × 1.25 = 100. The margin on that price is 20%."),
      Q("To earn a 30% gross margin on a part that costs $70, the selling price is:", "$100", ["$91", "$70.30", "$110"], 1, "Price = cost ÷ (1 − margin) = 70 ÷ 0.70 = $100."),
      Q("The economic order quantity (EOQ) idea balances:", "Ordering costs against holding costs", ["Taxes against profit", "Shipping against wages", "Margin against markup"], 2, "A bigger order lowers ordering cost per unit but raises holding cost."),
      Q("Safety stock exists to protect against:", "Demand and lead time variation", ["Tax changes that raise the cost of parts at the border", "Price increases only, when suppliers adjust their list", "Theft only, from the shelves and the loading dock"], 0, "A buffer helps avoid stockouts when demand or delivery is uncertain."),
      Q("Which is part of inventory carrying cost?", "Storage, insurance, tied-up money, and obsolescence", ["Only freight charges paid to carriers on incoming orders", "Only sales commissions paid to the counter staff", "Only rent on the building where the stock is held"], 1, "Carrying costs are often a significant share of the inventory value each year."),
      Q("If a supplier's lead time gets longer, the reorder point should:", "Go up", ["Go down", "Stay the same", "Be removed"], 3, "A longer lead time means more usage during the wait."),
      Q("The 10th character of a North American VIN usually indicates:", "Model year", ["Engine size", "Paint colour", "Country of sale"], 0, "A VIN has 17 characters. Always confirm the application in your catalogue."),
      Q("When a shipment arrives visibly damaged, you should:", "Note the damage on the bill of lading before signing, and take photos", ["Sign clean and complain later, once the parts are checked", "Refuse to look at the boxes until the driver has left", "Throw away the packaging so the dock stays clear and tidy"], 2, "A noted shipping record is needed to support a claim with the carrier."),
      Q("A bill of lading is:", "The shipping contract and receipt for goods", ["A warranty card that comes with each part in the box", "A price list sent by the supplier to all customers", "A tax return filed at the end of the fiscal year"], 1, "It lists the goods, the shipper, and the carrier."),
      Q("Under Canadian TDG classes, which class includes corrosives such as battery acid?", "Class 8", ["Class 3", "Class 1", "Class 7"], 0, "Class 3 is flammable liquids, Class 1 explosives, Class 7 radioactive."),
      Q("Which TDG class covers flammable liquids such as gasoline?", "Class 3", ["Class 2", "Class 5", "Class 8"], 2, "Class 3 is flammable liquids. Class 2 is gases, including aerosols."),
      Q("The federal GST rate in Canada is:", "5%", ["13%", "10%", "15%"], 0, "Provinces differ because of HST and PST, so confirm the tax for the sale's location."),
      Q("If a customer asks for the cheapest option, the best parts technician response is to:", "Offer options and explain the differences in fit, quality, and warranty", ["Pick one without asking", "Say only the OEM part works", "Avoid discussing price"], 3, "Customers value honest options. Confirm fit before suggesting a substitute."),
      Q("Which is the best storage practice for flammable liquids?", "An approved flammable cabinet away from ignition sources", ["An open shelf near the heater, so the liquid stays warm", "A hot loading dock, where the cans are easy to reach", "Near the battery chargers, where there is good ventilation"], 1, "Follow the fire code and your employer's procedures for storage limits."),
      Q("Why must incompatible chemicals be stored separately?", "To prevent dangerous reactions if they leak or mix", ["To save space on the shelves by grouping similar sizes", "To keep prices low by buying bulk from a single supplier", "To avoid labels, since each cabinet is marked by colour"], 2, "The SDS lists incompatibilities, such as acids and bases.")
    ],
    4: [
      Q("Usage 12 per day, lead time 4 days, safety stock 24. What is the reorder point?", "72", ["48", "96", "36"], 3, "Reorder point = (12 × 4) + 24 = 72."),
      Q("An inventory turns 6 times per year. About how many days of inventory is that?", "About 61 days", ["About 6 days", "About 120 days", "About 365 days"], 0, "Days of inventory = 365 ÷ 6 ≈ 61."),
      Q("Sales are $250 000 and COGS is $175 000. What is the gross margin?", "30%", ["70%", "43%", "25%"], 1, "Gross profit = 75 000, and 75 000 ÷ 250 000 = 30%."),
      Q("A department filled 940 of 1000 order lines from stock. The fill rate is:", "94%", ["6%", "60%", "99%"], 0, "940 ÷ 1000 = 94%."),
      Q("A fast-moving part keeps running out. The best first step is to:", "Review demand history and adjust the min and max or reorder point", ["Stop selling it until the supplier can guarantee delivery", "Lower the price so that customers buy fewer units", "Order a single unit more each time, whatever the demand"], 2, "Use the actual demand and lead time data to change the settings."),
      Q("Ahead of a seasonal peak, a parts manager should:", "Increase stocking in advance based on past demand", ["Wait for the rush to begin so demand can be measured first", "Cut stock to free up cash before the busy season starts", "Close the counter early so staff can do extra counts"], 1, "Plan using history and supplier lead times."),
      Q("Count results show a large discrepancy on one part. The best action is to:", "Investigate the cause before adjusting the records", ["Adjust the records and move on, since the count was done", "Blame the last employee to handle that part for the error", "Ignore it, since small discrepancies always even out later"], 3, "Finding the root cause, such as a receiving error or an unrecorded sale, prevents repeats."),
      Q("A part ordered by an incorrect application fails to fit. A good way to prevent this is to:", "Verify year, VIN, and options in the catalogue before ordering", ["Order several to see which fits", "Skip the VIN", "Use the cheapest part"], 0, "Application checks avoid returns, delays, and unhappy customers."),
      Q("Supplier performance is often measured by:", "On-time delivery, order accuracy, and fill rate", ["The colour of the delivery truck and how clean it looks", "Brand logos on the packaging and the invoice", "The size of the supplier's office and the staff count"], 1, "Tracking this data supports ordering decisions."),
      Q("In ABC counting, the A items are usually counted:", "More often than C items", ["Less often than C items, since they sell the fastest", "Never, since the supplier keeps the count for them", "Only once in a lifetime, at the first stock take"], 0, "High-value items deserve tighter control."),
      Q("If you believe a task is dangerous, in Canada you generally have:", "A right to refuse unsafe work under health and safety law, following the procedure", ["No right at all, since the employer decides what is safe", "A right to ignore the supervisor and do the task your own way", "A duty to do it quickly so the job is over before harm occurs"], 2, "Follow your jurisdiction's procedure. Report the hazard to your supervisor."),
      Q("Under the FIFO costing method, the cost of goods sold uses:", "The cost of the oldest stock first", ["The newest cost first, since it is the most recent price", "The average of all prices paid over the past year", "The retail price charged to the customer at the counter"], 3, "FIFO matches the oldest costs with sales first."),
      Q("The catalogue shows part A was replaced by B, then B by C. What should you do?", "Check the notes and fit of C for the customer's application", ["Order A anyway", "Order B", "Tell the customer none exists"], 1, "Supersession chains can change dimensions or require extra parts."),
      Q("A daily lift truck inspection shows a damaged brake. You should:", "Tag it out of service and report it", ["Use it carefully until the end of the shift, then report it", "Use it only for light loads close to the dock doors", "Ignore it until the weekend, when maintenance has time"], 0, "Defective equipment must be removed from service until repaired."),
      Q("A customer disputes a return policy. A good response is to:", "Listen, verify the facts, explain the policy, and escalate if needed", ["Raise your voice so that the customer knows the policy is firm", "Ignore the customer and wait until they leave the counter", "Give a full refund without checking, to end the discussion"], 2, "Stay professional and follow the company's policy.")
    ]
  };

  const glossary = [
    ["Aftermarket", "Parts made by a company other than the original equipment maker."],
    ["Application", "The vehicle or machine that a part is designed to fit."],
    ["Backorder", "An order not yet filled because stock is not available."],
    ["Bill of lading", "The shipping document that is a contract and receipt for goods."],
    ["Bin location", "A coded storage position for a part in a stockroom."],
    ["CCA", "Cold cranking amps, a battery's cold-start rating."],
    ["Core charge", "A refundable deposit until a used part is returned."],
    ["Cross reference", "A table that matches part numbers between manufacturers."],
    ["Cycle count", "Counting a portion of inventory on a regular schedule."],
    ["DMS", "Dealer management system, the software for parts, service, and sales."],
    ["EOQ", "Economic order quantity, the order size that balances costs."],
    ["Fill rate", "The share of demand filled from stock."],
    ["FIFO", "First in, first out stock rotation or costing."],
    ["Gross margin", "(Price − cost) ÷ price, the share of the price that is profit."],
    ["Lead time", "The time from placing an order to receiving it."],
    ["Markup", "(Price − cost) ÷ cost, the percentage added to cost."],
    ["OEM", "Original equipment manufacturer."],
    ["Packing slip", "A list of items included in a shipment."],
    ["Purchase order", "A document that tells a supplier what to ship and at what price."],
    ["Reorder point", "The stock level at which a new order is placed."],
    ["RMA", "Return merchandise authorization, approval to return an item."],
    ["Safety stock", "Extra stock held to protect against variation in demand or lead time."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Stockout", "Running out of an item when demand occurs."],
    ["Supersession", "A new part number that replaces an old one."],
    ["TDG", "Transportation of Dangerous Goods, the Canadian shipping rules."],
    ["Turnover", "How many times inventory is sold and replaced in a period."],
    ["VIN", "Vehicle identification number, a unique 17-character code."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ];

  const reference = [
    {
      title: "Inventory and pricing formulas",
      list: [
        "Reorder point = (average daily usage × lead time in days) + safety stock",
        "Inventory turnover = cost of goods sold ÷ average inventory",
        "Days of inventory = 365 ÷ turnover",
        "Fill rate = lines filled from stock ÷ lines requested",
        "Gross margin % = (price − cost) ÷ price × 100",
        "Markup % = (price − cost) ÷ cost × 100",
        "Price for a target margin = cost ÷ (1 − margin as a decimal)"
      ],
      note: "Example: cost $70 with a 30% margin gives $70 ÷ 0.70 = $100."
    },
    {
      title: "Bolt grade markings",
      table: {
        head: ["Standard", "Marking", "Meaning"],
        rows: [["SAE Grade 2", "No lines", "Low to medium strength"], ["SAE Grade 5", "3 radial lines", "Medium strength"], ["SAE Grade 8", "6 radial lines", "High strength"], ["Metric 8.8", "8.8 on the head", "Medium strength"], ["Metric 10.9", "10.9 on the head", "High strength"]]
      },
      note: "Never substitute a lower grade than the one specified."
    },
    {
      title: "Hydraulic hose dash sizes",
      table: {
        head: ["Dash size", "Hose inside diameter (in)"],
        rows: [["-4", "1/4"], ["-6", "3/8"], ["-8", "1/2"], ["-10", "5/8"], ["-12", "3/4"], ["-16", "1"]]
      },
      note: "Dash numbers are the hose ID in sixteenths of an inch. Fitting thread types vary, so identify them carefully."
    },
    {
      title: "TDG classes (Canada)",
      table: {
        head: ["Class", "Description", "Examples"],
        rows: [["1", "Explosives", "Ammunition, flares"], ["2", "Gases", "Propane, aerosols"], ["3", "Flammable liquids", "Gasoline, solvents"], ["4", "Flammable solids", "Matches"], ["5", "Oxidizers and organic peroxides", "Some cleaning chemicals"], ["6", "Toxic and infectious", "Some pesticides"], ["7", "Radioactive", "Some instruments"], ["8", "Corrosives", "Battery acid"], ["9", "Miscellaneous", "Lithium batteries"]]
      },
      note: "Shipping requires proper classification, documents, and training. Follow your employer's procedures."
    },
    {
      title: "Common documents",
      list: [
        "<strong>Purchase order:</strong> tells the supplier what you want to buy.",
        "<strong>Packing slip:</strong> lists what is in the shipment.",
        "<strong>Invoice:</strong> a request for payment.",
        "<strong>Bill of lading:</strong> the shipping contract and receipt.",
        "<strong>RMA:</strong> approval to return an item.",
        "<strong>Three-way match:</strong> compare PO, receipt, and invoice before paying."
      ]
    }
  ];

  registerTrade({
  introVideo: { id: "1kqQzyXy-jo", title: "Intro video: Parts Technician" },
    id: "parts-technician", store: "parts-technician", title: "Parts Technician", name: "Parts Technician", short: "parts",
    category: "Automotive · Heavy Equipment · Supply",
    summary: "Identify, order, stock, and sell the right parts for vehicles and equipment, using catalogues, inventory systems, and strong customer service skills.",
    work: "Parts technicians work at counters, in warehouses, and in dealerships, supply houses, and fleet shops. They look up part numbers, receive and stock inventory, advise customers and technicians, and handle returns, cores, and warranty paperwork. The job mixes technical product knowledge, math, and organization.",
    duration: "Usually 3 years (Job Bank), varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    profileUrl: "https://red-seal.ca/eng/trades/parts-tech/description.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/19326/ca",
    jobSearch: "parts technician apprentice", journeySearch: "parts technician",
    aliases: "parts counter parts person auto parts heavy equipment parts inventory dealership warehouse",
    tools: ["CSA safety boots and anti-fatigue insoles", "Safety glasses and cut-resistant gloves", "Digital calipers", "Thread pitch gauges", "Tape measure and steel rule", "Calculator and notebook"],
    insight: {
      skills: ["Math for pricing and inventory", "Customer service and communication", "Organization and attention to detail", "Mechanical knowledge of vehicles and equipment"],
      hazards: ["Lifting heavy parts: use proper technique and aids", "Forklifts and pallet jacks: be trained and stay alert", "Hazardous products: read labels and SDSs", "Slips, trips, and falls: keep aisles clear"],
      settings: ["Automotive and truck dealerships", "Heavy equipment and agricultural dealers", "Independent parts stores and supply houses", "Fleet and industrial maintenance departments"]
    },
    toolGroups, mediaGroups, practiceBank,
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS; requirements vary)", "Practise percentages, fractions, and basic accounting math", "Apply to dealerships and parts suppliers, then register your apprenticeship"] },
      { title: "Year 1: safety and counter basics", items: ["Learn WHMIS, safe lifting, and warehouse safety", "Learn part numbers, catalogues, and cross references", "Receive, put away, and pick stock", "Learn basic fastener, fluid, and filter knowledge", "Build your core gear kit (see Buying tools)"] },
      { title: "Year 2: systems and inventory", items: ["Learn how engines, brakes, electrical, and hydraulic systems use parts", "Learn min/max, reorder points, and cycle counts", "Handle cores, returns, and warranty claims", "Use a dealer management or inventory system"] },
      { title: "Year 3: purchasing and profit", items: ["Calculate margin, markup, and turnover", "Learn ordering, supplier terms, and special orders", "Handle dangerous goods shipping under TDG", "Plan stock for seasonal demand"] },
      { title: "Year 4 and beyond: advanced", items: ["Analyze inventory performance and dead stock", "Help manage a parts department or branch", "Train new counter staff", "Use the Red Seal standard to find gaps in your experience"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade page and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary,
    cards: [
      { front: "Reorder point", back: "(Daily usage × lead time) + safety stock" },
      { front: "Inventory turnover", back: "COGS ÷ average inventory" },
      { front: "Gross margin", back: "(Price − cost) ÷ price" },
      { front: "Markup", back: "(Price − cost) ÷ cost" },
      { front: "SAE Grade 8 bolt marking", back: "Six radial lines on the head" },
      { front: "Hydraulic hose dash -8", back: "1/2 in inside diameter" },
      { front: "FIFO", back: "First in, first out" },
      { front: "Core charge", back: "A deposit refunded when the old part is returned." },
      { front: "TDG Class 3", back: "Flammable liquids" }
    ],
    jobsIntro: "Look for dealerships, truck and equipment dealers, independent parts stores, industrial supply houses, and fleet maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in vehicles and equipment, customer service, and organization.", "Visit parts counters in person when you can, and follow up.", "Ask what gear you need and what the employer supplies."],
    forumTopics: ["Starting out", "Inventory and ordering", "Catalogues and part numbers", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
}
