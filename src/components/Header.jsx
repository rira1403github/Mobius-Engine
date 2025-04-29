import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import styles from "./styles.module.css";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      <Typography><button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button></Typography>

    </Box>
  );
};

export default Header;