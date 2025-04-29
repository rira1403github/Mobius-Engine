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
import { solidwastemanagement as data} from '../../data/solidwastemanagement';

const SolidWasteManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const totalWaste = data[0].wasteData.totalWaste;
    const recycledWaste = data[0].wasteData.recycledWaste;
    const recycledRate=(recycledWaste/totalWaste*100);
    const maxPoints1=(recycledWaste/totalWaste * 3);
    const organic=(data[0].wasteData.segregatedWaste.organic);
    const paper=(data[0].wasteData.segregatedWaste.paper);
    const plastic=data[0].wasteData.segregatedWaste.plastic;
    const glass=data[0].wasteData.segregatedWaste.glass;
    const segregatedWaste=Math.round((organic+paper+glass+plastic)*100)/100;
    let segregationRate=(segregatedWaste/totalWaste*100).toFixed(2);
    const maxPoints2=(segregatedWaste/totalWaste*4);
    let s=(Math.round((maxPoints1+maxPoints2) * 100) / 100).toString()+" out of 7 points";
  return (
    <Box m="20px">
    <Header title="Waste Generation(7 Green Points)" subtitle={s} />
    <Box height="75vh">
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Recycling Organic and Inorganic Waste(3 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h4'>
            Recycling Rate (%) = (Recycled Waste / Total Waste Generated) x 100
            <ProgressBar value={recycledRate} maxValue={100} color="#2196F3"/>
            <Typography variant='h5'>
                Recycled Waste Produced= {recycledWaste}kgs
            </Typography>
            <Typography variant='h5'>
                Total Waste Generated = {totalWaste}kgs
            </Typography>
            <Typography variant='h5'>
                Recycling Rate(%) = {recycledRate}%
            </Typography>
            <Typography variant='h5'>
                Points scored = {maxPoints1}/3
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            Waste Segragation(4 Green Points)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h4'>
          Segregation Rate (%) = (Segregated Waste / Total Waste Generated) x 100
            <Typography >
              <ProgressBar value={segregationRate} maxValue={100} color="#2196F3"/>
            </Typography>
          </Typography>
          <Typography variant='h5'>
                Segregated Waste Produced= {segregatedWaste}kgs
            </Typography>
            <Typography  sx={{ marginLeft: "15px" }}>
                  <li>Organic-{organic}kg</li>
                  <li>Paper-{paper}kg</li>
                  <li>Plastic-{plastic}kg</li>
                  <li>Glass-{glass}kg</li>
            </Typography>
            <Typography variant='h5'>
                Total Waste Produced= {totalWaste}kgs
            </Typography>
            <Typography variant='h5'>
                Segregation rate(%)= {segregationRate}%
            </Typography>
            <Typography variant='h5'>
                Points scored= {maxPoints2}/4
            </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{marginTop:'20px',marginLeft:'20px'}}>
        <h2>Total Points:-{Math.round((maxPoints1+maxPoints2)*100)/100}/7</h2>
      </div>
    </Box>
    </Box>
  )
}

export default SolidWasteManagement
