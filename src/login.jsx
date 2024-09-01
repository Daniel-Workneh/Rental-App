import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel, 
  Checkbox, 
  Link,
  Grid2, 
  Box,
  Paper, 
  Divider,
  Typography,
  Container,
  createTheme,
  ThemeProvider
} from '@mui/material';
import BookAvatar from './images/BookAvatar.png';
import BookAvatar_2 from './images/BookAvatar_2.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="#ff0000 " href="https://mui.com/">
        www.dani.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();


const defaultTheme = theme;
function SignUp() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        position ='relative'
        display= 'flex'
        flexWrap= 'wrap'
        flex= '1'
        marginTop='10rem'
        padding="5rem"
        flexDirection= 'column'
        justifyContent= 'center'
        alignContent= 'center'
        maxWidth='50vw'
        backgroundColor='silver'
      >
        <CssBaseline />
        <Grid2
          display='flex'
          flexWrap='wrap'
          flex='1'
          padding="2rem"
          flexDirection='column'
          alignContent='flex-start'
          sx={{
            maxHeight:'100vh',
            height:"100%",
            width:"auto",
            maxWidth: '50vw',
    
          }}
        >
          <Box
            display= 'flex'
            flexWrap="wrap"
            flexDirection="column"
            flex="1"
            alignItems='flex-start'
            justifyContent="flex-start"
            gap='1rem'
            sx={{
              height:'auto',
              maxHeight:'100%',
              width:'auto',
              maxWidth: '50vw'
            }}
          >
            <Box
              display= 'flex'
              flexWrap="wrap"
              flexDirection="row"
              flex="1"
              alignItems='center'
              justifyContent="flex-start"
              sx={{
                height: 'auto',
                maxHeight:'5rem'
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
              <Typography component ="h2" variant ="h3">
                Book Rent
              </Typography>
            </Box>
          
            <Typography component="h1" variant="h5">
              Log In
            </Typography> 
            <Divider 
              orientation="horizontal" 
              sx={{ 
                my: '1rem', 
                width:'100%', 
                opacity: '2'
              }} 
            />
          </Box>
          
          <Box 
            display="flex"
            flex="1"
            flexWrap="wrap"
            component="form"
            flexDirection="column"
            noValidate 
            onSubmit={handleSubmit} 
            sx={{
              maxHeight:'100%'
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
                id="email"
                label="Email Address"
                type="email"
                autoFocus
              />

              <TextField
                required
                fullWidth
                id="Password"
                label="Password"
                type="Password"
                autoComplete="Password"
              />
              
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
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
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
                Sign Up
              </Link>
            </Grid2>
          </Box>
        </Grid2>
        <Copyright sx={{ mt: '4rem' }} />
      </Container>
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
      >
        <Paper 
          elevation={3}
          sx={{
            maxHeight: '100%',
            height: '100%',
            width: '100%',
            backgroundColor: '#000817', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <Box 
            height="auto" 
            maxHeight='100%'
          >
            <img 
              src={BookAvatar_2} 
              style={{ 
                width: '100%', 
                height: '100%' 
              }}
              alt='Book'
            />
          </Box>
        </Paper>
      </Grid2>
      <Grid2
        display='flex'
        flexDirection='column'
        alignContent='center' 
        justifyContent='left' 
        xs={6} 
        maxHeight='100%' 
        width='50vw'
      >
        <Paper 
          elevation={3}
          display= 'flex'
          flexDirection= 'column'
          alignContent= 'space-evenly' 
          justifyContent= 'left'
          sx={{
            maxHeight: '100%',
            height: '100%',
            width: '100%', 
          }} 
        >
          <Box  
            maxHeight='100%'
          >
             <SignUp />
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
}