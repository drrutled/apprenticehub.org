// Appliance Service Technician guide. Practice questions are original study aids, not official Red Seal exam questions.
{
  const I = (name, why, search) => ({ name, why, search });
  const M = (name, desc, url) => ({ name, desc, url });
  const V = (name, desc, q) => M(name, desc, "https://www.youtube.com/results?search_query=" + q);
  const Q = (q, a, w, i, explain) => { const options = [...w]; options.splice(i, 0, a); return { q, options, answer: i, explain }; };

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade meters and hand tools stay accurate and safe for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        I("Fluke or Klein digital multimeter (CAT III rated)", "Measures voltage, resistance, and continuity safely. A rated meter is your most important diagnostic tool.", "Fluke 117 Klein MM400 digital multimeter CAT III"),
        I("Non-contact voltage tester", "A quick first check for live wires. Never rely on it alone, always confirm with your meter.", "Fluke 1AC Klein NCVT non-contact voltage tester"),
        I("Nut driver set (1/4 in, 5/16 in, 11/32 in) and a screwdriver set", "Appliances use hex-head screws everywhere. Insulated drivers add safety.", "Klein nut driver set 1/4 5/16 11/32 screwdriver set"),
        I("Torx and security bit set", "Many newer appliances use Torx and tamper-resistant screws.", "Torx security bit set T10 T15 T20 T25 Wera"),
        I("Needle-nose pliers, side cutters, and adjustable wrench", "Hold small connectors, cut wire, and loosen fittings.", "Klein needle nose pliers side cutters Crescent adjustable wrench"),
        I("Wire strippers and a crimp tool for insulated terminals", "Make solid, correct connections without damaging wires.", "Klein wire stripper crimper insulated terminals"),
        I("LED headlamp", "Hands-free light in cabinets, behind appliances, and in tight spaces.", "LED headlamp rechargeable Streamlight Milwaukee"),
        I("Safety glasses (CSA Z94.3) and cut-resistant gloves", "Sharp sheet metal edges and debris. Gloves off when working near rotating parts.", "CSA Z94.3 safety glasses Mechanix cut resistant gloves"),
        I("CSA-approved safety boots (green triangle)", "Heavy appliances and sharp edges. Choose slip-resistant soles.", "CSA safety boots composite toe slip resistant"),
        I("Flexible mat or knee pads", "Protect floors and your knees on long calls.", "kneeling pad knee pads work mat")
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in the field.",
      items: [
        I("Clamp meter (AC/DC)", "Measure current without opening the circuit, useful for compressors, motors, and heaters.", "Fluke 324 Klein CL800 clamp meter"),
        I("Appliance hand truck with straps", "Move heavy appliances safely. Use proper lifting technique.", "appliance dolly hand truck straps"),
        I("Socket and ratchet set (metric and imperial)", "For mounting hardware and fittings.", "socket set metric SAE 1/4 3/8 drive"),
        I("Electrical continuity and test lead kit with alligator clips", "Hands-free testing of switches, heaters, and sensors.", "multimeter test leads alligator clips kit"),
        I("Water pressure gauge and a bucket set", "Check household supply and catch water when testing plumbing connections.", "water pressure gauge hose thread tool bag bucket"),
        I("Tool bag or case", "Keeps tools together and protected on van calls.", "Veto Pro Pac tool bag electrician")
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or required for certified work. Ask before buying, and complete the training or licensing before using the equipment.",
      items: [
        I("Refrigerant manifold gauge set and hoses", "Pressure readings on sealed systems. Use only after refrigerant handling certification.", "refrigerant manifold gauge set R134a"),
        I("Refrigerant recovery machine and approved cylinder", "Required to recover refrigerant instead of venting it.", "refrigerant recovery machine"),
        I("Vacuum pump and micron gauge", "Evacuate moisture and air from a sealed system before charging.", "vacuum pump micron gauge refrigeration"),
        I("Electronic refrigerant leak detector", "Find small leaks in sealed systems.", "electronic refrigerant leak detector"),
        I("Brazing torch kit and nitrogen regulator", "Join tubing and purge with nitrogen to avoid internal oxidation.", "brazing torch kit nitrogen regulator"),
        I("Manometer (digital) and combustion analyzer or CO meter", "Check gas pressure and carbon monoxide on gas appliances. Gas work needs the right licence.", "digital manometer carbon monoxide analyzer gas appliance"),
        I("Insulation resistance tester or megohmmeter", "Check heating elements and motors for leakage to ground.", "insulation resistance tester megohmmeter")
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for electrical theory, schematics, and appliance systems. Check with your school and exam body about calculator rules before you buy.",
      items: [
        I("Scientific calculator (Casio fx-991 or TI-30XS)", "Ohm's law, power, and conversion calculations.", "Casio fx-991 Texas Instruments TI-30XS MultiView"),
        I("Basic electricity textbook (AC and DC)", "Learn circuits, motors, and controls.", "basic electricity textbook AC DC circuits"),
        I("Refrigeration basics textbook", "Learn the refrigeration cycle and sealed system service.", "refrigeration basics textbook cycle"),
        I("Wiring diagram and schematic reading workbook", "Practice reading ladder diagrams and appliance schematics.", "reading electrical schematics ladder diagrams workbook"),
        I("Canadian Electrical Code reference (CSA C22.1)", "Study the code basics for supply and grounding. Check which edition your province uses.", "Canadian Electrical Code CSA C22.1 book"),
        I("Field notebook (Rite in the Rain) and graph paper", "Record model numbers, readings, and parts. Weatherproof paper survives vans.", "Rite in the Rain notebook graph paper"),
        I("Binder, dividers, and highlighters", "Organize notes by year and topic for Red Seal review.", "binder dividers highlighters"),
        I("Mechanical pencil (0.5 mm)", "Neat notes and sketches of wiring.", "Pentel GraphGear 1000 mechanical pencil 0.5mm")
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        M("Red Seal exam preparation", "How Red Seal exams work and how to prepare. Find the Appliance Service Technician trade page from here.", "https://red-seal.ca/eng/welcome.shtml"),
        M("Codes Canada", "Canadian model codes, useful for building and safety context.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"),
        M("CSA Group", "Appliance and gas installation standards are published here.", "https://www.csagroup.org/"),
        M("Canadian Centre for Occupational Health and Safety (CCOHS)", "Free safety fact sheets on electrical safety, lifting, and WHMIS.", "https://www.ccohs.ca/"),
        M("Government of Canada Job Bank", "Occupation information and job postings for technicians.", "https://www.jobbank.gc.ca/")
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service data, and local rules.",
      items: [
        V("Using a multimeter", "Voltage, resistance, and continuity basics.", "how+to+use+a+multimeter+appliance+repair"),
        V("Reading appliance wiring diagrams", "Schematics and ladder diagrams.", "reading+appliance+wiring+diagram+schematic"),
        V("Refrigerator sealed system basics", "Compressor, condenser, evaporator, and metering device.", "refrigerator+sealed+system+basics+refrigeration+cycle"),
        V("Dryer troubleshooting", "No heat, no tumble, and thermal fuse tests.", "dryer+troubleshooting+no+heat+thermal+fuse+technician"),
        V("Washer troubleshooting", "Fill, drain, spin, and lid switch problems.", "washing+machine+troubleshooting+drain+pump+lid+switch"),
        V("Gas range and oven igniter", "How igniters and gas valves work.", "gas+oven+igniter+gas+valve+how+it+works"),
        V("Dishwasher repair", "Fill valves, pumps, and float switches.", "dishwasher+repair+troubleshooting+technician"),
        V("Appliance service call communication", "Talking to customers on a service call.", "appliance+technician+customer+service+call+tips")
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for appliance service yourself.",
      items: [
        M("Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"),
        M("TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"),
        M("YouTube: appliance repair podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", "https://www.youtube.com/results?search_query=appliance+repair+podcast")
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        M("YouTube: appliance technician podcast", "Service stories and troubleshooting lessons.", "https://www.youtube.com/results?search_query=appliance+technician+podcast+troubleshooting"),
        M("YouTube: refrigeration technician podcast", "Sealed system and electrical topics.", "https://www.youtube.com/results?search_query=refrigeration+technician+podcast"),
        M("YouTube: service business podcast", "Running service calls, estimates, and customer relationships.", "https://www.youtube.com/results?search_query=appliance+repair+business+podcast")
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, diagnostics, business, and leadership.",
      items: [
        M("YouTube: Red Seal appliance service exam prep (talk-through)", "Study talks you can listen to while commuting.", "https://www.youtube.com/results?search_query=Red+Seal+appliance+service+technician+exam+preparation"),
        M("YouTube: advanced appliance diagnostics podcast", "Inverter, control board, and sealed system diagnostics.", "https://www.youtube.com/results?search_query=advanced+appliance+diagnostics+podcast+inverter+control+board"),
        M("YouTube: mentoring apprentices and technician leadership", "Leadership and training skills for new journeypersons.", "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast")
      ]
    }
  ];

  const practiceBank = {
    1: [
      Q("Before touching electrical parts inside an appliance, you should:", "Disconnect the power and verify with a meter that it is dead", ["Turn the control dial to off and confirm the display has gone dark", "Wear rubber gloves and leave it plugged in", "Use a non-contact tester and nothing else"], 2, "Unplugging or opening the breaker and testing with a meter confirms the circuit is dead. Control switches do not isolate every part."),
      Q("A microwave oven's high-voltage capacitor:", "Can hold a dangerous charge even after it is unplugged", ["Is always fully discharged the moment the appliance is unplugged", "Holds only 12 volts", "Is only active when the door is open"], 0, "Discharge it safely following the manufacturer's procedure, or avoid it unless trained."),
      Q("A 120 V circuit has a 10 ohm resistance. What is the current?", "12 A", ["1.2 A", "120 A", "0.83 A"], 1, "I = V ÷ R = 120 ÷ 10 = 12 A."),
      Q("A heater draws 10 A at 120 V. What is the power?", "1200 W", ["12 W", "120 W", "12 000 W"], 3, "P = V × I = 120 × 10 = 1200 W."),
      Q("Resistance measurements with a multimeter must be made:", "With the circuit de-energized", ["With the power on and the meter set to its lowest range", "Only on live wires", "While the appliance runs"], 0, "Outside voltage disturbs the reading and can damage the meter."),
      Q("A good closed switch tested for continuity should read:", "Close to 0 ohms", ["Infinite ohms", "120 volts", "10 000 ohms"], 2, "A closed switch has almost no resistance."),
      Q("A multimeter showing OL on the ohms scale for a heating element indicates:", "An open circuit or a break in the element", ["A perfect element", "A short to ground inside the element sheath", "A low reading"], 1, "OL means overload, an infinite resistance, so the element is open."),
      Q("What is the purpose of the ground wire in an appliance?", "To give fault current a safe path and help trip the breaker", ["To carry normal load current", "To reduce the power bill by returning unused current", "To boost voltage"], 0, "Grounding limits shock risk if a live conductor touches the metal frame."),
      Q("An anti-tip bracket on a freestanding range:", "Prevents the range from tipping forward when weight is applied to an open door", ["Holds the oven door shut while the oven is self-cleaning", "Controls the gas", "Supports the vent"], 3, "Always reinstall it after service."),
      Q("When moving a large appliance, you should:", "Use a hand truck, proper lifting technique, and a second person when needed", ["Slide it across the floor alone to avoid lifting it", "Lift it alone from the doors", "Tilt it on its side"], 2, "Appliances are heavy and awkward. Protect your back and the floor."),
      Q("You smell natural gas in a customer's home. You should:", "Avoid switches and flames, leave, and call the gas utility or emergency services from outside", ["Turn on a fan", "Test for the leak with a lighter held near the gas line", "Wait and continue the repair"], 1, "Do not create any spark. Get everyone out and report it from a safe place."),
      Q("Where can you find hazard information about a cleaning product you use on a call?", "On the label and the Safety Data Sheet (SDS)", ["On the model plate attached to the back of the appliance", "On the owner's manual only", "On the customer invoice"], 0, "WHMIS requires labels and SDSs for hazardous products."),
      Q("Why do you record the model and serial numbers before ordering parts?", "Parts and wiring diagrams vary between versions, and the data plate identifies them", ["They show the customer's name", "They set the labour rate and repair price for the job", "They list the voltage of the house"], 3, "The correct part depends on the exact model and revision."),
      Q("Before replacing a washer's inlet hose, you should:", "Shut off the water supply valves", ["Turn on the washer to flush out the old hose first", "Remove the lid switch", "Unplug the dryer"], 2, "Close the valves and release pressure to prevent flooding."),
      Q("Why is lint buildup in a dryer vent a hazard?", "It can restrict airflow and cause a fire", ["It makes the drum louder and wears out the motor bearings", "It improves drying", "It only affects the smell"], 1, "Clean the vent and use proper venting materials."),
      Q("Typical Canadian household appliances such as a range or dryer run on:", "240 V, while many small appliances use 120 V", ["12 V only, supplied through a small transformer", "600 V", "24 V only"], 0, "Confirm the nameplate rating and the circuit before connecting.")
    ],
    2: [
      Q("A 4000 W, 240 V heating element draws approximately:", "16.7 A", ["1.67 A, found by dividing watts by ten", "60 A", "9.6 A"], 0, "I = P ÷ V = 4000 ÷ 240 ≈ 16.7 A."),
      Q("The resistance of a 4000 W, 240 V element is about:", "14.4 ohms", ["0.07 ohms", "57.6 ohms", "960 ohms"], 2, "R = V² ÷ P = 57 600 ÷ 4000 = 14.4 ohms."),
      Q("In a series circuit:", "The same current flows through every component", ["The voltage is the same across each component", "Each branch has its own current", "Current stops at the first load"], 0, "Series loads share the supply voltage and carry the same current."),
      Q("In a parallel circuit:", "Each branch sees the same voltage", ["Each branch carries the same current", "Resistance adds up", "Only one branch works at a time"], 1, "Parallel loads each get the supply voltage."),
      Q("An electric dryer's drum turns but there is no heat. The element tests good. A likely cause is:", "An open thermal fuse or high-limit thermostat", ["A broken drum belt that no longer turns the drum", "A clogged water filter", "A bad door gasket"], 3, "Safety devices in series with the heater cut power when they open, so test them for continuity."),
      Q("A washer will not fill. You should check:", "The water supply, inlet screens, and inlet valve coils", ["The drum belt and the lid switch only", "The lid shape", "The lint screen only"], 0, "A closed valve, blocked screen, or open coil stops water."),
      Q("A washer will not drain. A common cause is:", "A drain pump blocked by a foreign object", ["A weak door seal that lets water leak out at the front", "A shorted element", "A bad light"], 1, "Socks, coins, and lint block the pump. Check before replacing it."),
      Q("The lid switch on a washer:", "Allows spinning only when the lid is closed", ["Heats the water before the wash cycle begins", "Fills the tub", "Controls the soap"], 2, "It is a safety switch that stops the drum if the lid is open."),
      Q("A dishwasher's float switch:", "Prevents overfilling by shutting off the fill valve", ["Heats the water to the selected wash temperature", "Spins the arms", "Releases the detergent"], 0, "If it sticks open or closed, the machine may flood or fail to fill."),
      Q("In a refrigerator's sealed system, which part absorbs heat from the interior?", "The evaporator", ["The condenser", "The compressor", "The drier"], 3, "Refrigerant boils in the evaporator and absorbs heat. The condenser releases it."),
      Q("Dirty condenser coils lead to:", "Long run times, poor cooling, and higher energy use", ["A colder freezer and lower energy use over time", "Less noise", "Lower bills"], 1, "Heat cannot leave the coils, so the system works harder."),
      Q("The defrost heater in a no-frost refrigerator:", "Melts frost from the evaporator", ["Warms the fresh food section to prevent freezing", "Cools the condenser", "Runs the fan"], 0, "A failed defrost system lets frost build up and block airflow."),
      Q("The evaporator fan's job in a no-frost refrigerator is to:", "Circulate cold air through the freezer and fresh food sections", ["Cool the compressor only, so that it does not overheat", "Remove water from the drain", "Heat the door seal"], 2, "Without it, the compartments warm up."),
      Q("Releasing refrigerant to the atmosphere is:", "Not permitted, so recover it using approved equipment", ["Allowed in small amounts when the system is being repaired", "Fine if outdoors", "Required for safety"], 1, "Refrigerant handling needs certification under provincial and federal rules."),
      Q("R-600a refrigerant used in some refrigerators is:", "Flammable, so avoid ignition sources during service", ["Non-flammable and inert, so no special precautions apply", "Toxic only to plants", "Always replaced by water"], 0, "R-600a is isobutane. Follow the manufacturer's procedures."),
      Q("An open bake element in a range will test:", "Infinite resistance (OL)", ["0 ohms, the same as a closed switch", "240 V", "Half the rated value"], 3, "An open element does not allow current to pass.")
    ],
    3: [
      Q("An induction cooktop needs cookware that is:", "Magnetic, such as cast iron or magnetic stainless steel", ["Made of glass or ceramic, which heats up quickly", "Made of aluminum only", "Always copper"], 0, "Induction heats the pan through magnetism. A magnet should stick to the base."),
      Q("To convert a gas range from natural gas to propane, you generally:", "Use the manufacturer's conversion kit with the correct orifices and regulator setting", ["Change nothing, since the burners adjust on their own", "Drill the burner ports bigger", "Use a longer hose"], 2, "The fuels need different orifices and pressures. Gas work needs the right licence."),
      Q("The Canadian standard for installing natural gas and propane equipment is:", "CSA B149.1", ["CSA Z460, the standard for control of hazardous energy", "CSA C22.2", "CSA Z142"], 1, "B149.1 is the natural gas and propane installation code. Provincial licensing rules also apply."),
      Q("A weak hot surface igniter in a gas oven may:", "Not draw enough current to open the gas valve", ["Make the oven too hot and trip the high-limit thermostat", "Cause the door to lock", "Stop the clock"], 0, "The safety valve opens only when the igniter reaches current and temperature."),
      Q("Which dryer vent material is appropriate?", "Rigid or semi-rigid metal duct", ["Thin vinyl flex duct, since it bends around corners", "Plastic drain pipe", "Foil mylar duct with screws"], 3, "Metal duct resists fire and does not trap as much lint. Follow the manufacturer's maximum length."),
      Q("Microwave door interlock switches:", "Must never be bypassed because they stop the microwave energy when the door opens", ["Can be bypassed for a quick test if the door is held shut", "Control the clock only", "Are only for the light"], 2, "They prevent exposure to microwave energy."),
      Q("To pressure test a refrigeration system for leaks, you should use:", "Dry nitrogen (not oxygen)", ["Oxygen", "Compressed air from a shop line", "Propane"], 0, "Oxygen with oil can explode. Use a regulator and a safe test pressure."),
      Q("Evacuating a sealed system with a vacuum pump:", "Removes air and moisture before charging", ["Adds fresh oil to the compressor sump before charging", "Charges refrigerant", "Cleans the condenser"], 1, "Moisture in a system can freeze and damage components."),
      Q("When charging a domestic refrigerator, the charge is usually specified:", "By weight on the data plate", ["By the colour of the gauge", "By the length of the tubing", "By the temperature of the room"], 2, "Charge the weight listed by the manufacturer, using a scale."),
      Q("Why flow nitrogen through tubing while brazing?", "To prevent oxide scale forming inside the tube", ["To cool the flame and stop the tube from overheating", "To clean the outside", "To seal leaks"], 0, "Scale can plug capillary tubes and contaminate the system."),
      Q("An NTC thermistor used as a temperature sensor:", "Drops in resistance as temperature rises", ["Rises in resistance as temperature rises", "Stays the same", "Reads only voltage"], 3, "Negative temperature coefficient means resistance falls when heated."),
      Q("Before replacing a suspect control board, you should:", "Check the input power, connectors, and sensors", ["Replace it immediately, since boards are the most common failure", "Bypass the safeties", "Flash it with a lighter"], 1, "Many board failures are caused by bad connectors, sensors, or loads, so test first."),
      Q("An inverter compressor differs because it:", "Varies its speed to match cooling demand", ["Runs only on gas and does not need an electric motor", "Never turns off", "Uses no refrigerant"], 2, "Variable speed saves energy and reduces noise, but needs board diagnosis."),
      Q("A heat pump dryer dries clothes by:", "Using a refrigeration cycle to dehumidify and reuse the air", ["Venting all of the moist air outside through a duct", "Burning gas", "Using a microwave"], 1, "It uses a closed air loop with an evaporator and condenser."),
      Q("The best order for troubleshooting is typically:", "Verify the complaint, check simple causes, test components, repair, and confirm", ["Replace the most expensive part first, then test the rest", "Guess and swap parts", "Skip verification"], 0, "A systematic method saves time and prevents unnecessary parts.")
    ],
    4: [
      Q("A refrigerator's freezer is cold but the fresh food section is warm. In a no-frost model, a likely cause is:", "Restricted airflow, such as a stuck damper or frosted evaporator", ["A failed door light switch and a tripped breaker", "A tripped GFCI", "A loose handle"], 0, "The cold air passes into the fresh food section through a damper, and frost can block the path."),
      Q("A compressor hums, then clicks off on overload. The first things to check are:", "The start components and whether the compressor is mechanically locked", ["The lint screen and the dryer vent for blockage", "The door gasket only", "The ice maker"], 2, "A failed start relay or capacitor, or a seized compressor, causes repeated overload trips."),
      Q("On a 120/240 V range supply, you read 240 V between L1 and L2, 0 V from L1 to neutral, and 120 V from L2 to neutral. This suggests:", "The L1 leg has an open or is not connected on the circuit", ["A perfect supply with a normal split-phase voltage on both legs", "A failed neutral on both legs", "The range is grounded"], 1, "L1 to neutral should be 120 V. The missing leg points to an open on that path."),
      Q("A washer shakes excessively in the spin cycle. Possible causes include:", "An unlevelled machine, worn suspension, or a load out of balance", ["A bad door light, a full water supply, or a weak clock", "A full water supply", "A weak clock"], 3, "Check levelling, the shipping bolts on new machines, and the suspension parts."),
      Q("Before starting a repair that costs a lot, the best practice is to:", "Give the customer an estimate and get approval", ["Complete the work and explain the cost once it is finished", "Charge at the end whatever you like", "Skip the diagnosis"], 0, "Clear estimates and consent build trust."),
      Q("When deciding between repair and replacement, you should consider:", "Repair cost, age, parts availability, and the customer's needs", ["Only the colour and style, since customers care about looks", "Only the age", "Only your lunch schedule"], 2, "Give honest advice and let the customer decide."),
      Q("A warranty repair usually requires:", "The model, serial number, and proof of purchase", ["Only the customer's name and the date of the call", "A photo of the van", "Nothing"], 1, "Follow the manufacturer's warranty procedure."),
      Q("A refrigerant recovery cylinder should never be filled beyond about:", "80% of its capacity", ["100% of its capacity", "95% of its capacity", "50 psi"], 3, "Leave room for expansion. Use a scale and follow cylinder labels."),
      Q("After opening a sealed system for repair, you should also:", "Replace the filter drier, then evacuate and charge", ["Reuse the old drier, since it is not exposed to moisture", "Skip the vacuum", "Charge without weighing"], 0, "The drier removes moisture and should be replaced when the system is opened."),
      Q("Compared with natural gas, the typical manifold pressure for propane is:", "Higher", ["Lower", "Identical", "Zero"], 2, "Propane appliances typically run at a higher regulated pressure than natural gas. Always check the data plate."),
      Q("Why is carbon monoxide especially dangerous?", "It is odourless and colourless, so detectors and testing matter", ["It smells strongly, so people always notice it", "It is visible", "It is heavier than anything else"], 1, "Poor combustion can produce CO. Test gas appliances and tell customers about CO alarms."),
      Q("A 3000 W, 240 V element should have a resistance of about:", "19.2 ohms", ["12.5 ohms, found by dividing watts by voltage", "0.05 ohms", "76.8 ohms"], 0, "R = V² ÷ P = 57 600 ÷ 3000 = 19.2 ohms."),
      Q("A heating element reads continuity from its terminal to the metal frame. This means:", "The element is grounded and should be replaced", ["The element is perfect and the reading is normal", "The thermostat is fine", "The meter is broken"], 3, "An element-to-ground reading should be open (infinite). Continuity is a shock hazard."),
      Q("A dryer motor runs but the drum does not turn. A likely cause is:", "A broken or slipped drum belt", ["A bad thermal fuse that cuts power to the motor", "A blown lint screen", "A weak water valve"], 2, "Check the belt, idler pulley, and drum support rollers."),
      Q("When you finish a service call, you should:", "Test the appliance, clean up, and explain the work to the customer", ["Leave the cover off so the customer can see the repair", "Skip the test run", "Leave old parts in the home"], 1, "Verify the repair and reinstall all panels, ground wires, and safety devices.")
    ]
  };

  const glossary = [
    ["Amp (A)", "The unit of electric current."],
    ["Anti-tip bracket", "A bracket that stops a range from tipping forward."],
    ["Capacitor", "A part that stores electric charge, used for motor starting and running."],
    ["Compressor", "The part of a sealed system that pumps and pressurizes refrigerant."],
    ["Condenser", "The coil that releases heat from the refrigerant."],
    ["Continuity", "A complete path for current, tested with a meter."],
    ["Defrost heater", "A heater that melts frost from an evaporator."],
    ["Drain pump", "A pump that moves wastewater out of a washer or dishwasher."],
    ["Evaporator", "The coil where refrigerant absorbs heat."],
    ["Filter drier", "A device in a sealed system that removes moisture and debris."],
    ["Float switch", "A switch that senses water level in a dishwasher."],
    ["GFCI", "Ground fault circuit interrupter, a device that trips on current leakage."],
    ["Ground", "A safety path for fault current to return to the source."],
    ["High-limit thermostat", "A safety device that opens if a heater gets too hot."],
    ["Igniter", "A device that lights a gas burner."],
    ["Inlet valve", "A solenoid valve that lets water into a washer or dishwasher."],
    ["Inverter", "An electronic drive that varies a motor's speed."],
    ["Lid switch", "A safety switch that stops a washer from spinning with the lid open."],
    ["Magnetron", "The tube that makes microwaves in a microwave oven."],
    ["Metering device", "A capillary tube or valve that controls refrigerant flow."],
    ["Ohm (Ω)", "The unit of electrical resistance."],
    ["Orifice", "A small opening that meters gas to a burner."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Thermal fuse", "A one-time safety device that opens permanently at a set temperature."],
    ["Thermistor", "A temperature sensor whose resistance changes with temperature."],
    ["Volt (V)", "The unit of electrical pressure."],
    ["Watt (W)", "The unit of power, equal to volts times amps."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ];

  const reference = [
    {
      title: "Electrical formulas",
      list: [
        "Ohm's law: V = I × R, I = V ÷ R, R = V ÷ I",
        "Power: P = V × I, so I = P ÷ V and R = V² ÷ P",
        "Series: the same current through each part, and resistances add",
        "Parallel: the same voltage across each branch, and branch currents add",
        "Heater example: 4000 W at 240 V draws about 16.7 A and has about 14.4 ohms",
        "Always confirm ratings on the data plate"
      ]
    },
    {
      title: "Meter readings at a glance",
      table: {
        head: ["Test", "Good reading", "Bad reading"],
        rows: [["Closed switch (ohms)", "Near 0 ohms", "OL (open)"], ["Open switch (ohms)", "OL", "Near 0 ohms (shorted)"], ["Heating element (ohms)", "A finite value near V² ÷ P", "OL (open)"], ["Element to frame (ohms)", "OL (no connection)", "Any continuity (grounded)"], ["Supply voltage", "Near the rated 120 V or 240 V", "Zero or very low"]]
      },
      note: "Test resistance only with the power off and the part isolated."
    },
    {
      title: "Sealed system flow (refrigerator)",
      list: [
        "<strong>Compressor:</strong> pumps low-pressure vapour into high-pressure hot vapour.",
        "<strong>Condenser:</strong> releases heat so the refrigerant condenses to liquid.",
        "<strong>Filter drier:</strong> traps moisture and debris.",
        "<strong>Metering device:</strong> drops the pressure and meters refrigerant into the evaporator.",
        "<strong>Evaporator:</strong> refrigerant boils and absorbs heat from the cabinet.",
        "Vapour returns to the compressor through the suction line."
      ]
    },
    {
      title: "Typical symptoms and first checks",
      table: {
        head: ["Symptom", "First checks"],
        rows: [["Dryer no heat", "Supply voltage, thermal fuse, high-limit thermostat, element"], ["Dryer drum does not turn", "Belt, idler pulley, motor"], ["Washer does not fill", "Supply valves, inlet screens, inlet valve, pressure switch"], ["Washer does not drain", "Drain hose, pump filter, drain pump"], ["Fridge warm", "Condenser coils, fans, defrost system, sealed system"], ["Oven does not heat", "Element or igniter, sensor, control, safety valve"]]
      },
      note: "Always follow the manufacturer's service information for the specific model."
    },
    {
      title: "Safety and rules to remember",
      list: [
        "Isolate and prove electrical power dead before working, and lock out where required",
        "Discharge capacitors, especially in microwaves, following the manufacturer's procedure",
        "Do not bypass safety devices such as thermal fuses, interlocks, and anti-tip brackets",
        "Gas work needs the right provincial licence, and installations follow CSA B149.1",
        "Recover refrigerant with certified training and approved equipment, with provincial and federal rules applying",
        "Electrical supply and grounding follow the Canadian Electrical Code (CSA C22.1) and provincial amendments"
      ]
    },
    {
      title: "Food storage temperatures to know",
      list: [
        "Refrigerators should be at 4 °C or colder for safe food storage",
        "Freezers should be at about -18 °C or colder",
        "Check temperatures with an accurate thermometer after the appliance has run for several hours"
      ]
    }
  ];

  registerTrade({
  introVideo: { id: "MyYyu6Abfyg", title: "Intro video: Appliance Service Technician" },
    id: "appliance-service-technician", store: "appliance-service-technician", title: "Appliance Service Technician", name: "Appliance Service Technician", short: "appliance service",
    category: "Service · Electrical · Refrigeration",
    summary: "Diagnose, repair, and install home appliances such as refrigerators, washers, dryers, ranges, and dishwashers, using electrical testing and customer-focused service skills.",
    work: "Appliance service technicians visit homes and shops to troubleshoot electrical, mechanical, gas, and sealed-system problems. They use meters and wiring diagrams, replace parts, explain repairs and estimates to customers, and follow safety and refrigerant rules. Work involves driving, lifting, and working in tight spaces.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "Appliance and service technician associations (varies by province)",
    unionUrl: undefined,
    profileUrl: "https://red-seal.ca/eng/trades/appliance-serv-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/7760/ca",
    jobSearch: "appliance service technician apprentice", journeySearch: "appliance technician",
    aliases: "appliance repair technician refrigerator washer dryer dishwasher range oven microwave white goods",
    tools: ["Digital multimeter (CAT III)", "Non-contact voltage tester", "Nut drivers and Torx bits", "Pliers, strippers, and wrench", "Headlamp, safety glasses, and boots", "Appliance hand truck"],
    insight: {
      skills: ["Electrical and mechanical problem solving", "Reading wiring diagrams", "Customer service and communication", "Comfort with lifting and tight spaces"],
      hazards: ["Electric shock: isolate and prove dead before working", "Gas leaks and carbon monoxide: follow gas safety procedures", "Sharp edges and heavy lifting: use gloves and proper technique", "Refrigerants: recover them with proper training and equipment"],
      settings: ["Appliance repair shops and service companies", "Retail and manufacturer service departments", "Property management and maintenance", "Mobile service with a company van"]
    },
    toolGroups, mediaGroups, practiceBank,
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS; requirements vary)", "Practise basic electrical math and reading diagrams", "Apply to service companies and retailers, then register your apprenticeship"] },
      { title: "Year 1: safety and electrical basics", items: ["Learn electrical safety, lockout, and PPE", "Learn Ohm's law, power, and meter use", "Learn appliance components and basic wiring diagrams", "Learn safe lifting and moving", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: laundry and dishwashing", items: ["Diagnose washers, dryers, and dishwashers", "Test motors, valves, pumps, and switches", "Learn venting and water connection requirements", "Practise service call communication"] },
      { title: "Year 3: cooking and refrigeration", items: ["Diagnose electric and gas ranges and ovens", "Learn the refrigeration cycle and defrost systems", "Complete refrigerant handling certification as required", "Learn about microwaves and induction cooking"] },
      { title: "Year 4 and beyond: advanced diagnostics", items: ["Diagnose control boards, inverters, and sensors", "Do sealed system repairs and leak testing", "Handle estimates, warranties, and repair or replace decisions", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade page and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary,
    cards: [
      { front: "Ohm's law", back: "V = I × R" },
      { front: "Power formula", back: "P = V × I" },
      { front: "Resistance from power and voltage", back: "R = V² ÷ P" },
      { front: "Closed switch continuity reading", back: "Close to 0 ohms" },
      { front: "Open element reading", back: "OL (infinite resistance)" },
      { front: "Refrigerant in the evaporator", back: "Boils and absorbs heat from the cabinet." },
      { front: "Why use nitrogen when brazing", back: "Prevents oxide scale inside the tubing." },
      { front: "Never pressure test with", back: "Oxygen" },
      { front: "Canadian gas installation code", back: "CSA B149.1" }
    ],
    jobsIntro: "Look for appliance service companies, retailers with service departments, manufacturer authorized service providers, property managers, and maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in electrical work, problem solving, and customer service.", "Visit service companies in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Laundry and dishwashers", "Refrigeration and sealed systems", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
}
