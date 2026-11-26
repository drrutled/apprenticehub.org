// Instrumentation and Control Technician guide. Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const pattern = [2, 0, 3, 1, 2, 3, 0, 1, 2, 1, 0, 3, 1, 2, 0];
  const bank = (rows) => rows.map(([q, right, wrong, explain], i) => {
    const pos = pattern[i % pattern.length];
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  });
  const yt = (s) => `https://www.youtube.com/results?search_query=${s}`;

  registerTrade({
    id: "instrumentation-technician",
    store: "instrumentation-technician",
    title: "Instrumentation and Control Technician",
    name: "Instrumentation and Control Technician",
    short: "instrumentation and control",
    category: "Controls · Process · Industrial",
    summary: "Instrumentation and control technicians install, calibrate, maintain, and troubleshoot the sensors, transmitters, control valves, and control systems that measure and regulate industrial processes.",
    work: "You work on pressure, temperature, level, and flow instruments, control valves, analyzers, and the loops and control systems that tie them together. The job mixes field work in plants, refineries, mills, and utilities with bench calibration and screen-based diagnostics. Careful documentation matters because calibrations and safety systems are audited.",
    duration: "Usually 4–5 years (Job Bank), varies by province",
    union: "ISA (International Society of Automation)",
    unionUrl: "https://www.isa.org/",
    profileUrl: "https://red-seal.ca/eng/trades/instrument-cntl-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/297460/ca",
    jobSearch: "instrumentation technician apprentice",
    journeySearch: "instrumentation and control technician",
    aliases: "instrument technician instrumentation mechanic i&c control technician process control calibration transmitter plc dcs red seal 447a",
    tools: ["Digital multimeter (CAT rated)", "Loop calibrator (4-20 mA)", "Pressure calibrator or hand pump", "Small precision screwdrivers", "HART communicator or laptop interface", "CSA-approved PPE and lockout kit"],
    insight: {
      skills: ["Math and unit conversions", "Logical, step-by-step troubleshooting", "Careful documentation and attention to detail", "Understanding how a whole process works"],
      hazards: ["Process hazards: confirm isolation, depressurize and drain before opening impulse lines", "Electrical shock: lockout, test, and prove dead", "Hazardous atmospheres: gas testing and approved equipment in classified areas", "Working at heights and in confined spaces: permits and fall protection"],
      settings: ["Oil and gas, refining, and petrochemical plants", "Pulp and paper, mining, and metals", "Water and wastewater treatment", "Utilities, food and beverage, and pharmaceuticals"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold their accuracy and edge for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Precision screwdriver set (Wiha, Wera, or Klein)", why: "Small slotted and Phillips tips fit transmitter terminals and trim pots without damaging them.", search: "Wiha Wera precision screwdriver set slotted Phillips" },
          { name: "Insulated screwdrivers and nut drivers", why: "Useful for panel work near energized terminals. Check for damage before use.", search: "Klein Wera insulated screwdriver nut driver set 1000V" },
          { name: "Digital multimeter (Fluke 87V or 117, CAT III rated)", why: "Your main diagnostic tool for voltage, resistance, and mA. A rated, fused meter is a safety device.", search: "Fluke 87V 117 multimeter CAT III" },
          { name: "Wire strippers and cutters for small-gauge wire", why: "Clean strips on 22 to 14 AWG instrument cable without nicking conductors.", search: "Klein Katapult wire stripper 10-22 AWG flush cutters" },
          { name: "Needle-nose pliers and small diagonal cutters", why: "Working inside crowded junction boxes and panels.", search: "Knipex needle nose pliers mini diagonal cutters" },
          { name: "Adjustable wrenches (6 in and 10 in) and open-end wrench set", why: "Fittings, tubing, and instrument mounts. Imperial and metric sets are both useful.", search: "Crescent adjustable wrench 6 10 inch combination wrench set SAE metric" },
          { name: "Tubing cutter and tube deburring tool", why: "Square cuts and clean ends are essential for compression fittings on impulse lines and air tubing.", search: "Swagelok tube cutter deburring tool 1/4 inch 3/8 inch" },
          { name: "Headlamp and small flashlight", why: "Dark junction boxes, cabinets, and field stations.", search: "Streamlight headlamp small flashlight work" },
          { name: "CSA-approved safety boots, safety glasses, hard hat, and hearing protection", why: "Plant sites need full PPE. Comfortable, rated gear is what you will wear all shift.", search: "CSA safety boots safety glasses hard hat hearing protection" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your site.",
        items: [
          { name: "Loop calibrator (Fluke 707 or similar)", why: "Sources and measures 4-20 mA to test loops and transmitters.", search: "Fluke 707 loop calibrator 4-20 mA" },
          { name: "Clamp meter (AC/DC)", why: "Measures current without breaking the circuit. Useful on power supplies and motor circuits.", search: "Fluke clamp meter AC DC true RMS" },
          { name: "Hand pressure pump and test gauge set", why: "Apply known pressure to check transmitters and switches. Use calibrated reference gauges.", search: "pneumatic hand pump pressure calibrator test gauge" },
          { name: "Tube bender and flaring tools", why: "Forming small-diameter tubing for impulse lines and instrument air.", search: "Swagelok tube bender 1/4 inch 3/8 inch" },
          { name: "Torque wrench (in-lb and ft-lb)", why: "Manifold and flange bolts have torque values. Correct torque prevents leaks.", search: "torque wrench in-lb ft-lb click type" },
          { name: "Heat gun and heat-shrink supplies", why: "Terminating and protecting instrument cable.", search: "heat gun heat shrink tubing assortment" },
          { name: "Tool pouch or bag with small-parts organizer", why: "Keeps small parts like ferrules, fuses, and fittings in one place.", search: "Veto tool pouch small parts organizer" },
          { name: "Cordless drill and impact driver", why: "Mounting brackets and enclosures. Choose one battery platform.", search: "Milwaukee M18 drill impact driver combo" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the employer, or required only for specific tasks. Ask before buying.",
        items: [
          { name: "HART communicator or modem", why: "Configures smart transmitters and reads diagnostics over the 4-20 mA loop. Usually company equipment.", search: "HART communicator modem USB smart transmitter" },
          { name: "Multifunction process calibrator (temperature, mA, V, pressure module)", why: "A single calibrator that covers many signal types. Normally a shop tool.", search: "Fluke 754 process calibrator documenting" },
          { name: "Temperature dry-block calibrator", why: "Checks RTDs and thermocouples against a known temperature. Usually a shop tool.", search: "dry block temperature calibrator RTD thermocouple" },
          { name: "Insulation resistance tester", why: "Checks cable and device insulation. Normally company supplied.", search: "Fluke insulation resistance tester megohmmeter" },
          { name: "Gas detector and personal monitor", why: "Required in many plants for atmospheric testing. Typically supplied by the employer.", search: "four gas monitor personal H2S LEL O2 CO" },
          { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for math, drawings, and standards study. Check with your school and exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Scaling, square roots for flow, and unit conversions. Know it before test day.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Canadian Electrical Code, Part I (CSA C22.1)", why: "You will use it for wiring, hazardous locations, and Class 2 circuits. Check your province's adopted edition.", search: "Canadian Electrical Code Part I CSA C22.1" },
          { name: "Instrumentation textbook or study guide", why: "Covers measurement, control theory, and calibration at an apprentice level.", search: "instrumentation and process control textbook apprentice" },
          { name: "Mechanical pencil (0.5 mm) and erasers", why: "Clean drawings of loop diagrams and P&IDs.", search: "Pentel GraphGear mechanical pencil 0.5mm eraser" },
          { name: "Graph paper and a 12 in steel ruler", why: "Sketching loop diagrams and calibration curves.", search: "graph paper pad 12 inch steel ruler" },
          { name: "Highlighters and index tabs", why: "Mark key code rules and tables for quick access.", search: "index tabs highlighters code book" },
          { name: "Field notebook (Rite in the Rain)", why: "Record calibration data, as-found and as-left values, and tag numbers.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and USB flash drive", why: "Organize notes, manuals, and datasheets by year.", search: "binder dividers USB flash drive" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada", desc: "National model codes and links to code information.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "ISA (International Society of Automation)", desc: "Standards such as ISA-5.1 for symbols and identification, plus training resources.", url: "https://www.isa.org/" },
          { name: "CSA Group", desc: "Publisher of the Canadian Electrical Code and related standards.", url: "https://www.csagroup.org/" },
          { name: "IBEW", desc: "Union electrical and instrumentation training information.", url: "https://www.ibew.org/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
        items: [
          { name: "4-20 mA loop basics", desc: "How current loops work and how to test them.", url: yt("4-20+mA+current+loop+basics+instrumentation") },
          { name: "Pressure transmitter calibration", desc: "Zero, span, and as-found/as-left checks.", url: yt("pressure+transmitter+calibration+zero+span") },
          { name: "Differential pressure flow measurement", desc: "Orifice plates and DP flow transmitters.", url: yt("differential+pressure+flow+measurement+orifice+plate") },
          { name: "Control valve basics", desc: "Valve bodies, actuators, and positioners.", url: yt("control+valve+basics+actuator+positioner") },
          { name: "PID control tuning", desc: "Proportional, integral, and derivative action.", url: yt("PID+control+tuning+explained+proportional+integral+derivative") },
          { name: "Thermocouples and RTDs", desc: "Temperature sensors, types, and wiring.", url: yt("thermocouple+RTD+temperature+sensors+explained") },
          { name: "Reading P&IDs", desc: "Instrument symbols and tag numbers.", url: yt("how+to+read+P%26ID+instrumentation+symbols+ISA+5.1") },
          { name: "Intrinsic safety basics", desc: "How intrinsically safe loops limit energy.", url: yt("intrinsic+safety+barriers+hazardous+area+instrumentation") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for instrumentation yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: instrumentation technician podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("instrumentation+technician+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: process control and automation podcast", desc: "Control concepts and field stories to hear while commuting.", url: yt("process+control+automation+podcast") },
          { name: "YouTube: instrument calibration talks (listen-along)", desc: "Calibration practice and documentation.", url: yt("instrument+calibration+best+practices+talk") },
          { name: "YouTube: control valve and loop troubleshooting", desc: "Hear experienced technicians diagnose loop problems.", url: yt("loop+troubleshooting+control+valve+instrument+technician") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, safety systems, and leadership.",
        items: [
          { name: "YouTube: Red Seal instrumentation exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+instrumentation+control+technician+exam+preparation") },
          { name: "YouTube: functional safety and SIS podcast", desc: "Safety instrumented systems and lifecycle thinking.", url: yt("functional+safety+SIS+IEC+61511+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Before opening an impulse line on a pressure transmitter, you should first:", "Confirm the process is isolated, depressurized, and drained under your site's procedure", ["Crack the fitting slightly and wait to see whether any process fluid escapes", "Assume the line is safe to open because the transmitter reads close to zero on the display", "Open the vent while still under full pressure"], "Process isolation and verified zero pressure come before breaking any connection."],
        ["A 4-20 mA loop on a 0-100 percent range reads 12 mA. What percent of span is that?", "50%", ["12%", "60%", "75%"], "(12 - 4) / 16 = 0.5, or 50%."],
        ["What does WHMIS provide?", "Labels and safety data sheets for hazardous products", ["Pressure and temperature ratings for tubing and fittings used on process lines", "Wage and overtime tables for apprentices working in industrial plants", "Thermocouple colour codes"], "WHMIS covers workplace hazardous products."],
        ["The unit of pressure in SI is the:", "Pascal (kPa and MPa are common multiples)", ["Newton per metre, which is a unit of force per unit length", "Joule, the unit used for energy and work in the SI system", "Watt"], "1 Pa = 1 N/m2. Instruments are commonly in kPa."],
        ["Gauge pressure plus atmospheric pressure equals:", "Absolute pressure", ["Differential pressure", "Vacuum", "Static head"], "Absolute = gauge + atmospheric."],
        ["Which instrument measures differential pressure?", "A DP transmitter with a high and low side", ["A single-port gauge vented to atmosphere", "A thermocouple junction that produces a small voltage proportional to temperature", "A float switch that opens or closes a contact at a set liquid level"], "A DP transmitter measures the difference between two pressures."],
        ["A Pt100 RTD has a resistance of about what at 0 degrees C?", "100 ohm", ["10 ohm", "1000 ohm", "0 ohm"], "Pt100 means 100 ohm at 0 degrees C."],
        ["Why is a 2-wire 4-20 mA transmitter called 'loop powered'?", "It gets its operating power from the same two wires that carry the signal", ["It needs a separate 120 V AC supply wired in to the transmitter housing", "It runs from a built-in battery that is replaced during each calibration", "It uses compressed air"], "The loop supply provides power and the transmitter regulates current to represent the measurement."],
        ["Which thermocouple type commonly uses a chromel and alumel pairing?", "Type K", ["Type T", "Type J", "Type S"], "Type K is chromel-alumel. Type J is iron-constantan, and Type T is copper-constantan."],
        ["What does 'zero' adjustment on a transmitter do?", "Sets the output for the lower range value", ["Changes the span so the transmitter output reaches 20 mA at a different input", "Resets the tag number", "Sets the high and low alarm limits in the control system"], "Zero sets the low end. Span sets the range."],
        ["Under ISA-5.1, what does the tag 'FT' typically indicate?", "Flow transmitter", ["Fuse terminal block used for field wiring in a junction box", "Float tank", "Frequency test point used when checking a variable-speed drive"], "In ISA-5.1, the first letter is the measured variable and the second letter is the function. F is flow and T is transmitter."],
        ["What is the main purpose of a lockout tag and lock?", "To prevent equipment from being energized or operated while work is underway", ["To label and tag tools so they are returned to the correct crib after the job", "To record calibration dates", "To mark wiring and terminals so each conductor can be identified later"], "Personal locks and tags control hazardous energy."],
        ["Which tool is best for a square cut on small-diameter stainless instrument tubing?", "A tube cutter", ["A standard hacksaw with a fine-tooth blade held square to the tube", "A cold chisel", "Side cutters squeezed around the tube and rotated until it separates"], "A tube cutter makes a square cut. Deburr the inside and outside afterward."],
        ["A multimeter measuring DC current in a loop is connected:", "In series with the loop", ["In parallel across the supply", "Across the transmitter terminals only", "To ground"], "Current is measured by putting the meter in series."],
        ["One kPa is approximately how many psi?", "0.145 psi", ["6.9 psi", "14.5 psi", "1.45 psi"], "1 psi is about 6.895 kPa, so 1 kPa is about 0.145 psi."]
      ]),
      2: bank([
        ["On a DP flow measurement using an orifice plate, flow is proportional to:", "The square root of the differential pressure", ["The differential pressure directly, so doubling the DP doubles the flow", "The square of the differential pressure", "The static pressure measured in the pipe upstream of the orifice plate"], "Flow varies with the square root of DP, so 25% DP corresponds to 50% flow."],
        ["A transmitter is ranged 0-200 kPa. What output in mA is expected at 50 kPa?", "8 mA", ["6 mA", "10 mA", "12 mA"], "50 is 25% of span, so 4 + 0.25 x 16 = 8 mA."],
        ["A 250 ohm resistor in a 4-20 mA loop converts the signal to:", "1-5 V DC", ["0-10 V DC", "0-5 V DC", "4-20 V DC"], "4 mA x 250 = 1 V and 20 mA x 250 = 5 V."],
        ["Which type of flowmeter requires a conductive liquid?", "Magnetic flowmeter", ["Coriolis meter, which measures mass flow using vibrating tubes", "Vortex meter", "Orifice plate, which creates a pressure drop that is measured across it"], "Magnetic flowmeters rely on the conductive fluid moving through a magnetic field."],
        ["An air-to-open control valve fails:", "Closed on loss of air", ["Open on loss of air", "Stuck in last position always", "At 50 percent"], "Air-to-open valves close when air is lost, assuming a spring-return actuator."],
        ["The proportional band of a controller is 50%. The gain is:", "2", ["0.5", "50", "1"], "Gain = 100 / proportional band (%) = 100 / 50 = 2."],
        ["Which control action eliminates steady-state offset?", "Integral action", ["Proportional action alone", "Derivative action", "On-off action"], "Integral action keeps adjusting output until error is zero."],
        ["A 3-15 psi pneumatic signal at 9 psi represents what percent of span?", "50%", ["60%", "40%", "75%"], "(9 - 3) / 12 = 0.5."],
        ["Why should a thermocouple be connected with matching extension wire?", "Other wire types create additional junctions that produce error", ["It makes the conductors easier to strip and terminate at the head", "It increases resistance", "It lowers the signal level so that noise is reduced on long runs"], "Extension wire must match the thermocouple's thermoelectric characteristics."],
        ["The hydrostatic pressure of a 2 m column of water is closest to:", "19.6 kPa", ["9.8 kPa", "2 kPa", "196 kPa"], "P = rho x g x h = 1000 x 9.81 x 2 = about 19.6 kPa."],
        ["A pH electrode measures:", "The hydrogen-ion activity in a solution", ["The solution temperature only, which is then converted into a pH value", "The electrical conductivity of the liquid between two metal probes", "Dissolved oxygen"], "pH is measured by a glass electrode and a reference electrode."],
        ["What is the purpose of a 3-valve manifold on a DP transmitter?", "To isolate and equalize the transmitter safely for zeroing or removal", ["To boost the process pressure so the transmitter responds faster", "To filter solids out of the process before they reach the sensor", "To reverse flow"], "Two block valves and an equalizing valve allow safe isolation and zeroing."],
        ["Hysteresis in an instrument describes:", "A difference in output for the same input depending on the direction of approach", ["Random noise that makes the output wander around a steady input", "Linear gain error", "Slow drift of the zero that builds up gradually over a year in service"], "Hysteresis is seen when output at a given input differs for upscale and downscale travel."],
        ["What does a positioner do on a control valve?", "Compares the stem position to the signal and adjusts air to the actuator", ["Reduces the process pressure upstream so the valve sees a steady supply", "Measures the flow through the valve and reports it to the controller", "Isolates the valve for maintenance"], "A positioner ensures the valve reaches the position called for by the controller."],
        ["Which of these is a typical purpose of a loop check?", "Verify that the field device, wiring, and control system signal agree end to end", ["Measure the plant noise level", "Replace all of the fuses in the marshalling cabinet as a precaution", "Retune all of the PID loops so they respond faster to setpoint changes"], "Loop checks confirm signal path and scaling."]
      ]),
      3: bank([
        ["A level transmitter on an open tank with water, calibrated by DP, has its high side connected at the bottom. The low side is:", "Vented to atmosphere", ["Connected to the bottom as well", "Capped", "Connected to a vacuum pump"], "On an open tank, the low side is vented so the transmitter sees head pressure only."],
        ["As-found and as-left calibration data are recorded to:", "Show instrument condition before and after adjustment for traceability and trending", ["Make the calibration report longer so it looks thorough to an auditor", "Replace the preventive maintenance schedule so that checks can be skipped", "Set alarms"], "As-found data reveals drift. As-left proves the instrument is within tolerance."],
        ["What is dead time in a control loop?", "The delay between a change and the first process response", ["The time the controller spends switched off during a shutdown or in manual", "The scan time the PLC needs to read inputs and solve its logic once", "Time to reach 63% of final value"], "Dead time makes loops harder to control and limits aggressive tuning."],
        ["In cascade control, the output of the primary controller is:", "The setpoint of the secondary controller", ["The measured variable of the primary", "A disturbance", "The output to the valve directly"], "Cascade uses a fast inner loop whose setpoint comes from a slower outer loop."],
        ["Which communication protocol superimposes a digital signal on a 4-20 mA loop?", "HART", ["Modbus TCP", "EtherNet/IP", "USB"], "HART uses frequency shift keying over the analog loop."],
        ["Modbus RTU commonly uses which physical layer?", "RS-485", ["Fibre only", "USB", "HART"], "Modbus RTU is typically on RS-485 or RS-232."],
        ["Intrinsically safe equipment is designed so that:", "Energy in the circuit is too low to ignite a hazardous atmosphere", ["It is housed in a heavy enclosure that contains an explosion", "It is pressurized with clean air so flammable gas cannot enter the enclosure", "It is immersed in oil so any spark is quenched before reaching the gas"], "Intrinsic safety limits energy. An explosion-proof enclosure is a different method."],
        ["A shield on instrument signal cable is generally grounded at:", "One end, to avoid ground loops, as per the design", ["Both ends in every case, so the shield always has a solid path to ground", "Neither end", "The middle of the cable run, at the first junction box on the way"], "Typical practice grounds at one end unless the design calls for otherwise."],
        ["A Coriolis flowmeter directly measures:", "Mass flow", ["Velocity only", "Level", "Temperature only"], "Coriolis meters measure mass flow and also density."],
        ["Integral windup is:", "A condition where the integral term accumulates while the output is saturated", ["Twisting of the signal wire pairs, which reduces noise pickup in the cable", "A calibration error caused by a zero that was set at the wrong input value", "A pneumatic fault"], "Anti-windup features prevent overshoot after saturation."],
        ["A temperature loop's reading is stuck at the top of its range. A likely cause for a thermocouple is:", "An open thermocouple that the system drives upscale by burnout setting", ["A perfectly accurate reading because the process really is at its top range", "A short circuit at the supply", "A shifted setpoint that makes the controller push the output to its limit"], "Burnout detection drives the input to a defined upscale or downscale value when the sensor opens."],
        ["Which valve characteristic gives equal percentage change in flow for equal travel increments?", "Equal percentage", ["Quick opening, which gives most of the flow in the first part of travel", "Linear, where flow changes by the same amount for each increment of travel", "On-off"], "Equal percentage valves change flow by the same percentage per unit travel."],
        ["Why do you check for a ground loop when you see noise on a 4-20 mA signal?", "Multiple ground paths can induce circulating current and noise", ["It increases the loop voltage so that the signal is easier to read", "It makes the loop respond faster to changes in the process variable", "It lowers the load resistance"], "Ground loops cause noise and offset."],
        ["Which standard defines instrument symbols and tag identification?", "ISA-5.1", ["CSA C22.1", "IEC 61511", "NFPA 70E"], "ISA-5.1 covers symbols and identification."],
        ["The loop resistance in a 24 V loop with a transmitter needing 12 V minimum and 20 mA maximum current should be at most about:", "600 ohm", ["1200 ohm", "250 ohm", "100 ohm"], "(24 - 12) / 0.020 = 600 ohm."]
      ]),
      4: bank([
        ["In a safety instrumented system, SIL is a measure of:", "Required risk reduction performance of a safety function", ["Signal impedance level of the wiring between sensor and logic solver", "Sensor input latency", "System inventory list of every instrument and valve in the plant"], "Safety Integrity Level is a discrete level of risk reduction. IEC 61511 applies in the process sector."],
        ["IEC 61511 applies primarily to:", "Safety instrumented systems for the process industry", ["Low-voltage wiring in commercial buildings, such as lighting and alarms", "Hand tools", "Telecom and data networks that connect plant offices to the outside world"], "IEC 61511 covers the functional safety lifecycle for process industry SIS."],
        ["A controller loop oscillates continuously. The first tuning change to consider is:", "Reducing the proportional gain or increasing integral time", ["Increasing the gain further so the loop corrects each error more strongly", "Removing the controller", "Doubling the setpoint so the loop works further from its stable region"], "High gain or too much integral action causes oscillation."],
        ["The Ziegler-Nichols ultimate-gain method requires finding the gain at which the loop:", "Oscillates with constant amplitude", ["Becomes unstable immediately and the oscillation grows until the valve saturates", "Stops moving once the controller output has settled at the setpoint", "Reads zero"], "Ultimate gain and period are used to compute tuning settings."],
        ["A DP transmitter on a steam flow line has wet impulse lines. The most important maintenance concern is:", "Keeping equal, full legs without trapped air or leaks", ["Painting the manifold and tubing so corrosion does not reach the fittings", "Using the longest tubing available so the transmitter sits far from the heat", "Reducing line size to 1 mm"], "Unequal legs, leaks, or air cause DP errors."],
        ["Partial stroke testing of a safety valve is done to:", "Detect some dangerous failures without full process shutdown", ["Calibrate the flow meter that is installed in the same line as the valve", "Tune the PID loop that drives the valve during normal operation", "Increase the valve's capacity"], "Partial stroking moves the valve a small amount to prove it can move."],
        ["A transmitter is within tolerance at 0 and 100 percent but out at 50 percent. This indicates:", "Linearity error", ["Zero shift only", "Span shift only", "Sensor failure only"], "A mid-range error with correct endpoints suggests non-linearity."],
        ["Why do technicians often perform a five-point check (0, 25, 50, 75, 100%)?", "To check linearity across the range both upscale and downscale", ["To save time compared with a full calibration across every point of the range", "Only to match the number of calibration points printed on the manual cover", "To measure ambient temperature"], "Multiple points show linearity and hysteresis."],
        ["In a Class I Zone 1 area, equipment must be:", "Certified and marked for use in that zone and gas group", ["Any industrial grade equipment with a high ingress protection rating", "Painted yellow", "Wired in standard cable run in open trays with no special seals"], "Equipment must be certified for the zone."],
        ["Feedforward control is used to:", "Act on a measured disturbance before it affects the process variable", ["Replace feedback control entirely so the controller never needs the measurement", "Reset the PLC", "Lower the noise on the input signal by averaging several readings"], "Feedforward anticipates disturbances and is typically combined with feedback trim."],
        ["The Cv of a control valve describes:", "Flow capacity of the valve", ["Closing voltage needed by the actuator solenoid to shut the valve", "Control variance, a measure of how far the loop wanders from setpoint", "Cable value"], "Cv is a capacity coefficient used in valve sizing."],
        ["A bumpless transfer when switching a controller from manual to auto means:", "The output does not jump when the mode changes", ["The controller reboots and reloads its configuration when the mode changes", "The valve fully opens briefly so the operator can confirm that it moves", "The setpoint drops to zero"], "Bumpless transfer matches setpoint or output to prevent process upsets."],
        ["An 'ASD' or 'ESD' system's main purpose is to:", "Bring the process to a safe state upon a dangerous condition", ["Increase throughput by running the process closer to its design limits", "Log process data only, so the operators can review trends after a trip", "Tune loops"], "Shutdown systems move a process to a safe state."],
        ["Which document would you update after replacing an instrument with a different range?", "Instrument datasheet, loop drawing, and calibration records (through management of change)", ["Only the shipping record", "Nothing, since a range change on a like-for-like instrument is minor", "Only the purchase invoice, so the accounting records show the new part"], "Changes must be documented and approved so records match the plant."],
        ["A pressure transmitter drifts upward over weeks in a hot location. Which is a plausible cause?", "Temperature effects or process contamination at the sensor", ["Zero-based accuracy, a rating that is stated for the transmitter at the factory", "Cable colour", "Normal changes in control room lighting near the operator screens"], "Ambient temperature, plugging, and diaphragm fouling are common drift causes."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm the trade is a fit: math, electronics, and process interest.", "Take high school math, physics, and computer courses if you can.", "Find an employer sponsor in industry, a contractor, or a utility.", "Gather safety tickets such as WHMIS, H2S Alive (where required), and first aid, and register as an apprentice with your provincial authority."] },
      { title: "Year 1: Safety, electrical basics, and measurement", items: ["Lockout, process isolation, and site safety.", "DC and AC electrical basics, multimeter use.", "Pressure, temperature, level, and flow concepts.", "Tubing, fittings, and basic installation."] },
      { title: "Year 2: Transmitters, calibration, and loops", items: ["4-20 mA loops and calibration procedures.", "DP transmitters, manifolds, and impulse lines.", "Control valves and actuators.", "Reading P&IDs and loop drawings."] },
      { title: "Year 3: Control systems and communications", items: ["PLC and DCS fundamentals.", "PID control and tuning.", "Fieldbus, HART, and industrial networks.", "Analyzers and specialty measurement."] },
      { title: "Year 4 and beyond: Safety systems, troubleshooting, and planning", items: ["Safety instrumented systems and hazardous area equipment.", "Advanced loop troubleshooting and tuning.", "Commissioning and turnaround planning.", "Documentation, management of change, and mentoring."] },
      { title: "Certification", items: ["Complete in-school and on-the-job hours required by your province.", "Write the Red Seal exam (Instrumentation and Control Technician) after your apprenticeship, according to your province's process.", "Use the occupational standard and practice tests to study.", "Keep your certificate and tickets current, and keep learning."] }
    ],
    glossary: [
      ["Accuracy", "How close a measurement is to the true value."],
      ["Actuator", "A device that moves a valve or damper in response to a control signal."],
      ["As-found", "The instrument's performance before any adjustment is made."],
      ["As-left", "The instrument's performance after adjustment and calibration."],
      ["Calibration", "Comparing an instrument to a known standard and adjusting it to meet tolerance."],
      ["Control loop", "A measurement, controller, and final control element that regulate a process variable."],
      ["Control valve", "A valve that regulates flow, pressure, level, or temperature in response to a controller."],
      ["Cv", "Valve flow coefficient, a measure of valve capacity."],
      ["Dead time", "The delay between a change in input and the start of the process response."],
      ["DCS", "Distributed control system: a plant-wide control system with distributed controllers."],
      ["Differential pressure (DP)", "The difference between two pressures."],
      ["Drift", "A gradual change in instrument output over time with the same input."],
      ["Hysteresis", "The difference in output for the same input depending on the direction of travel."],
      ["HART", "A protocol that superimposes digital information on a 4-20 mA signal."],
      ["Impulse line", "A small line that connects a process connection to an instrument."],
      ["Intrinsic safety", "A protection method that limits electrical and thermal energy to prevent ignition."],
      ["Linearity", "How closely the output follows a straight line against input."],
      ["Loop check", "A test that verifies the whole signal path from field device to control system."],
      ["PID", "Proportional, integral, derivative: a common feedback control algorithm."],
      ["Process variable (PV)", "The measured quantity being controlled, such as temperature or flow."],
      ["Range", "The span between the lowest and highest values an instrument is set to measure."],
      ["RTD", "Resistance temperature detector: a sensor whose resistance changes with temperature."],
      ["Setpoint (SP)", "The desired value of the process variable."],
      ["Span", "The difference between the upper and lower range values."],
      ["Thermocouple", "A sensor of two dissimilar metals that produces a voltage with temperature."],
      ["Transmitter", "A device that senses a process variable and sends a standard signal."],
      ["Turndown", "The ratio between maximum and minimum usable measurement or flow."],
      ["Zero", "The lower range value of an instrument's output."]
    ],
    cards: [
      { front: "4-20 mA percent of span", back: "(mA - 4) / 16 x 100. 4 mA = 0%, 12 mA = 50%, 20 mA = 100%." },
      { front: "250 ohm resistor in a 4-20 mA loop", back: "Gives 1-5 V DC." },
      { front: "Absolute pressure", back: "Gauge pressure plus atmospheric pressure." },
      { front: "Orifice flow and DP", back: "Flow is proportional to the square root of DP. 25% DP is 50% flow." },
      { front: "Hydrostatic pressure of water", back: "About 9.81 kPa per metre of height (1000 kg/m3 x 9.81 m/s2)." },
      { front: "Pt100 RTD", back: "100 ohm at 0 degrees C, about 138.5 ohm at 100 degrees C." },
      { front: "PID roles", back: "P responds to present error, I removes offset, D responds to rate of change." },
      { front: "Air-to-open valve fail position", back: "Fails closed on loss of air with a spring-return actuator." },
      { front: "Thermocouple type K", back: "Chromel and alumel. Type J: iron and constantan. Type T: copper and constantan." },
      { front: "ISA-5.1 tag reading", back: "First letter is measured variable, following letters are functions. FIC is a flow indicating controller." }
    ],
    jobsIntro: "Look for refineries, gas plants, chemical and fertilizer plants, mines, pulp and paper mills, water treatment plants, utilities, industrial contractors, and system integrators.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, electronics, and how processes work.", "Visit plants, shops, and union halls when you can, and follow up.", "Ask what tools and PPE you need and what the employer supplies."],
    forumTopics: ["Starting out", "Calibration and transmitters", "Control valves and PID tuning", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Signal scaling for 4-20 mA",
        intro: "Percent of span = (mA - 4) / 16 x 100. Output mA = 4 + (percent / 100 x 16).",
        table: { head: ["Percent of span", "mA", "3-15 psi", "1-5 V (250 ohm)"], rows: [["0%", "4", "3", "1.0"], ["25%", "8", "6", "2.0"], ["50%", "12", "9", "3.0"], ["75%", "16", "12", "4.0"], ["100%", "20", "15", "5.0"]] }
      },
      {
        title: "Pressure conversions",
        table: { head: ["Unit", "Equivalent"], rows: [["1 psi", "6.895 kPa"], ["1 atm (standard)", "101.325 kPa (14.696 psi)"], ["1 bar", "100 kPa (14.5 psi)"], ["1 m of water column", "About 9.81 kPa"], ["1 inch of water column", "About 0.249 kPa"]] },
        note: "Confirm gauge versus absolute when converting and reading specifications."
      },
      {
        title: "Temperature sensor quick facts",
        table: { head: ["Sensor", "Notes"], rows: [["Pt100 RTD", "100 ohm at 0 degrees C; about 138.5 ohm at 100 degrees C"], ["Thermocouple type K", "Chromel and alumel; general purpose"], ["Thermocouple type J", "Iron and constantan"], ["Thermocouple type T", "Copper and constantan"], ["Celsius to Fahrenheit", "F = C x 1.8 + 32"]] },
        note: "Thermocouples need a reference (cold) junction compensation and matching extension wire."
      },
      {
        title: "ISA-5.1 tag letters",
        list: ["First letters: F flow, L level, P pressure, T temperature, A analysis.", "Following letters: T transmitter, I indicator, C controller, V valve, S switch, E element, Y relay or computing function.", "Example: LIC is a level indicating controller. PSV is a pressure safety valve. PDT is a pressure differential transmitter.", "Confirm the plant's own legend, as practice may differ in details."]
      },
      {
        title: "Standards and Canadian pointers",
        list: ["CSA C22.1 (Canadian Electrical Code): Section 18 covers hazardous locations. Section 16 covers Class 1 and Class 2 circuits.", "ISA-5.1: instrumentation symbols and identification.", "IEC 61511: functional safety for the process industry. IEC 61508: general functional safety.", "CSA Z462: workplace electrical safety. CSA Z460: control of hazardous energy.", "Provincial occupational health and safety regulations apply, with specific rules for H2S, confined spaces, and fall protection."]
      },
      {
        title: "Tuning and troubleshooting a loop",
        list: ["Confirm the measurement is correct first. Poor tuning cannot fix a bad sensor.", "Check the final control element: stick, backlash, or incorrect positioner calibration.", "Put the controller in manual and confirm process response to small output changes.", "Change one tuning parameter at a time. Record every change.", "Verify alarms and interlocks after any change, and document the result."]
      }
    ]
  });
})();
