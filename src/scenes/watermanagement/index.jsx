import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ProgressBar from "../../components/ProgressBar";
import { watermanagement as data } from "../../data/watermanagement";

const WaterManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const totalWaterUsed =
    Math.round(data[0].collegeCampus.totalWaterUse.value * 100) / 100;
  const numberOfStudents =
    Math.round(data[0].collegeCampus.numberOfStudents * 100) / 100;
  const days =
    Math.round(data[0].collegeCampus.selectedPeriod.days * 100) / 100;
  const waterConsumption = Math.round((totalWaterUsed*days)/numberOfStudents * 100)/100;
  const waterUasgeEfficiency=Math.round(waterConsumption/totalWaterUsed*100)/100;
  const points1=Math.round(waterUasgeEfficiency*5*100)/100;
  const catchmentArea=Math.round(data[0].collegeCampus.catchmentArea.value*100)/100;
  const averageRainfall=Math.round(data[0].collegeCampus.averageAnnualRainfall.value*100)/100
  const rainfallVolume=Math.round(catchmentArea*averageRainfall*0.75*100)/100;
  const benchMarkValue=62.3
  const rainfallEfficiency=Math.round((rainfallVolume/catchmentArea/benchMarkValue)*100)/100;
  let s=(Math.round((rainfallEfficiency*3+points1)*100)/100).toString()+" out of 8 points"
  return (
    <Box m="20px">
      <Header title="Water Management" subtitle={s} />
      <Box height="75vh">
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h3">
              Annual Water Consumption(5 Points)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Water Consumption per Capita (L/student/day) = Total Water Use (L)
              / Number of Students / Days in Selected Period
              <ProgressBar value={waterUasgeEfficiency*100} maxValue={100} color="#2196F3" />
              <Typography>Total Water used(L):{totalWaterUsed}</Typography>
              <Typography>Number of Students:{numberOfStudents}</Typography>
              <Typography>Time Period:{days}days</Typography>
              <Typography>Annual Water Consumption(L/student/day):{waterConsumption}</Typography>
              <Typography>Efficiency:{waterUasgeEfficiency*100}%</Typography>
              <Typography>Points Scored:{points1} out of 5</Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h3">
              Rainwater Harvesting(3 Points)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Rainwater Collection Volume = Catchment Area (m²) x Average Annual
              Rainfall (m) x Runoff Coefficient[Administrative buildings and
              paved areas: 0.75 - 0.95 (high runoff due to impervious surfaces)]
              <ProgressBar value={rainfallEfficiency*100} maxValue={100} color="#2196F3" />
            </Typography>
            <Typography>
                Catchment Area(m²):{catchmentArea}
            </Typography>
            <Typography>
                Average Annual Rainfall(m):{averageRainfall}
            </Typography>
            <Typography>
                Average Annual Rainfall(m3):{rainfallVolume}
            </Typography>
            <Typography>
                Volume Used(m3):{totalWaterUsed}
            </Typography>
            <Typography>
                Efficiency(Actual Volume/Calculated Volume * 100):{rainfallEfficiency*100}
            </Typography>
            <Typography>
                Points:{rainfallEfficiency*3} out of 3
            </Typography>
          </AccordionDetails>
        </Accordion>
          <div style={{marginTop:'20px',marginLeft:'20px'}}>
        <h2>Total Points:-Total points:{(rainfallEfficiency*3+points1)}/8</h2>
      </div> 
      </Box>
    </Box>
  );
};

export default WaterManagement;
