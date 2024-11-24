export const unitDescription: Record<
  string,
  { header: string; title: string; descriptions: string[] }
> = {
  Weight: {
    header: "Weight-related units for measuring mass",
    title:
      "Weight is the force with which an object is pulled toward the Earth (or any other planet or celestial body) by gravity. Think of it as the 'heaviness' that you feel when you lift something. The greater the object’s mass, the stronger the gravitational pull it experiences, and the heavier it feels. Weight isn’t a fixed property—it can change depending on where you are, like standing on the Moon, where you'd weigh much less than on Earth. So, your weight is like the gravity-powered measure of how much pull the Earth has on you!",
    descriptions: [
      "Kilogram: The standard unit of mass in the metric system; often used for measuring body weight and everyday objects. For instance, 1 kilogram equals 1000 grams.",
      "Gram: Ideal for measuring small quantities, like ingredients in recipes or small-scale objects; 1 gram is one-thousandth of a kilogram.",
      "Pound: Commonly used in the United States, where 1 pound equals approximately 0.4536 kilograms, or 453.6 grams.",
      "Ounce: Often used in cooking, with 1 ounce equal to about 28.35 grams. There are 16 ounces in a pound.",
      "Ton: Used for measuring large weights, such as in freight; 1 ton equals 1000 kilograms.",
      "Milligram: Used for tiny masses, often in scientific or medical contexts; 1 milligram equals 0.001 grams.",
      "Stone: Commonly used in the UK for body weight; 1 stone equals 6.35 kilograms.",
      "Microgram: Used in scientific measurements; 1 microgram equals 0.000001 grams.",
    ],
  },
  Length: {
    header: "Length-related units for measuring distance",
    title:
      "Length is the fundamental measurement for determining how far apart two points are. Whether you are measuring the height of a building, the width of a table, or the distance between cities, length helps us understand and quantify the dimensions of our physical world. From millimeters to kilometers, length is the building block for all other forms of measurement.",
    descriptions: [
      "Meter: The base unit of length in the metric system; for example, 1 meter equals 100 centimeters or 1000 millimeters.",
      "Kilometer: Commonly used to measure distances, especially for travel or mapping; 1 kilometer equals 1000 meters.",
      "Centimeter: Often used in smaller measurements, such as in construction or clothing; 1 centimeter equals 0.01 meters.",
      "Inch: Widely used in the US, especially in construction, where 1 inch is equivalent to 2.54 centimeters.",
      "Mile: Primarily used in the US for road distances, where 1 mile equals 1.609 kilometers or 5280 feet.",
      "Millimeter: Useful for small measurements; 1 millimeter equals 0.001 meters.",
      "Yard: Commonly used in the US and UK; 1 yard equals 0.9144 meters or 3 feet.",
      "Foot: Often used in the US; 1 foot equals 0.3048 meters or 12 inches.",
      "Micrometer: Useful in scientific contexts for minute measurements; 1 micrometer equals 0.000001 meters.",
    ],
  },
  Speed: {
    header: "Speed-related units for measuring velocity",
    title:
      "Speed is the rate at which an object moves or travels over a specified distance. It tells us how fast something is changing position, whether it's a car on a highway or light traveling through space. Speed can be measured in various units like kilometers per hour or meters per second, giving us a detailed view of how quickly things move around us.",
    descriptions: [
      "Meter per second: A scientific measurement of speed, representing how many meters are covered per second.",
      "Kilometer per hour: Often used for road speeds; for example, 1 meter per second is equivalent to 3.6 kilometers per hour.",
      "Miles per hour: Common in the US for speed limits and vehicle speeds; 1 mile per hour equals approximately 1.609 kilometers per hour.",
      "Foot per second: A unit of speed, commonly used in physics and engineering, representing the number of feet covered per second.",
    ],
  },
  Fuel: {
    header:
      "Fuel-related units for measuring energy consumption and efficiency",
    title:
      "Fuel efficiency is an essential measure for understanding how far a vehicle or machine can travel or operate using a certain amount of energy. Whether you’re calculating how many miles a car can go per gallon of fuel or how much fuel is needed for a 100 km journey, fuel units help us monitor and optimize energy consumption in everything from cars to airplanes, impacting both cost and sustainability.",
    descriptions: [
      "Kilometers per liter: Used internationally to measure fuel efficiency, showing how far a vehicle can travel on 1 liter of fuel.",
      "Miles per gallon: Common in the US; measures how many miles a vehicle can travel per gallon of fuel, with 1 mile per gallon roughly equal to 0.425 kilometers per liter.",
      "Liter per 100 kilometers: A metric commonly used in many countries to show fuel consumption, representing the number of liters a vehicle consumes to travel 100 kilometers.",
    ],
  },
  Currency: {
    header: "Currency-related units for measuring monetary values",
    title:
      "Currency is the medium through which we exchange value, enabling commerce and trade on a global scale. Different currencies are used around the world, each with its own value against others, which fluctuates based on economic conditions. From the US Dollar to the Euro, each currency plays a role in shaping the economic dynamics of countries and markets.",
    descriptions: [
      "United States Dollar (USD): The standard currency of the US, widely used in international transactions and considered a global reserve currency.",
      "Euro (EUR): The currency used in the Eurozone, valued slightly higher than the USD; exchange rates vary regularly. It is the second most traded currency in the world.",
      "British Pound (GBP): The official currency of the United Kingdom, known for its high value compared to many other currencies and the oldest currency still in use today.",
      "Japanese Yen (JPY): Japan's official currency, known for its low exchange rate compared to other major currencies. It is the most traded currency in Asia.",
      "Australian Dollar (AUD): The official currency of Australia, commonly used in international commodity trading and known for being a stable currency.",
      "Indian Rupee (INR): The official currency of India, primarily used in South Asia, with increasing international recognition due to India's economic growth.",
      "Canadian Dollar (CAD): The currency of Canada, widely used in trade, particularly in natural resources like oil and mining, due to Canada’s abundant resources.",
      "Chinese Yuan (CNY): The official currency of the People’s Republic of China. As China's influence grows, so does the global use of its currency.",
      "Swiss Franc (CHF): Switzerland's official currency, known for its stability and frequently used as a 'safe-haven' currency in times of economic uncertainty.",
    ],
  },
  Cooking: {
    header: "Cooking-related units for measuring ingredients and liquids",
    title:
      "Cooking involves precision in measurement, whether you’re following a recipe or adjusting ingredients. From teaspoons to milliliters, cooking units help ensure that each dish is made just right. These measurements, like cups for liquids or grams for solids, make it possible to scale recipes, alter ingredient proportions, and share culinary delights across the world.",
    descriptions: [
      "Cup: Commonly used in recipes for measuring both dry and liquid ingredients, with 1 cup equal to about 237 milliliters or 8 fluid ounces in the US.",
      "Tablespoon: A versatile unit often used for small amounts, especially liquids or spices; 1 tablespoon equals about 15 milliliters or 3 teaspoons.",
      "Teaspoon: Commonly used for measuring smaller quantities in recipes, especially for baking and spices; 1 teaspoon equals approximately 5 milliliters.",
      "Milliliter (mL): The metric unit for small quantities of liquid, with 1000 milliliters making up 1 liter. Used internationally for accurate liquid measurement.",
      "Liter (L): The metric unit for larger volumes of liquid, with 1 liter equal to 1000 milliliters, commonly used for measuring ingredients in bulk or larger recipe portions.",
    ],
  },
  Area: {
    header: "Area-related units for measuring surfaces and spaces",
    title:
      "Area refers to the amount of space that a surface occupies. Whether you’re measuring the area of a room, a park, or a country, this unit helps quantify two-dimensional spaces. Area is essential for planning, design, and construction, helping to determine how much land is available for development, how much paint is needed for a wall, or how much space is left for planting in a garden.",
    descriptions: [
      "Square meter (m²): The base unit of area in the metric system, often used for measuring real estate or interior spaces. One square meter is equal to 10.76 square feet.",
      "Square foot (ft²): Commonly used in the United States for real estate and building floor plans, with 1 square foot equal to approximately 0.093 square meters.",
      "Square inch (in²): Used primarily in smaller measurements, such as screen sizes or compact surfaces, with 1 square inch equal to 6.45 square centimeters.",
      "Square centimeter (cm²): Used for smaller spaces, commonly in manufacturing or design, with 1 square centimeter equal to 0.155 square inches.",
      "Square kilometer (km²): Suitable for large land areas, such as cities or countries, with 1 square kilometer equal to 1,000,000 square meters.",
      "Acre: Commonly used in the US for measuring larger areas, especially land, with 1 acre equal to approximately 4047 square meters or 0.4047 hectares.",
      "Hectare (ha): A metric unit for measuring land, especially in agriculture, with 1 hectare equal to 10,000 square meters or about 2.471 acres.",
    ],
  },
  Prefix: {
    header: "Prefix units for representing powers of ten",
    title:
      "Prefix units are essential for expressing large and small quantities in a manageable way. With prefixes like kilo, mega, and milli, we can scale measurements up or down. This allows us to work with quantities that range from the tiny (like micrometers) to the massive (like gigabytes), making it easier to express scientific data, storage capacities, and more.",
    descriptions: [
      "Milli (m): Represents a thousandth or 10^-3. Commonly used for smaller measurements such as milliliter (1 milliliter = 0.001 liters) and millimeter (1 millimeter = 0.001 meters).",
      "Centi (c): Denotes a hundredth or 10^-2. Used in everyday measurements, such as centimeters (1 centimeter = 0.01 meters) and centiliters (1 centiliter = 0.01 liters).",
      "Deci (d): Represents a tenth or 10^-1. Often seen in metric measurements like deciliters (1 deciliter = 0.1 liters) and decimeters (1 decimeter = 0.1 meters).",
      "Deca (da): Signifies a factor of ten or 10^1. Used less frequently but applicable in units like decameters (1 decameter = 10 meters).",
      "Hecto (h): Represents a factor of one hundred or 10^2. Commonly used in areas like agriculture, such as hectoliters (1 hectoliter = 100 liters) and hectares (1 hectare = 10,000 square meters).",
      "Kilo (k): Denotes a factor of one thousand or 10^3. Widely used in units like kilogram (1 kilogram = 1,000 grams) and kilometer (1 kilometer = 1,000 meters).",
      "Mega (M): Indicates a factor of one million or 10^6, frequently used for larger quantities, such as megabytes (1 megabyte = 1,000,000 bytes) and megawatts (1 megawatt = 1,000,000 watts).",
      "Giga (G): Represents a factor of one billion or 10^9. Commonly used in computing, as in gigabytes (1 gigabyte = 1,000 megabytes) and gigahertz for frequency.",
    ],
  },
  Time: {
    header: "Time-related units for measuring duration",
    title:
      "Time is a constant force in our lives, and measuring it in consistent units helps us organize our activities and understand the passage of events. Seconds, minutes, and hours are the foundational units of time, allowing us to coordinate everything from personal schedules to scientific experiments. The precise measurement of time is crucial for everything from history to technology.",
    descriptions: [
      "Millennium: A period of 1,000 years, often used in historical contexts to denote long time spans.",
      "Century: Represents a period of 100 years, commonly used in historical and cultural references.",
      "Decade: A 10-year period, often used for analyzing trends over time or historical events.",
      "Year: The time taken by the Earth to orbit the Sun once, equivalent to 365 days or 366 days in a leap year.",
      "Month: Roughly one-twelfth of a year, with most months having 30 or 31 days, except February which has 28 or 29 days in a leap year.",
      "Week: A common unit of time consisting of 7 days, used in planning and scheduling activities.",
      "Day: A basic unit of time equivalent to 24 hours, marked by one full rotation of the Earth on its axis.",
      "Hour: Frequently used in work schedules or travel, with 1 hour equaling 60 minutes or 3,600 seconds.",
      "Minute: Often used in casual and precise settings, where 1 minute equals 60 seconds.",
      "Second: The base unit of time in the International System of Units (SI), fundamental in scientific and everyday usage.",
    ],
  },

  Power: {
    header: "Power-related units for measuring energy output",
    title:
      "Power is the rate at which energy is used or generated. It’s essential in understanding how devices, engines, and machinery function. From watts to horsepower, these units allow us to calculate energy transfer and consumption. Power determines how quickly tasks are completed, such as how fast a car can accelerate or how much electricity is needed to run an appliance.",
    descriptions: [
      "Watt (W): The basic unit of power in the International System of Units (SI), defined as one joule per second. It measures the rate of energy transfer. For instance, a 60-watt light bulb consumes 60 joules of energy per second.",
      "Kilowatt (kW): Equivalent to 1,000 watts. This unit is commonly used to measure household electrical devices and appliances. For example, a standard home microwave might use around 1 kilowatt of power.",
      "Megawatt (MW): Equal to 1,000,000 watts or 1,000 kilowatts, often used to measure the output of power plants or the energy consumption of larger facilities. For example, a small power station may produce several megawatts.",
      "Gigawatt (GW): Equivalent to 1,000,000,000 watts or 1,000 megawatts, used for very large power sources. For instance, a nuclear power plant might generate a few gigawatts of power.",
      "Horsepower (hp): A unit used mainly to express the power of engines. Mechanical horsepower (745.7 watts) and metric horsepower (735.5 watts) are common variants. For example, a typical car engine may produce around 150 horsepower.",
      "Metric-horsepower: A unit of power commonly used in Europe, equal to 735.5 watts, often used to measure the power of engines in cars and machinery.",
      "Mechanical-horsepower: A unit used in the US, equivalent to 745.7 watts, mainly used to measure the power output of engines.",
    ],
  },

  Temperature: {
    header: "Temperature-related units for measuring heat or cold",
    title:
      "Temperature is the measure of heat within a system, indicating how hot or cold something is. This is a fundamental concept in science and daily life, influencing everything from weather to cooking. Temperature is typically measured in Celsius or Fahrenheit and helps us understand and control the environment around us, ensuring comfort, safety, and effective processes.",
    descriptions: [
      "Celsius: Widely used internationally, where 0°C is the freezing point of water and 100°C is its boiling point.",
      "Fahrenheit: Primarily used in the US, with 32°F as the freezing point and 212°F as the boiling point of water.",
      "Kelvin: Used mainly in scientific settings, where 0 K represents absolute zero, equivalent to -273.15°C.",
      "Rankine: Mainly used in engineering, particularly in the US, with 0°R representing absolute zero. Rankine degrees are similar to Kelvin but are based on the Fahrenheit scale.",
    ],
  },
  Force: {
    header: "Force-related units for measuring push or pull",
    title:
      "Force is a physical interaction that can cause an object to move, stop, or change direction. It’s essential in everything from lifting objects to accelerating vehicles. Measured in newtons, force plays a crucial role in understanding motion, the effects of gravity, and even the design of machinery. Without force, nothing would move.",
    descriptions: [
      "Newton (N): The SI unit of force, defined as the amount of force required to accelerate a one-kilogram mass by one meter per second squared. In everyday applications, a force of about 9.8 newtons is exerted by the weight of a one-kilogram object due to Earth’s gravity.",
      "Pound-force (lbf): A unit of force commonly used in the United States. It is the force required to accelerate a one-pound mass by 32.174 feet per second squared (due to Earth’s gravitational pull). For example, an object weighing 10 pounds exerts approximately 10 pound-force in gravitational force.",
      "Dyne (dyn): A smaller unit of force in the centimeter-gram-second (CGS) system, defined as the force needed to accelerate a one-gram mass by one centimeter per second squared. For instance, one newton is equal to 100,000 dynes.",
      "Kilonewton (kN): Equivalent to 1,000 newtons and used for measuring larger forces, such as structural loads in construction and engineering. For example, a small car's weight is around 10 kilonewtons.",
      "Kilogram-force (kgf): Also known as a kilopond (kp), this unit represents the gravitational force exerted by one kilogram mass under standard gravity. For instance, lifting a one-kilogram object requires about one kilogram-force.",
    ],
  },
  Pressure: {
    header: "Pressure-related units for measuring force per area",
    title:
      "Pressure measures how force is distributed over a given area. Whether it’s the pressure of the atmosphere on your skin or the pressure inside a tire, this unit helps us understand the impact of force in a more localized way. Measured in pascals or pounds per square inch, pressure affects everything from weather patterns to engineering designs.",
    descriptions: [
      "Pascal (Pa): The SI unit of pressure, defined as one newton of force applied over a square meter of area. It is often used in scientific contexts, especially in physics and engineering. For example, atmospheric pressure at sea level is approximately 101,325 pascals.",
      "Bar (bar): A unit often used to measure atmospheric pressure, with 1 bar being close to the average atmospheric pressure on Earth at sea level. For instance, a car tire is usually inflated to around 2 to 2.5 bars.",
      "Pound per Square Inch (psi): Common in the United States for applications such as tire pressure, hydraulic systems, and more. One psi is the pressure exerted by one pound-force over a square inch area. For example, car tires are often inflated to around 30-35 psi.",
      "Atmosphere (atm): A unit based on average atmospheric pressure at sea level. It is equivalent to approximately 101,325 pascals, and used in applications like scuba diving to measure underwater pressure.",
      "Torr (Torr): Named after Evangelista Torricelli, this unit is used in vacuum measurements and is equivalent to 1/760 of an atmosphere, or approximately 133.322 pascals. For example, high vacuum systems may operate at pressures as low as 10^-6 Torr.",
    ],
  },
  Volume: {
    header: "Volume-related units for measuring space occupied by objects",
    title:
      "Volume is the measurement of the amount of space an object or substance occupies. From liquid containers to three-dimensional shapes, volume helps us determine how much room something takes up. This is essential in everything from determining the capacity of a water tank to calculating how much air is needed in a balloon.",
    descriptions: [
      "Milliliter (mL): A metric unit commonly used to measure small liquid volumes, especially in cooking and lab measurements. For example, 1 milliliter is equivalent to 0.001 liters.",
      "Liter (L): The primary metric unit for measuring liquid volumes, commonly used for beverages, fuel, and other liquids. For example, 1 liter is equal to 1000 milliliters, or approximately 0.264 gallons.",
      "Gallon (gal): Widely used in the United States for larger liquid volumes like fuel, where 1 US gallon is equal to 3,785 milliliters or 3.785 liters. The UK gallon differs slightly, equal to 4.546 liters.",
      "Quart (qt): Equal to 1/4 of a gallon, or approximately 946.35 milliliters, quarts are used for medium-sized liquid measures in the United States.",
      "Pint (pt): Often used for measuring liquids like milk and beer, with 1 pint equal to 473.176 milliliters in the US. The UK pint is slightly larger at approximately 568 milliliters.",
      "Fluid Ounce (fl oz): Common in recipes and small liquid measures, with 1 fluid ounce equal to 29.5735 milliliters in the US. Fluid ounces in the UK are larger at around 28.413 milliliters.",
      "Cup (c): Frequently used in cooking, especially in the US, where 1 cup equals 236.588 milliliters.",
      "Barrel (bbl): Often used in the oil industry, where 1 oil barrel is equivalent to 158,987.2949 milliliters, or approximately 159 liters.",
      "Cubic Meter (m³): The SI unit for volume, often used to measure large quantities of liquids or gases. 1 cubic meter equals 1,000 liters or approximately 264.172 gallons.",
      "Cubic Foot (ft³): Commonly used in the United States for measuring the volume of gas or cargo space, with 1 cubic foot equal to 28,316.8 milliliters.",
    ],
  },
  Energy: {
    header: "Energy-related units for measuring the capacity to do work",
    title:
      "Energy is the ability to do work, and it’s the driving force behind all activities in the universe. Whether it’s the energy used by machines, the food we consume, or the heat we feel, energy comes in various forms, measured in joules. Understanding energy is key to everything from powering devices to fueling biological processes.",
    descriptions: [
      "Joule: The standard unit of energy in the SI system, used to quantify heat, electricity, and more.",
      "Kilowatt-hour: Often used by energy companies to measure electricity consumption; 1 kWh equals 3600 kilojoules.",
      "Calorie: Commonly used in food energy measurement, with 1 Calorie equal to approximately 4.184 kilojoules.",
      "Kilojoule: A derived unit of energy in the International System of Units, equivalent to 1,000 joules.",
      "Gram-calorie: A unit of energy commonly used to measure food energy, equivalent to 4.184 joules.",
      "Kilo-calorie: Also known as a large Calorie, commonly used to measure the energy content in food; 1 kilocalorie = 1,000 calories.",
      "Watt-hour: A unit of energy representing the amount of work done by a power of one watt over one hour.",
      "Electron-volt: A small unit of energy commonly used in the field of particle physics, equal to 1.602 × 10⁻¹⁹ joules.",
      "Us-therm: A unit of energy commonly used in the United States to measure natural gas, equal to 100,000 British thermal units (BTU).",
      "Foot-pound: A unit of energy used in the United States, commonly used to measure work or energy, equivalent to the energy required to move one pound by one foot.",
      "British-thermal-unit: A unit of energy used in the United States, equal to the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.",
    ],
  },
  Viscosity: {
    header: "Viscosity-related units for measuring fluid resistance",
    title:
      "Viscosity is the resistance of a liquid to flow, often associated with its thickness. It determines how easily liquids like honey, water, or oil move. Measured in poise or centipoise, viscosity is essential in industries like food processing, pharmaceuticals, and lubrication, as it affects everything from the ease of pouring liquids to the design of machinery.",
    descriptions: [
      "Pascal Second (Pa·s): The SI unit for dynamic viscosity, used to measure resistance to flow in fluids. For example, honey has a high viscosity of around 10 Pa·s, indicating a slower flow, while water has a lower viscosity of approximately 0.001 Pa·s.",
      "Poise (P): A unit in the centimeter-gram-second (CGS) system for measuring dynamic viscosity, where 1 poise equals 0.1 Pascal seconds. It’s named after the French physicist Jean Léonard Marie Poiseuille.",
      "Centipoise (cP): A common viscosity unit in various industries, especially in chemistry and biology. Water has a viscosity of about 1 centipoise, making it a useful reference point.",
      "Stokes (St): A CGS unit for measuring kinematic viscosity, where 1 stoke equals 1 cm²/s. Named after physicist George Gabriel Stokes, this unit is often used in fluid dynamics.",
      "Centistokes (cSt): A smaller unit of kinematic viscosity, commonly used for motor oil and other industrial fluids, where 1 centistoke equals 0.01 stokes. For example, engine oils may have viscosities ranging from 10 to 100 centistokes depending on their grade and temperature.",
    ],
  },
  Flow: {
    header: "Flow-related units for measuring the movement of fluids",
    title:
      "Flow measures how much liquid or gas passes through a system within a specific period. From the flow of water through pipes to the movement of air in ventilation systems, flow is essential in numerous industries. Measured in liters per second or cubic meters per hour, it helps engineers design efficient systems and maintain proper circulation.",
    descriptions: [
      "Cubic Meter per Second (m³/s): The standard SI unit of volumetric flow rate, measuring how much volume of a fluid passes through a surface per second. For example, river flow rates are often measured in cubic meters per second, such as a small river flowing at 5 m³/s.",
      "Cubic Feet per Second (ft³/s): A unit used primarily in the United States, where 1 cubic foot per second is equivalent to approximately 0.0283 m³/s. This unit is commonly used to measure water flow in streams and aqueducts.",
      "Liter per Minute (L/min): A metric unit measuring the flow rate in liters per minute. It’s commonly used in healthcare and laboratories to measure fluid flow, such as oxygen delivery, where a flow rate might be set to 2 L/min.",
      "Gallon per Minute (GPM): A unit often used in plumbing and industrial applications, especially in the U.S. For example, a residential shower head might have a flow rate of 2.5 gallons per minute.",
      "Liter per Second (L/s): Another metric unit that measures flow rate per second, often used in environmental studies and engineering applications. For example, wastewater treatment plants may handle flows in terms of liters per second to ensure efficient processing.",
    ],
  },
  Permeability: {
    header: "Permeability-related units for measuring fluid passage",
    title:
      "Permeability refers to how easily a material allows fluids to pass through it. This unit is crucial in fields like geology, environmental science, and material engineering. Whether it’s soil absorbing water or a membrane allowing gases to pass, permeability helps us design filters, understand water flow, and manage environmental systems.",
    descriptions: [
      "Darcy (D): A common unit for measuring permeability in the oil and gas industry, where 1 Darcy is equivalent to the flow rate of one cubic centimeter per second of a fluid with 1 centipoise viscosity through a rock surface of 1 square centimeter under a pressure gradient of 1 atmosphere per centimeter. Permeability values in darcies indicate how easily fluids can move through rocks, such as sandstone.",
      "Millidarcy (mD): Equal to 1/1000 of a Darcy, this unit is used for very fine-grained rocks and materials with low permeability. Many oil reservoirs have permeabilities in the range of millidarcies.",
      "Square Centimeters (cm²): This metric unit measures the permeability of materials, with 1 square centimeter representing the permeability through an area of 1 cm². Although less common in petroleum applications, it's used in laboratory contexts.",
      "Micrometers Squared (µm²): A microscopic scale unit representing permeability at micro-scale levels, useful for analyzing fine sediment or synthetic materials in lab settings.",
      "Square Meters (m²): The SI unit for measuring permeability, often applied in scientific research and environmental engineering. One square meter unit helps quantify the permeability of materials like soils in environmental studies.",
    ],
  },
  Surface: {
    header: "Surface-related units for measuring the exterior area of objects",
    title:
      "Surface area refers to the total area that the outer layer of an object covers. Whether you're calculating the surface of a sphere, a building, or a plot of land, this measurement helps us understand the space exposed to the surrounding environment. Surface area is crucial for applications like heating, cooling, and chemical reactions.",
    descriptions: [
      "Newton per Meter (N/m): This is the SI unit of surface tension, describing the force in newtons required to break a surface over one meter. It's often used to quantify the strength of surface forces in fluids.",
      "Joule per Square Meter (J/m²): This unit measures energy per unit area and can represent surface energy, useful in materials science to describe the energy required to increase the surface area of a material.",
      "Erg per Square Meter (erg/cm²): Used primarily in older scientific literature and smaller scales, this unit represents the surface energy in ergs for a square centimeter area.",
      "Pound-Force per Foot (lbf/ft): This unit measures force per unit length in the Imperial system. It's often used in applications like engineering and construction where forces on structural surfaces are calculated.",
      "Dyne per Centimeter (dyn/cm): This unit, used primarily in the field of fluid mechanics, represents the surface tension force over a centimeter length. Common in measuring liquids like water or oils, 1 dyn/cm is equivalent to 0.001 N/m.",
    ],
  },
  Resistance: {
    header:
      "Electrical resistance-related units for measuring opposition to current flow",
    title:
      "Resistance is the measure of how much an object resists the flow of electric current. Measured in ohms, it’s fundamental in electrical engineering, helping us design circuits and manage power distribution. The higher the resistance, the harder it is for electricity to flow, impacting everything from light bulbs to computer chips.",
    descriptions: [
      "Ohm (Ω): This is the standard SI unit of electrical resistance, representing the opposition a material offers to the flow of electric current. One ohm is defined as the resistance between two points of a conductor when a constant potential difference of 1 volt, applied across the points, produces a current of 1 ampere.",
      "Kiloohm (kΩ): Equivalent to 1,000 ohms, this unit is often used in circuits with high resistance requirements, common in electronics and telecommunications.",
      "Megaohm (MΩ): Equal to 1,000,000 ohms, the megaohm is typically used in fields like high-voltage engineering and insulation testing, where very high resistance values are needed to prevent current leakage.",
    ],
  },
  Capacitance: {
    header: "Capacitance-related units for measuring charge storage",
    title:
      "Capacitance measures the ability of a system to store electrical charge. It’s essential in circuits, capacitors, and batteries, impacting everything from energy storage to signal filtering. Measured in farads, capacitance determines how much charge can be stored for later use, making it essential in everything from electronics to power supply systems.",
    descriptions: [
      "Farad (F): The SI unit of capacitance, representing the ability of a capacitor to store one coulomb of charge per volt.",
      "Microfarad (µF): One millionth of a farad (1 µF = 10⁻⁶ F), commonly used for capacitor ratings in electronic circuits.",
      "Picofarad (pF): One trillionth of a farad (1 pF = 10⁻¹² F), often used in very small capacitors.",
      "Kilofarad (kF): One thousand farads (1 kF = 10³ F), used for large-capacity capacitors.",
    ],
  },
  Conductance: {
    header:
      "Conductance-related units for measuring the ability to conduct electricity",
    title:
      "Conductance measures the ability of a material to allow the flow of electric current. This unit is crucial for understanding how easily electricity can move through various substances, from metals to semiconductors. Whether it’s the high conductance of copper wires or the low conductance of insulators, this category helps us quantify electrical properties that are essential for designing electrical circuits and systems. Conductance is inversely related to resistance, and understanding it is key to numerous applications in electronics and power systems.",
    descriptions: [
      "Siemens (S): The SI unit of electrical conductance, representing the reciprocal of resistance (1 S = 1/Ohm).",
      "Millisiemens (mS): One thousandth of a siemens (1 mS = 10⁻³ S), used for lower conductance values.",
      "Microsiemens (µS): One millionth of a siemens (1 µS = 10⁻⁶ S), useful in high-precision measurements.",
      "Kilosiemens (kS): One thousand siemens (1 kS = 10³ S), used for large-scale conductance measurements.",
      "Decisiemens (dS): One-tenth of a siemens (1 dS = 0.1 S), a less common but still used unit.",
    ],
  },
  Inductance: {
    header: "Inductance-related units for measuring magnetic flux",
    title:
      "Inductance is the ability of a material to resist changes in the flow of current, creating a magnetic field in response. This phenomenon is fundamental in electrical engineering, especially when dealing with transformers, inductors, and motors. Whether it’s measured in henries or smaller subdivisions like millihenries, inductance governs how circuits respond to alternating current. It’s essential for controlling energy in systems and understanding the storage and release of electrical energy in magnetic fields.",
    descriptions: [
      "Henry (H): The SI unit of inductance, representing the amount of inductance needed to induce a voltage of one volt when the current is changing at a rate of one ampere per second.",
      "Millihenry (mH): One thousandth of a henry (1 mH = 10⁻³ H), used for inductors in lower ranges.",
      "Microhenry (µH): One millionth of a henry (1 µH = 10⁻⁶ H), used in high-frequency circuits.",
      "Picohenry (pH): One trillionth of a henry (1 pH = 10⁻¹² H), used for extremely small inductances.",
      "Kilohenry (kH): One thousand henries (1 kH = 10³ H), typically used for very high inductance values.",
    ],
  },
  Charge: {
    header: "Charge-related units for measuring electrical charge",
    title:
      "Charge is a fundamental property of matter that drives the flow of electricity. Whether it's positive or negative, the movement of charge creates currents that power everything from light bulbs to complex machinery. Measured in coulombs, charge is the cornerstone of electrical systems, allowing us to understand how energy is transferred and stored. From the smallest measurements of pico-coulombs to the larger units like stat-coulombs, charge is key to understanding how electricity operates at every scale.",
    descriptions: [
      "Coulomb (C): The SI unit of electric charge, representing the amount of charge transferred by a current of one ampere in one second.",
      "Milli-coulomb (mC): One thousandth of a coulomb (1 mC = 10⁻³ C), used for smaller charge measurements.",
      "Micro-coulomb (µC): One millionth of a coulomb (1 µC = 10⁻⁶ C), commonly used in electrostatics.",
      "Pico-coulomb (pC): One trillionth of a coulomb (1 pC = 10⁻¹² C), used for extremely small charge amounts.",
      "Stat-coulomb (esu): A unit of charge used in electrostatics, equal to approximately 3.3356 × 10⁻¹⁰ C.",
    ],
  },
  Conductivity: {
    header:
      "Electrical conductivity-related units for measuring material conductivity",
    title:
      "Electrical conductivity measures how well a material allows electric current to flow. This unit is pivotal in industries like electronics and energy, where knowing the conductivity of a material determines its suitability for different applications. Whether it’s the high conductivity of copper or the near-zero conductivity of rubber, understanding how materials behave in the presence of electricity allows engineers to design better circuits, power systems, and devices. The broader understanding of conductivity ensures that we optimize energy use in both small and large systems.",
    descriptions: [
      "Siemens-per-meter (S/m): The SI unit of electrical conductivity, indicating how easily a material can conduct electricity.",
      "Millisiemens-per-meter (mS/m): One thousandth of a siemens-per-meter (1 mS/m = 10⁻³ S/m).",
      "Microsiemens-per-meter (µS/m): One millionth of a siemens-per-meter (1 µS/m = 10⁻⁶ S/m).",
      "Kilosiemens-per-meter (kS/m): One thousand siemens-per-meter (1 kS/m = 10³ S/m).",
      "Decisiemens-per-meter (dS/m): One-tenth of a siemens-per-meter (1 dS/m = 0.1 S/m), used in some practical applications.",
    ],
  },
  Potential: {
    header: "Electrical potential-related units for measuring voltage",
    title:
      "Voltage, or electric potential, is the force that drives electric current through circuits. It’s measured in volts and reflects the energy per charge that pushes electrons from one point to another. Understanding potential helps explain how energy is distributed through electrical systems, from household wiring to advanced machinery. Whether it's millivolts or kilovolts, the units of potential quantify the force that makes electricity flow, powering everything from devices to industrial equipment.",
    descriptions: [
      "Volt (V): The SI unit of electric potential, representing the difference in electric potential between two points when one joule of energy is needed to move one coulomb of charge.",
      "Millivolt (mV): One thousandth of a volt (1 mV = 10⁻³ V), commonly used in low-voltage applications.",
      "Microvolt (µV): One millionth of a volt (1 µV = 10⁻⁶ V), useful in sensitive electrical measurements.",
    ],
  },
  Resistivity: {
    header: "Resistivity-related units for measuring material resistance",
    title:
      "Resistivity is a material property that quantifies how much a material resists the flow of electric current. It plays a crucial role in the design of electrical components, where materials with low resistivity are used to conduct electricity efficiently. From wires to resistors, knowing the resistivity of materials like copper, rubber, and semiconductors is essential for creating effective circuits. This category helps us understand the challenges of managing electricity and the characteristics that determine a material's ability to resist current flow.",
    descriptions: [
      "Ohm-meter (Ω·m): The SI unit of electrical resistivity, representing the ability of a material to resist the flow of electric current.",
      "Ohm-centimeter (Ω·cm): One hundredth of an ohm-meter (1 Ω·cm = 0.01 Ω·m), often used for materials with low resistivity.",
      "Milliohm-meter (mΩ·m): One thousandth of an ohm-meter (1 mΩ·m = 10⁻³ Ω·m).",
      "Microohm-meter (µΩ·m): One millionth of an ohm-meter (1 µΩ·m = 10⁻⁶ Ω·m).",
      "Kiloohm-meter (kΩ·m): One thousand ohm-meters (1 kΩ·m = 10³ Ω·m), used for materials with high resistivity.",
    ],
  },
  FieldStrength: {
    header: "Field strength-related units for measuring electromagnetic fields",
    title:
      "Field strength measures the force exerted by an electric field on a charge, and it’s a key factor in understanding electromagnetic interactions. It helps quantify how much influence an electric field has in a given space and is vital in fields like physics, electrical engineering, and telecommunications. Whether it’s volts per meter or kilovolts per meter, these units tell us how intense a field is and how it can influence electronic systems and devices. This concept is integral to designing and understanding electrical systems across various industries.",
    descriptions: [
      "Volt-per-meter (V/m): The SI unit of electric field strength, representing the force exerted by the field on a charge of one coulomb per meter.",
      "Kilovolt-per-meter (kV/m): One thousand volts per meter (1 kV/m = 10³ V/m).",
      "Millivolt-per-meter (mV/m): One thousandth of a volt per meter (1 mV/m = 10⁻³ V/m).",
      "Statvolt-per-centimeter (esu/cm): A unit used in electrostatics, equal to approximately 299.79 V/m.",
      "Newton-per-coulomb (N/C): The SI unit of electric field strength, equivalent to a volt per meter.",
    ],
  },
  LinearCharger: {
    header: "Linear charger-related units for measuring charging speed",
    title:
      "Linear charging refers to the distribution of electrical charge along a conductor. This unit measures the amount of charge per unit length and is essential for understanding the behavior of electric currents in cables and transmission lines. Whether it’s in microcoulombs or kilocoulombs, linear charge density helps explain the flow of electricity in systems like power lines or charging cables. It’s crucial for ensuring efficient and safe transmission of electrical energy across distances.",
    descriptions: [
      "Coulomb-per-meter (C/m): A unit of linear charge density, representing the amount of charge per unit length along a conductor.",
      "Microcoulomb-per-meter (µC/m): One millionth of a coulomb per meter (1 µC/m = 10⁻⁶ C/m).",
      "Nanocoulomb-per-meter (nC/m): One billionth of a coulomb per meter (1 nC/m = 10⁻⁹ C/m).",
      "Picocoulomb-per-meter (pC/m): One trillionth of a coulomb per meter (1 pC/m = 10⁻¹² C/m).",
      "Kilocoulomb-per-meter (kC/m): One thousand coulombs per meter (1 kC/m = 10³ C/m).",
    ],
  },
  SurfaceCharger: {
    header: "Surface charger-related units for measuring charging capacity",
    title:
      "Surface charge refers to the distribution of electrical charge across the surface of materials, and it plays a crucial role in applications like capacitors and electrostatic discharge. Measuring surface charge density in coulombs per square meter helps quantify how much charge resides on a surface, influencing how materials interact with their environment. This concept is vital for industries ranging from electronics to materials science, where managing charge on surfaces can affect everything from energy storage to device performance.",
    descriptions: [
      "Coulomb-per-square-meter (C/m²): A unit of surface charge density, representing the amount of charge per unit area on a surface.",
      "Microcoulomb-per-square-meter (µC/m²): One millionth of a coulomb per square meter (1 µC/m² = 10⁻⁶ C/m²).",
      "Nanocoulomb-per-square-meter (nC/m²): One billionth of a coulomb per square meter (1 nC/m² = 10⁻⁹ C/m²).",
      "Picocoulomb-per-square-meter (pC/m²): One trillionth of a coulomb per square meter (1 pC/m² = 10⁻¹² C/m²).",
      "Kilocoulomb-per-square-meter (kC/m²): One thousand coulombs per square meter (1 kC/m² = 10³ C/m²).",
    ],
  },
  Image: {
    header: "Image-related units for measuring visual quality",
    title:
      " Image resolution refers to the clarity and detail of a visual representation, measured in various units like pixels per inch or pixels per centimeter. These units help determine how much detail can be captured and displayed in digital images, whether on screens or printed media. From the smallest pixel to the largest print dimension, resolution is key to ensuring that images are sharp, clear, and accurate. This category is essential for photographers, designers, and anyone working with visual media, as it affects everything from screen quality to print fidelity.",
    descriptions: [
      "Pixel: The smallest unit of a digital image, representing a single point of color.",
      "Pixels-per-inch (PPI): A measure of image resolution, indicating how many pixels are present in one inch of the display.",
      "Pixels-per-millimeter (PPM): A measure of image resolution, indicating how many pixels are present in one millimeter of the display.",
      "Centimeter (cm): A unit of length used to represent physical dimensions of an image.",
      "Millimeter (mm): A smaller unit of length used for fine measurements of image resolution.",
      "Inch (in): A common unit of length for displaying image resolution.",
      "Point: A typographical unit of measure for font size and image resolution (1 point = 1/72 of an inch).",
      "Em: A unit of measurement used in typography, representing the size of the font.",
      "Root-em: A unit in typography, used for relative sizing, based on the current font size.",
    ],
  },
  Storage: {
    header: "Storage-related units for measuring data storage capacity",
    title:
      "Data storage is the backbone of digital technology, with various units like bytes, kilobytes, and gigabytes used to measure the capacity of digital devices. From small memory cards to vast data centers, understanding how data is stored and accessed is critical in the modern world. These units help us understand how much information can be held and how quickly it can be retrieved. Whether for a smartphone, computer, or server, storage units determine how we interact with data every day.",
    descriptions: [
      "Bit: The smallest unit of data in computing, representing a binary value (0 or 1).",
      "Byte: A basic unit of digital data, commonly used for computer memory and storage.",
      "Kilobit: Equals 1000 bits, typically used in data transfer rates.",
      "Kilobyte: Equals 1000 bytes; typically used for small files.",
      "Megabit: Equals 1000 kilobits, commonly used in data transfer speeds.",
      "Megabyte: Equals 1000 kilobytes; commonly used for larger files.",
      "Gigabit: Equals 1000 megabits, used in networking and internet speed measurements.",
      "Gigabyte: Commonly used for larger files, where 1 gigabyte equals 1 billion bytes.",
      "Terabit: Equals 1000 gigabits, used in high-capacity storage systems.",
      "Terabyte: Equals 1000 gigabytes; used for measuring large data storage capacities.",
      "Petabit: Equals 1000 terabits, used in data center and network infrastructure.",
      "Petabyte: Equals 1000 terabytes, used for large-scale data storage systems.",
      "Exabit: Equals 1000 petabits, used in high-capacity network and storage systems.",
      "Exabyte: Equals 1000 petabytes, used to measure vast amounts of data.",
      "Zettabit: Equals 1000 exabits, used for extremely large-scale storage capacities.",
      "Zettabyte: Equals 1000 exabytes, a unit for measuring global-scale data.",
      "Yottabit: Equals 1000 zettabits, one of the largest units of data.",
      "Yottabyte: Equals 1000 zettabytes, a unit for measuring enormous global data capacities.",
    ],
  },
  Resolution: {
    header: "Resolution-related units for measuring image clarity",
    title:
      "Resolution is a measure of how much detail an image or display can represent. It’s quantified in terms like pixels per inch or dots per centimeter, and it’s crucial for applications in photography, printing, and digital displays. Higher resolution means sharper images, and understanding the various units of resolution helps us evaluate image quality for both screens and prints. Whether it’s for smartphones, cameras, or printing presses, resolution determines how clear and vibrant images will appear.",
    descriptions: [
      "Pixels per Inch (PPI): This unit measures the pixel density of an image or screen, representing the number of pixels in one inch of the display. It's crucial for determining the sharpness of digital displays or printed images.",
      "Pixels per Centimeter (PPCM): Similar to PPI, this unit measures pixel density but uses centimeters instead of inches, offering a finer resolution measurement in metric systems.",
      "Dots per Inch (DPI): Used in printing, DPI measures the number of individual dots a printer can produce in one inch. Higher DPI values typically mean better print quality.",
      "Dots per Centimeter (DPCM): This is the metric equivalent of DPI, measuring the number of dots per centimeter in a print or display.",
      "Lines per Inch (LPI): Used in halftoning and printing processes, LPI measures the number of lines of dots per inch that can be printed. It’s crucial for evaluating print quality.",
      "Lines per Centimeter (LPCM): This is the metric equivalent of LPI, measuring the number of lines of dots per centimeter.",
      "Cycles per Millimeter (CPM): A unit used in digital imaging and video resolution, CPM measures the number of cycles or repetitions of a pattern within one millimeter.",
      "Pixels per Millimeter (PPMM): This unit indicates the pixel density per millimeter, offering a very fine measurement of resolution, especially useful for high-precision displays and devices.",
    ],
  },
  DataTransfer: {
    header: "Data transfer-related units for measuring data movement rates",
    title:
      "Data transfer rates determine how quickly data can move between systems, networks, and devices. Whether it’s measured in bits per second or gigabits per second, this unit is crucial for assessing the performance of internet connections, data centers, and digital communication. From slow dial-up connections to ultra-fast fiber optic systems, understanding data transfer speed helps optimize the flow of information across the digital world, ensuring efficient communication and data exchange.",
    descriptions: [
      "Bit per Second (bps): This is the basic unit of data transfer speed, representing one bit of data transmitted per second. It's often used to measure the speed of digital communication systems.",
      "Kilobit per Second (Kbps): This unit measures data transfer speed in kilobits per second, where 1 Kbps equals 1,000 bits per second. It's commonly used to describe internet connection speeds.",
      "Megabit per Second (Mbps): This is a higher unit of data transfer, measuring speed in megabits per second. 1 Mbps equals 1,000 Kbps, and it's widely used to denote broadband speeds.",
      "Gigabit per Second (Gbps): This unit measures very high data transfer speeds, typically used in high-speed internet connections, server data transfers, or internal network communication. 1 Gbps equals 1,000 Mbps.",
      "Terabit per Second (Tbps): This unit measures extremely high data transfer rates, often used for very high-bandwidth systems like data center networks or backbone internet connections. 1 Tbps equals 1,000 Gbps.",
      "Petabit per Second (Pbps): The largest common unit used for data transfer speeds, often used to describe the theoretical upper limits of data transfer in large-scale networks, particularly those used in research, space communication, and global networks.",
    ],
  },
  Luminance: {
    header: "Luminance-related units for measuring brightness of light",
    title:
      "Luminance is the measure of how bright a light source appears, quantified in units like candelas per square meter or nits. This unit helps assess the brightness of displays, lighting, and screens, crucial for applications in everything from television displays to street lighting. Whether it’s a room full of lights or the pixels on your phone screen, understanding luminance ensures that we create the right lighting conditions for every environment. This category helps measure and control light in a way that enhances visual clarity and comfort.",
    descriptions: [
      "Candela per Square Meter (cd/m²): This is the SI unit of luminance, representing the amount of light emitted or reflected from a surface per unit area. It's used to measure the brightness of displays and lighting.",
      "Lumens per Square Foot (lm/ft²): This unit measures the amount of luminous flux (light output) per unit area, typically used in lighting design for indoor spaces. It relates to the intensity of light reaching a specific area.",
      "Nit (nt): A unit of luminance, commonly used in the display industry to measure how bright a screen or display is. One nit is equal to one candela per square meter (cd/m²).",
      "Lambert (L): An older unit of luminance, primarily used in the field of optical engineering, where one lambert represents the brightness of a perfectly diffusing surface emitting one lumen per square centimeter.",
      "Foot-Lambert (fL): A unit related to lamberts, used in the film and television industry to measure screen brightness. One foot-lambert is equal to 1/π lambert.",
      "Candela per Square Inch (cd/in²): This unit is used to measure luminance, but on a per-inch basis, typically for measuring brightness on smaller screens or devices.",
      "Kilolux (klx): This unit is used for measuring illuminance and luminance, equivalent to 1,000 lux. It’s often used to describe the brightness in areas with high light intensity, like large outdoor spaces or floodlighting.",
    ],
  },
  Frequency: {
    header: "Frequency-related units for measuring oscillations",
    title:
      "Frequency measures how often an event repeats in a given time, typically in cycles per second, or Hertz. In electrical engineering, frequency determines the operation of alternating currents, radio waves, and audio signals. Whether it's measured in kilohertz for radio or megahertz for computing, understanding frequency is essential for optimizing signal transmission and ensuring efficient use of bandwidth in communication technologies.",
    descriptions: [
      "Hertz: The base unit of frequency, representing cycles per second, commonly used in audio and electrical engineering.",
      "Kilohertz: Equal to 1000 Hertz, often used for radio frequencies.",
      "Megahertz: Equal to 1 million Hertz, commonly used in broadcasting and computer processing speeds.",
      "Gigahertz: Equal to 1 billion Hertz, typically used for higher frequency applications like modern wireless communication and computer processors.",
      "Terahertz: Equal to 1 trillion Hertz, used in advanced technologies like spectroscopy and medical imaging.",
      "Revolutions-per-minute (RPM): A unit used to measure the frequency of rotation, commonly used in motors and machinery.",
      "Cycles-per-second: Another term for Hertz, used to describe the frequency of oscillations or waves.",
      "Decahertz: Equal to 10 Hertz, used for specific scientific or technical measurements.",
      "Centihertz: Equal to 0.01 Hertz, used for ultra-low frequency measurements.",
      "Millihertz: Equal to 0.001 Hertz, used for very slow oscillations.",
    ],
  },
  LuminousIntensity: {
    header:
      "Luminous intensity-related units for measuring the perceived brightness",
    title:
      "Luminous intensity measures how bright a light source appears from a specific angle, and it’s essential for understanding the intensity of light in various contexts. This unit quantifies how much light is emitted from a point source, helping to evaluate light bulbs, projectors, and other illumination devices. Luminous intensity is key in the design of lighting systems, ensuring that they provide the right amount of brightness for different applications, from stage lighting to street lamps.",
    descriptions: [
      "Candela per Square Centimeter (cd/cm²): This unit measures luminous intensity per unit area. It's often used to describe the brightness of small light sources or very intense light emissions.",
      "Candela per Square Inch (cd/in²): Similar to candela per square centimeter, this unit measures luminous intensity per square inch. It's used for high-intensity light sources, particularly in small or compact applications.",
      "Lumen per Steradian (lm/sr): This is the SI unit for luminous intensity, measuring the amount of luminous flux emitted per solid angle (steradian). It's used in photometry to quantify light sources in terms of their radiated intensity.",
      "Lumens per Square Foot (lm/ft²): Although primarily a unit for illuminance, this unit is sometimes used in the context of luminous intensity when describing how much light is emitted by a source and distributed across an area.",
    ],
  },
};
