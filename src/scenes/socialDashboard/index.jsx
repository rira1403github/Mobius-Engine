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

const SocialDashboard = () => {

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
        <Header title="S-SOCIAL" subtitle="Developing Society Together" />

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
          <Link to="/energymanagement" className="energyManagement">
          <StatBox
            title="Diversity"
            subtitle="Ratio of Male to Female Workers"
            progress="0.50"
            increase="-14%"
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
          <Link to="/airquality" className="energyManagement">
          <StatBox
            title="EqualPay"
            subtitle="Pay Ratio of Male to Female Workers"
            progress="0.50"
            increase="+21%"
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
            title="Health & Hygiene"
            subtitle="Cleanliness in environment"
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
              Cummulative salary
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                (per year)
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

export default SocialDashboard;
