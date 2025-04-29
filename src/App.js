import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import EnergyManagement from "./scenes/energyManagement";
import WaterManagement from "./scenes/watermanagement";
import SolidWasteManagement from "./scenes/solidwastemanagement";
import AirQuality from "./scenes/airquality";
import Introduction from "./scenes/homePage";
import SocialDashboard from "./scenes/socialDashboard";
import Login from "./Login";
import Signup from "./SignUp";
import jwtDecode from "jwt-decode";
import Apple from "./Apple";
import GovernanceDashboard from "./scenes/governanceDashboard";
import Weather from "./components/Weather";
import Discover from "./components/Discover";
import LoginUser from "./components/auth/login/index";
import RegisterUser from "./components/auth/register/index";
import Home from "./components/home/index";
import Header from "./components/Header";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [username, setUsername] = useState("");

  const user = localStorage.getItem("token");

  console.log(user);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {user && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              {user ? (
                <>
                  <Route path="/" element={<Introduction />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/environment" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/social" element={<SocialDashboard />} />
                  <Route path="/governance" element={<GovernanceDashboard />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route
                    path="/energymanagement"
                    element={<EnergyManagement />}
                  />
                  <Route path="/airquality" element={<AirQuality />} />
                  <Route
                    path="/watermanagement"
                    element={<WaterManagement />}
                  />
                  <Route
                    path="/solidwastemanagement"
                    element={<SolidWasteManagement />}
                  />
                  {/* <Route path="/weather" element={<Weather/>}/> */}
                </>
              ) : (
                <>
                  <Route path="/" element={<Navigate to="/landing" />} />
                  <Route path="/signup" exact element={<Signup />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/landing" element={<Apple />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home/project1" element={<Project1 />} />
                  <Route path="/home/project2" element={<Project2 />} />
                  <Route path="/firebase/login" element={<LoginUser/>}/>

                </>
              )}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
