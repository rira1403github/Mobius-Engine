import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Container, 
    TextField, 
    Button, 
    Grid,  
    CircularProgress, 
    Divider 
  } from '@mui/material';
import HeaderUser from  '../../header/index';


const LoginUser = () => {
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div>
            <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Your app name */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <main className="flex self-center place-content-center place-items-center">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Welcome Back
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={onSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errorMessage} // Set error state if error message exists
                  helperText={errorMessage} // Display error message if present
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errorMessage} // Set error state if error message exists
                  helperText={errorMessage} // Display error message if present
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSigningIn}
                  sx={{ mt: 2 }}
                >
                  {isSigningIn ? <CircularProgress size={24} color="secondary" /> : 'Sign In'}
                </Button>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Link href="/firebase/register" underline="hover">
                  Sign up
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mt: 2, mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                disabled={isSigningIn}
                onClick={onGoogleSignIn}
                sx={{ justifyContent: 'center' }}
              >
                {isSigningIn ? <CircularProgress size={24} color="secondary" /> : 'Continue with Google'}
              </Button>
            </Grid>
          </Grid>
        </main>
      </Container>
        </div>
    )
}

export default LoginUser