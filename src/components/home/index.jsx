import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Contact from "../Contact";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const pages = ["Explore Campaigns", "Search  a Campaign", "How It Works"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const steps = [
  {
    label: "SEVA Connect - ESG Commitment",
    description: `Sustainability for a Brighter Tomorrow`,
  },
  {
    label: "Our Commitment to the Environment",
    description:
      "Reduced energy consumption by 15% in 2023 through energy-efficient equipment and processes.Increased use of renewable energy sources: 40% of our electricity needs met by solar power in 2024.",
  },
  {
    label: "Investing in Our People and Communities",
    description: `Launched a comprehensive wellness program offering mental health resources and fitness initiatives.
    Achieved gender parity in leadership positions by 2024.
    Implemented unconscious bias training for all employees.Uphold strict labor standards throughout our supply chain.`,
  },
];

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-241445155360047']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home/project1");
  };

  const handleSubmit1 = () => {
    navigate("/home/project2");
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/landing"
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

            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign In As Investor
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Caraousel */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 1900, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 5,
              py: 6,
              bgcolor: "background.default",
            }}
          >
            <Typography sx={{ fontSize: 26 }}>
              {steps[activeStep].label}
            </Typography>
          </Paper>
          <Box
            sx={{
              height: 255,
              maxWidth: 600,
              width: "100%",
              p: 5,
              fontSize: 22,
            }}
          >
            {steps[activeStep].description}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{
                  color: "green",
                  "&.MuiButton-disabled": { color: "gray" },
                }}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                  color: "green",
                  "&.MuiButton-disabled": { color: "gray" },
                }}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
      <div style={{ marginTop: 10, marginLeft: 37 }}>
        <Typography variant="h2">
          <span>
            Ongoing Social Impact Projects{" "}
            <ArrowForwardIcon fontSize="medium" />{" "}
            <span>
              <Link
                to="https://recommendation-system-hjal.onrender.com/"
                target="_blank"
              >
                <Button size="large" variant="outlined" color="success">
                  AI RECOMMENDATION ✨
                </Button>
              </Link>
            </span>
          </span>
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 35,
          justifyContent: "space-around",
        }}
      >
        <div style={{ marginLeft: 15 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Women Empowerment
              </Typography>
              <Typography variant="h5" component="div">
                Training for Industrial Production Worker Job role
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by Britannia
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                Britannia trains 19 for Food Processing Careers!
                <br />
                {'"Time to InvTest"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="success" onClick={handleSubmit}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div style={{ marginLeft: 15 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Disrupting The Status Quo
              </Typography>
              <Typography variant="h5" component="div">
                Invest in Social Innovation
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by CMRIT
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                Appeals to those seeking Innovation.
                <br />
                {'"Time to InvTest"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="success" onClick={handleSubmit1}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          `
          <iframe
            id="JotFormIFrame-241445155360047"
            title="Form"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency="true"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/241445155360047"
            frameBorder="0"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "539px",
              border: "none",
            }}
            scrolling="no"
          ></iframe>
          `
        </div>

        <div style={{ marginLeft: 15 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Child Health
              </Typography>
              <Typography variant="h5" component="div">
                Battle against Adulteration in Spices under Swasthya Bengal
                Program, West Bengal
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by West Bengal State Govt.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                FICSI's "Battle Against Adulteration
                <br />
                {'"Time to InvTest"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="success">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          margin: "100px 100px 100px 100px",
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
