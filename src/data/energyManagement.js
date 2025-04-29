export const energyManagement=[
  {
    "collegeCampus": {
      "campusName": "Example University",
      "location": "Townsville, State",
      "totalCO2Emissions": {
        "buildingEmissions": {
          "value": 5000,  // in kilograms of CO2
          "unit": "kg CO2"
        },
        "transportEmissions": {
          "value": 2500,  // in kilograms of CO2
          "unit": "kg CO2"
        },
        "population": 15000,
      },
      "electricityUsage": {
        "totalUsage": {
          "value": 2000000,  // in kilowatt-hours (kWh)
          "unit": "kWh"
        },
        "onSiteRenewableUsage": {
          "value": 500000,  // in kilowatt-hours (kWh)
          "unit": "kWh"
        }
      },
      "outdoorLighting": {
        "totalOutdoorLightingUsage": 100000,  // in kilowatt-hours (kWh)
        "efficientLighting": true,  // Indicates whether efficient outdoor lighting is implemented
        "details": "LED lighting installed throughout the campus"
      }
    }
  }
]