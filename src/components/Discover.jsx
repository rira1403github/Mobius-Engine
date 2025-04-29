import React,{useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Discover = () => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted:", {
      firstName,
      lastName,
      companyEmail,
      companyName,
      phoneNumber,
    });
    setFirstName("");
    setLastName("");
    setCompanyEmail("");
    setCompanyName("");
    setPhoneNumber("");
  };

  return (
    <div style={{display:'inline-flex'}}>
        <div style={{marginTop:20,marginLeft:20,paddingTop:120,paddingLeft:50}}>
        <Typography variant='h2'>Connect With Us</Typography>
        <br />
            <Typography variant='h4'>Contact us for a deeper conversation about your ESG requirements.</Typography>
            <br />
            <li style={{fontSize:25}}>ESG Data Collection and Management</li>
            <li style={{fontSize:25}}>ESG Goal & KPIs Settings</li>
            <li style={{fontSize:25}}>ESG Reports Aligned with Global Frameworks</li>
            <li style={{fontSize:25}}>Analytics and Dashboards</li>
            <li style={{fontSize:25}}>In-depth Supplier Assessments</li>
            <li style={{fontSize:25}}>Carbon Accounting Software</li>
            <li style={{fontSize:25}}>Scope 1,2, 3 Emission Calculator</li>
            <li style={{fontSize:25}}>ESG Data Validation</li>
            <li style={{fontSize:25}}>ESG Advisory & Consulting</li>
        </div>
        <div style={{display:'flex',paddingLeft: 300,paddingTop:100}}>
        <form onSubmit={handleSubmit} style={{ marginTop:20,marginLeft:20 }}>
        <Typography variant='h2'>Get In Touch</Typography>
        <Typography variant='h6' style={{marginTop:5}}>Book an intro call with one of our ESG experts to learn more about us.</Typography>
      <TextField
        label="First Name"
        variant="outlined"
        margin="normal"
        sx={{ width: 300 }}
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <TextField
        label="Last Name"
        variant="outlined"
        margin="normal"
        sx={{ width: 300 }}
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <TextField
        label="Company Email"
        variant="outlined"
        margin="normal"
        sx={{ width: 300 }}
        required
        type="email"
        value={companyEmail}
        onChange={(e) => setCompanyEmail(e.target.value)}
      />
      <br />
      <TextField
        label="Company Name"
        variant="outlined"
        margin="normal"
        sx={{ width: 300 }}
        required
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <br />
      <TextField
        label="Phone Number"
        type='number'
        variant="outlined"
        margin="normal"
        sx={{ width: 300 }}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <br />
      <Button type="submit" variant="contained" sx={{ mt: 2 }} color='secondary'>
        Book a Demo
      </Button>
        </form>
        </div>
    </div>
  )
}

export default Discover;
