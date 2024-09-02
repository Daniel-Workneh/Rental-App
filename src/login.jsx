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
  ThemeProvider
} from '@mui/material';
import BookAvatar from './images/BookAvatar.png';
import BookAvatar_2 from './images/BookAvatar_2.png';

//Define Components their layout

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
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          display='flex'
          flexWrap='wrap'
          flex='1'
          flexDirection='column'
          alignContent='flex-start'
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
              container="true"
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
            display="flex"
            flex="1"
            flexWrap="wrap"
            component="form"
            flexDirection="column"
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
        item 
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
              display: 'flex',
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
        item 
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