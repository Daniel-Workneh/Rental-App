import {useState} from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel, 
  Checkbox, 
  Link,
  Grid2, 
  Box, 
  Divider,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Alert
} from '@mui/material';
import BookAvatar from './images/BookAvatar.png';
import BookAvatar_2 from './images/BookAvatar_2.png';
import loginSchema from './validation/loginSchema.jsx';


//Define Components and their layout
function Copyright(props) {
  return (
    <Typography 
      variant="body2"
      align="center" 
      {...props}
      fontFamily='Dancing Script, cursive'
      color="black"
    >
      {'Copyright © '}
      <Link color="#212121" href="https://mui.com/">
        www.yashad.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const defaultTheme = theme;

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
// Handling changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data with Zod
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const errorMessages = result.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, 
      {});
      setErrors(errorMessages);
      return;
    }

    // Proceed with API request if validation succeeds
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
      }
      else {
        setErrors({ form: data.message || 'Login failed. Please try again.' });
      }
    } 
    
    catch (error) {
      console.error('Error occurred during fetch:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid2
        sx={{
          maxHeight:'100vh',
          width:'50vw',
        }} 
      >
        <CssBaseline />
        <Container
          sx={{
            maxHeight:'100vh',
            height:"100%",
            width:"auto",
            maxWidth: '50vw',
            gap: '1em',
          }}
        >
          <Container>
            <Grid2
              container
              display= 'flex'
              flexWrap="wrap"
              flexDirection="row"
              flex="1"
              alignItems='center'
              justifyContent="flex-start"
              sx={{
                height: 'auto',
                maxHeight:'5rem',
                minWidth: '100px',
                padding: '1rem',
              }}
            >
              <img
                alt="Book Avatar"
                src={BookAvatar}
                style={{
                  marginRight:30, 
                  height: 'auto', 
                  maxHeight: '100%'
                }}
              /> 
              <Typography 
                component ="h3"
                variant ="h4"
                fontWeight="Bold"
              >
                Book Rent
              </Typography>
            </Grid2>
            <Grid2
              display= 'flex'
              flexWrap="wrap"
              flexDirection="row"
              flex="1"
              alignItems='center'
              justifyContent="flex-start"
              sx={{
                height: 'auto',
                maxHeight:'5rem',
                padding: '1rem',
              }}
            >
              <Typography 
                component="h3"
                variant="h5"
              >
                Log In
              </Typography>
              <Divider 
                orientation="horizontal" 
                sx={{  
                  width:'100%', 
                }} 
              />
            </Grid2>
          </Container>
          <Container 
            component="form"
            noValidate 
            onSubmit={handleSubmit} 
            sx={{
              maxHeight:'100%',
              margin: '1em',
              gap: '1em',
            }} 
          >
            <Grid2 
              container 
              gap="1em"
              display='flex'
              flexWrap='wrap'
              flex='1'
              flexDirection='column'
              justifyContent='center'
              height="100%"
              maxHeight="100%"
              width="100%"
            >
              <TextField
                required
                fullWidth
                label="Email Address"
                id="email"
                type="email"
                value={email}
                variant='outlined'
                margin='normal'
                onChange={handleEmailChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                required
                fullWidth
                label="Password"
                id="Password"
                type="Password"
                value={password}
                variant='outlined'
                margin='normal'
                onChange={handlePasswordChange}
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password}
              />
              {errors.form && <Alert severity="error">{errors.form}</Alert>}
              <Box 
                sx={{
                  marginTop:'0em'
                  }}
                >
                <Link
                  href="#"
                  variant="body5"
                  sx={{mt:2}}
                >
                  <Typography>
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
                <FormControlLabel
                  control={
                    <Checkbox 
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="Remember me."
                />
            </Grid2>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2,}}
            >
              Log In
            </Button>
            <Grid2 
              container 
              justifyContent="center" 
              maxHeight="100%"
            >
              <Typography variant='body1'>
                No account yet?
              </Typography>              
              <Link 
                href="#" 
                variant="body5" 
                sx={{marginLeft:1}}
              >
                <Typography variant="body1">
                  Sign Up
                </Typography>
              </Link>
            </Grid2>
          </Container>
        </Container>
        <Copyright sx={{ mt: '3rem' }} />
      </Grid2>
    </ThemeProvider>
  );
}

export default function LogIn() {
  return (
    <Grid2
      container
      gap={0} 
      sx={{ 
        maxHeight: '100vh', 
        height:'100vh', 
        width:'100vw'
      }}
    >
      <Grid2
        xs={6} 
        maxHeight='100%' 
        width='50vw'
        backgroundColor="#000817"
      >
        <Container 
            sx={{
              width: '50vw',
              maxWidth: '50vw',
              height: '100vh',
              maxHeight: '100vh',
              padding: 0,
              margin: 0,
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'none',
            }}
            maxWidth={false} 
          >
            <img 
              src={BookAvatar_2} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%' 
              }}
              alt='Book'
            />
          </Container>
      </Grid2>
      <Grid2
        xs={6} 
        maxHeight='100%' 
        maxWidth='50vw'
        display='flex'
        flexWrap="wrap"
        alignItems="center" 
        justifyContent='left'  
      >
        <SignUp /> 
      </Grid2>
    </Grid2>
  );
}