import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
    <Header title="Renewable-Energy Sources" subtitle="Their(%) Usage In Campus" />

    <Box
      height="75vh"
      border={`1px solid `}
      borderRadius="4px"
    >
      <PieChart />
    </Box>
  </Box>
  );
};

export default Pie;
