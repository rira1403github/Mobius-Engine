import React from 'react';
import { Box,useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ProgressBar from '../../components/ProgressBar';
import { energyManagement as data } from '../../data/energyManagement';

const EnergyManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const population=data[0].collegeCampus.totalCO2Emissions.population;
    const buildingEmissions=data[0].collegeCampus.totalCO2Emissions.buildingEmissions.value;
    const transportEmissions=data[0].collegeCampus.totalCO2Emissions.transportEmissions.value;
    const perCapitaBuildingEmissions=Math.round(buildingEmissions/population*100)/100;
    const perCapitaTransportEmissions=Math.round(transportEmissions/population*100)/100;
    const perCapitaEmissions=perCapitaBuildingEmissions+perCapitaBuildingEmissions;
    const totalOutdoorLightingUsage=data[0].collegeCampus.outdoorLighting.totalOutdoorLightingUsage;
    const totalUsage=data[0].collegeCampus.electricityUsage.totalUsage.value;
    const onSiteRenewableUsage=data[0].collegeCampus.electricityUsage.onSiteRenewableUsage.value;
    const efficiencyRatio1=(totalOutdoorLightingUsage)/totalUsage;
    const efficiencyRatio2=(onSiteRenewableUsage)/totalUsage;
    const totalPoints=(4-(perCapitaEmissions*4)).toFixed(2)+(efficiencyRatio2*3)+(efficiencyRatio1*2);
  return (
    <Box m="20px">
    <Header title="Energy Management" subtitle="2.12 out of 9 points" />
    <Box height="24vh">
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            CO2 Emissions(4 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Per Capita Emisions(kgs of CO2)=(Per Capita Building Emissions + Per Capita Transport Emissions)
            <Typography>Per Capita Building Emissions(kgs of CO2)=Building Emissions/Population</Typography>
            <Typography>Per Capita Transport Emissions(kgs of CO2)=Transport Emissions/Population</Typography>
            <ProgressBar value={perCapitaEmissions*100} maxValue={100} color="#2196F3"/>
          </Typography>
          <Typography>Per Capita Building Emissions(kgs of CO2)={perCapitaBuildingEmissions}</Typography>
          <Typography>Per Capita Transport Emissions(kgs of CO2)={perCapitaTransportEmissions}</Typography>
          <Typography>Per Capita Emissions(kgs of CO2)={perCapitaEmissions}</Typography>
          <Typography>Amount of CO2 in 100kgs of emissions={perCapitaEmissions*100}kgs</Typography>
          <Typography>Points={(4-(perCapitaEmissions*4)).toFixed(2)}/4</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Efficient Outdoor Lighting (2 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Efficient Lighting Usage = Total Outdoor Lighting Usage x Efficiency Ratio
            <ProgressBar value={efficiencyRatio1*100} maxValue={100} color="#2196F3"/>
          </Typography>
          <Typography>Total Outdoor Lighting Usage(kWh)={totalOutdoorLightingUsage}</Typography>
          <Typography>Efficiency(%)={efficiencyRatio1*100}%</Typography>
          <Typography>Points Scored={efficiencyRatio1*2}/2</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Renewable Energy Usage(3 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Efficient Lighting Usage = Total Outdoor Lighting Usage x Efficiency Ratio
            <ProgressBar value={efficiencyRatio2*100} maxValue={100} color="#2196F3"/>
          </Typography>
          <Typography>Total On-Site Renewable Usage(kWh)={onSiteRenewableUsage}</Typography>
          <Typography>Efficiency Ratio(%)={efficiencyRatio2*100}</Typography>
          <Typography>Points Scored:{efficiencyRatio2*3}/3</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography>Total Point=2.12/9</Typography>
      </Box>
    </Box>
  )
}

export default EnergyManagement
