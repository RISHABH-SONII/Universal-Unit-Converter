import { ICONS } from "@/assets/ICONS";

export interface UnitCategory {
  [category: string]: {
    image: string;
    units: {
      [unitType: string]: {
        image: string;
        units: string[];
      };
    };
  };
}
export const unitsData: UnitCategory = {
  Common: {
    image: ICONS.common.src,
    units: {
      Weight: {
        image: ICONS.weight.src,
        units: [
          "Kilogram",
          "Gram",
          "Pound",
          "Ounce",
          "Ton",
          "Milligram",
          "Stone",
          "Microgram",
        ],
      },
      Length: {
        image: ICONS.length.src,
        units: [
          "Meter",
          "Centimeter",
          "Kilometer",
          "Millimeter",
          "Yard",
          "Inch",
          "Foot",
          "Mile",
          "Nauticalmile",
          "Micrometer",
        ],
      },
      Speed: {
        image: ICONS.speed.src,
        units: [
          "Meter-per-second",
          "Kilometer-per-hour",
          "Foot-per-second",
          "Mile-per-hour",
        ],
      },
      Fuel: {
        image: ICONS.fuel.src,
        units: [
          "Kilometer-per-litre",
          "Liter-per-100-kilometer",
          "Miles-per-gallon",
        ],
      },
      Currency: {
        image: ICONS.currency.src,
        units: [
          "United-states-dollar",
          "Euro",
          "British-pound",
          "Japanese-yen",
          "Australian-dollar",
          "Indian-rupee",
          "Canadian-dollar",
          "Chinese-yuan",
          "Swiss-franc",
        ],
      },
      Cooking: {
        image: ICONS.cooking.src,
        units: ["Cup", "Tablespoon", "Teaspoon", "Milliliter", "Liter"],
      },
      Area: {
        image: ICONS.area.src,
        units: [
          "Square-meter",
          "Square-foot",
          "Square-inch",
          "Square-centimeter",
          "Square-kilometer",
          "Acre",
          "Hectare",
        ],
      },
      Prefix: {
        image: ICONS.prefix.src,
        units: [
          "Milli",
          "Centi",
          "Deci",
          "Deca",
          "Hecto",
          "Kilo",
          "Mega",
          "Giga",
        ],
      },
      Time: {
        image: ICONS.alarm.src,
        units: [
          "Millennium",
          "Century",
          "Decade",
          "Year",
          "Month",
          "Week",
          "Day",
          "Hour",
          "Minute",
          "Second",
        ],
      },
    },
  },
  Engineering: {
    image: ICONS.engineer.src,
    units: {
      Power: {
        image: ICONS.electricity.src,
        units: [
          "Watt",
          "Kilowatt",
          "Megawatt",
          "Gigawatt",
          "Horsepower",
          "Metric-horsepower",
          "Mechanical-horsepower",
        ],
      },
      Temperature: {
        image: ICONS.thermometer.src,
        units: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
      },
      Force: {
        image: ICONS.force.src,
        units: [
          "Newton",
          "Pound-force",
          "Dyne",
          "Kilonewton",
          "Kilogram-force",
        ],
      },
      Pressure: {
        image: ICONS.highPressure.src,
        units: ["Pascal", "Bar", "Pound-per-square-inch", "Atmosphere", "Torr"],
      },
      Volume: {
        image: ICONS.volume.src,
        units: [
          "Milliliter",
          "Liter",
          "Gallon",
          "Quart",
          "Pint",
          "Fluid-ounce",
          "Cup",
          "Barrel",
          "Cubic-meter",
          "Cubic-foot",
        ],
      },
      Energy: {
        image: ICONS.energy.src,
        units: [
          "Joule",
          "Kilojoule",
          "Gram-calorie",
          "Kilo-calorie",
          "Watt-hour",
          "Electron-volt",
          "Us-therm",
          "Foot-pound",
          "Kilowatt-hour",
          "British-thermal-unit",
        ],
      },
    },
  },
  Fluid: {
    image: ICONS.fluid.src,
    units: {
      Viscosity: {
        image: ICONS.viscosity.src,
        units: [
          "Pascal-second",
          "Poise",
          "Centipoise",
          "Stokes",
          "Centistokes",
        ],
      },
      Flow: {
        image: ICONS.flow.src,
        units: [
          "Cubic-meter-per-second",
          "Cubic-feet-per-second",
          "Liter-per-minute",
          "Gallon-per-minute",
          "Liter-per-second",
        ],
      },
      Permeability: {
        image: ICONS.permeability.src,
        units: [
          "Darcy",
          "Millidarcy",
          "Square-centimeters",
          "Micrometers-squared",
          "Squares-meters",
        ],
      },
      Surface: {
        image: ICONS.surfaceTension.src,
        units: [
          "Newton-per-meter",
          "Joule-per-square-meter",
          "Erg-per-square-meter",
          "Pound-force-per-foot",
          "Dyne-per-centimeter",
        ],
      },
    },
  },
  Electricity: {
    image: ICONS.electricity.src,
    units: {
      Resistance: {
        image: ICONS.resistance.src,
        units: ["Ohm", "Kiloohm", "Megaohm"],
      },
      Capacitance: {
        image: ICONS.capacitance.src,
        units: ["Farad", "Microfarad", "Picofarad", "Kilofarad"],
      },
      Conductance: {
        image: ICONS.conductance.src,
        units: [
          "Siemens",
          "Millisiemens",
          "Microsiemens",
          "Kilosiemens",
          "Decisiemens",
        ],
      },
      Inductance: {
        image: ICONS.inductance.src,
        units: ["Henry", "Millihenry", "Microhenry", "Picohenry", "Kilohenry"],
      },
      Charge: {
        image: ICONS.charge.src,
        units: [
          "Coulomb",
          "Milli-coulomb",
          "Micro-coulomb",
          "Pico-coulomb",
          "Stat-coulomb",
        ],
      },
      Conductivity: {
        image: ICONS.conductivity.src,
        units: [
          "Siemens-per-meter",
          "Millisiemens-per-meter",
          "Microsiemens-per-meter",
          "Kilosiemens-per-meter",
          "Decisiemens-per-meter",
        ],
      },
      Potential: {
        image: ICONS.potential.src,
        units: ["Volt", "Millivolt", "Microvolt"],
      },
      Resistivity: {
        image: ICONS.resistivity.src,
        units: [
          "Ohm-meter",
          "Ohm-centimeter",
          "Milliohm-meter",
          "Microohm-meter",
          "Kiloohm-meter",
        ],
      },
      "Field-strength": {
        image: ICONS.fieldstrength.src,
        units: [
          "Volt-per-meter",
          "Kilovolt-per-meter",
          "Millivolt-per-meter",
          "Statvolt-per-centimeter",
          "Newton-per-coulomb",
        ],
      },
      "Linear-charger": {
        image: ICONS.linearcharger.src,
        units: [
          "Coulomb-per-meter",
          "Microcoulomb-per-meter",
          "Nanocoulomb-per-meter",
          "Picocoulomb-per-meter",
          "Kilocoulomb-per-meter",
        ],
      },
      "Surface-charger": {
        image: ICONS.surfacecharger.src,
        units: [
          "Coulomb-per-square-meter",
          "Microcoulomb-per-square-meter",
          "Nanocoulomb-per-square-meter",
          "Picocoulomb-per-square-meter",
          "Kilocoulomb-per-square-meter",
        ],
      },
    },
  },
  Computer: {
    image: ICONS.laptop.src,
    units: {
      Image: {
        image: ICONS.imagepicture.src,
        units: [
          "Pixel",
          "Pixels-per-inch",
          "Pixels-per-millimeter",
          "Centimeter",
          "Millimeter",
          "Inch",
          "Point",
          "Em",
          "Root-em",
        ],
      },
      Storage: {
        image: ICONS.storage.src,
        units: [
          "Bit",
          "Byte",
          "Kilobit",
          "Kilobyte",
          "Megabit",
          "Megabyte",
          "Gigabit",
          "Gigabyte",
          "Terabit",
          "Terabyte",
          "Petabit",
          "Petabyte",
          "Exabit",
          "Exabyte",
          "Zettabit",
          "Zettabyte",
          "Yottabit",
          "Yottabyte",
        ],
      },
      Resolution: {
        image: ICONS.resolution.src,
        units: [
          "Pixels-per-inch",
          "Pixels-per-centimeter",
          "Dots-per-inch",
          "Dots-per-centimeter",
          "Lines-per-inch",
          "Lines-per-centimeter",
          "Cycles-per-millimeter",
          "Pixels-per-millimeter",
        ],
      },
      "Data-transfer": {
        image: ICONS.laptop.src,
        units: [
          "Bit-per-second",
          "Kilobit-per-second",
          "Megabit-per-second",
          "Gigabit-per-second",
          "Terabit-per-second",
          "Petabit-per-second",
        ],
      },
    },
  },
  Light: {
    image: ICONS.light.src,
    units: {
      Luminance: {
        image: ICONS.luminance.src,
        units: [
          "Candela-per-square-meter",
          "Lumens-per-square-foot",
          "Nit",
          "Lambert",
          "Foot-lambert",
          "Candela-per-square-inch",
          "Kilolux",
        ],
      },
      Frequency: {
        image: ICONS.frequency.src,
        units: [
          "Hertz",
          "Kilohertz",
          "Megahertz",
          "Gigahertz",
          "Terahertz",
          "Revolutions-per-minute",
          "Cycles-per-second",
          "Decahertz",
          "Centihertz",
          "Millihertz",
        ],
      },
      "Luminous-intensity": {
        image: ICONS.luminanceintensity.src,
        units: [
          "Lumen-per-steradian",
          "Candela-per-square-centimeter",
          "Candela-per-square-inch",
          "Lumens-per-square-foot",
        ],
      },
    },
  },
};
