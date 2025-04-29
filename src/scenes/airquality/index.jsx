import React,{useState} from 'react';
import { Box,useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ProgressBar from '../../components/ProgressBar';
import { airquality as data } from '../../data/airquality';

const AirQuality = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const treeCanopyArea=Math.round(data[0].collegeCampus.totalTreeCanopyArea.value*100)/100;
    const totalLandArea=Math.round(data[0].collegeCampus.totalLandArea.value*100)/100;
    const canopyCoverage=Math.round(treeCanopyArea/totalLandArea*100)/100;
    
  return (
    <Box m="20px">
    <Header title="Air Quality" subtitle="__ out of 6 points" />
    <Box height="75vh">
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Indoor Air Quality(2 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            <ProgressBar value={30} maxValue={100} color="#2196F3"/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Number of Trees(4 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tree Canopy Coverage(%) = (Total Tree Canopy Area / Total Land Area) x 100
            <ProgressBar value={canopyCoverage*100} maxValue={100} color="#2196F3"/>
          </Typography>
          <Typography>Total Tree Canopy Area(sq.m):{treeCanopyArea}</Typography>
          <Typography>Total Land Area(sq.m):{totalLandArea}</Typography>
          <Typography>Tree Canopy Coverage(%):{canopyCoverage*100}</Typography>
          <Typography>Points Scored:{canopyCoverage*4}/4</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Box>
  )
}

export default AirQuality