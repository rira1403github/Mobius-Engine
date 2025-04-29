import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Explore Campaigns", "Search  a Campaign", "How It Works"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Project1 = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate('/login')
    }

    const openWhatsApp = ()=>{
        const phoneNumber = '+916200456200'; // Replace with your WhatsApp number (including country code)
        const encodedNumber = encodeURIComponent(phoneNumber);
        const url = `https://wa.me/${encodedNumber}`;
        window.location.href = url;
    }
 
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SEVA-Connect
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign In As Investor
              </Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{marginLeft:12,marginRight:13}}>
      <h2>
        Training for Industrial Production Worker Job role and Basic
        Manufacturing (FoSTaC) for self-help group workers for Britannia
        foundation, Gwalior.
        </h2>
      </div>
      <div style={{marginLeft:12,marginRight:13,marginTop:12}}>
      <Typography variant="h4">
        Experts from FICSI conducted a three-day training program for self-help
        group of rural women at Barai, Gwalior supported by Britannia Nutrition
        Foundation. Total 19 women participants joined the training program to
        get the taste of food safety and entrepreneurship in food processing.
        The first day of training started with roles and responsibilities of
        industrial production worker, conduct and behaviour at workplace, good
        manufacturing practices. The second day comprised SWOT analysis to
        develop analytical and critical thinking, decision making and team
        building, basics of entrepreneurship, hazards in food and their
        identification. FOSTAC Basic Manufacturing training, which is made
        mandatory by FSSAI for food handlers in processing industry was
        conducted on the third day. Overall, it was an interactive session. The
        zeal to learn could be seen in the eyes of all the women. This was a
        small step towards women empowerment.
      </Typography>
      </div>
      <br />
      <div style={{marginLeft:12}}>
      <Button color="success" onClick={openWhatsApp} style={{backgroundColor:'white'}}>Connect with Whatsapp</Button>
      <Button color="secondary" onClick={handleSubmit}>Check Impact Metrics</Button>
      </div>
    </div>
  );
};

export default Project1;
