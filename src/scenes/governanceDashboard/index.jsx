import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import { Link } from 'react-router-dom';
import "./dashboard.css";

const GovernanceDashboard = () => {

  const handleDownload = () => {
    // Path to the CSV file
    const csvFilePath = '/Users/anjishnukumar/Desktop/archive/ESGData.csv';

    // Create a temporary link element
    const link = document.createElement('a');

    // Set attributes for the link element
    link.href = csvFilePath;
    link.download = 'data.csv';

    // Programmatically click the link to trigger the download
    link.click();
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="G-GOVERNANCE" subtitle="Empowering Higher Institutions to Effectively Navigate through the other pillars of ESG Monitoring System" />

        <Box>
          <Button onClick={handleDownload}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Link to="" className="energyManagement">
          <StatBox
            title="Board Composition"
            subtitle="Composition for Sustainable Leadership"
            progress="0.50"
          />
          </Link>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="" className="energyManagement">
          <StatBox
            title="Shareholder Rights"
            subtitle="Building trust and accountability in good governance"
            progress="0.50"
            
          />
          </Link>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/watermanagement" className="energyManagement">
          <StatBox
            title="Lobbying"
            subtitle="Building Sustainable Policy partnership"
            progress="0.30"
          />
          </Link>
        </Box>
        
        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
               User Engagement
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
               Yearly Views:1.8k
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 3 */}
      </Box>
    </Box>
  );
};

export default GovernanceDashboard;
