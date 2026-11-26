const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const products = {
  "apx": {
    name: "WillCool APX",
    type: "Semi-synthetic machining & grinding fluid",
    description:
      "Our semi-synthetic general purpose fluid for machining and grinding of exotic alloys, aluminum alloys, stainless steel, steel, and cast iron.",
    image: `${basePath}/coolant2.jpg`,
    imageWidth: 1384,
    imageHeight: 528,
    features: [
      "High lubricity profile = excellent tool life",
      "Bioresistance and mold preservation",
      "Stable in poor/hard water conditions",
      "Non-staining premium solution for aerospace materials",
    ],
    applications: [
      "Exotic alloys",
      "Aluminum alloys",
      "Stainless steel and steel",
      "Cast iron",
      "General purpose machining and grinding",
    ],
    specifications: {
      "Physical Appearance": "Yellow / Light Amber",
      "PH @ 5%": "9.0",
      "Density (lbs/gal)": "8.2",
      "Grinding Dilution": "3% - 6%",
      "Machining Dilution": "5% - 12%",
      "Refractometer Factor": "1.2",
    },
    advantages: [
      "Premium cutting solution for ferrous and non-ferrous materials",
      "High lubricity formula = excellent tool life",
      "Extended sump life",
      "Low foaming; great for high pressure systems",
      "No formaldehyde release biocides",
      "Extremely stable in hard water conditions",
      "Boeing BAC 5008 Revision V compliant",
      "Does not contain nitrites, sulfur, formaldehyde release biocides, phenolic biocides, triazine, chlorine or DCHA",
      "Not for use on Magnesium",
    ],
  },  "flx1": {
    name: "WillCool FLX1",
    type: "Synthetic cutting & grinding fluid",
    description:
      "FLX1 is an extreme synthetic cutting and grinding fluid designed for both ferrous and nonferrous applications. Exceptional lubrication coupled with low PH mix makes FLX1 an ideal choice for tough applications on all grades of aluminum.",
    image: `${basePath}/coolant1.jpg`,
    imageWidth: 1386,
    imageHeight: 528,
    features: [
      "Operator safe; runs extremely clean and clear",
      "Excellent cooling and lubrication at the cutting interface",
      "Corrosion protection",
      "Rejects tramp oil for simple removal",
      "Excellent choice for aluminum and titanium applications",
    ],
    applications: [
      "All grades of aluminum",
      "Ferrous and nonferrous cutting",
      "Grinding applications",
      "Aerospace machining",
    ],
    specifications: {
      "Physical Appearance": "Light Yellow / Clear",
      Odor: "Mild",
      "Solubility in Water": "Water Soluble",
      "PH 5% Mix": "7.7",
      "PH Concentration": "8.0",
      Residue: "Liquid Film",
      "Refractometer Factor": "1.7",
    },
    advantages: [
      "No sump stench, no bad odors",
      "Extremely long sump life",
      "DCHA free",
      "Non-Chlorinated",
      "Low mist levels",
      "Low carry-off on parts",
      "Extremely clean",
      "Extreme Low foam formula",
      "Does not contain nitrites, sulfur, phenolic biocides, chlorinated Eps or DCHA",
      "Not for use on Magnesium",
    ],
  },

}

