import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Box, Typography, ListItem, ListItemButton, Grid2} from '@mui/material';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import UploadIcon from '@mui/icons-material/Upload';

const bookList = [
  { "id": 1, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
  { "id": 2, "title": "1984", "author": "George Orwell" },
  { "id": 3, "title": "Pride and Prejudice", "author": "Jane Austen" },
  { "id": 4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
  { "id": 5, "title": "Moby-Dick", "author": "Herman Melville" },
  { "id": 6, "title": "War and Peace", "author": "Leo Tolstoy" },
  { "id": 7, "title": "The Catcher in the Rye", "author": "J.D. Salinger" },
  { "id": 8, "title": "The Hobbit", "author": "J.R.R. Tolkien" },
  { "id": 9, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
  { "id": 10, "title": "The Alchemist", "author": "Paulo Coelho" },
];

const style1 = {
  display:'flex',
  flexWrap:'wrap',
  flex:'1',
  alignContent:'center',
  justifyContent:'center',
  maxWidth: '100%',
  maxHeight: '100%',
  padding: '0.5rem',
  overflow: 'auto',
  boxSizing: 'border-box',
  backgroundColor:'white',
}
const gridStyle ={
  position: 'absolute',
  display:'grid',
  gap: 0,
  justifyContent: 'center',
  alignItems: 'center',
  alignCOntent:'center',
  height:'100%',
  maxHeight:'100vh',
  maxWidth:'100vw',
  overflow:'auto',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  // backgroundColor: '#FAFAFA'
}
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'noBorder',
  boxShadow: 24,
  borderRadius: '2rem',
  p: '2rem',
  gap: '2rem',
  boxSizing: 'border-box',
}

function BookDropdown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [books, setBooks] = useState(bookList);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [newBookQuantity, setNewBookQuantity] = useState('');
  const [newRentPrice, setNewRentPrice] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (newBookTitle.trim() && newBookAuthor.trim() && newBookQuantity.trim() && newRentPrice.trim()) {
      const newId = books?.length + 1;
      setBooks([...books, { id: newId, title: newBookTitle.trim(), author: newBookAuthor.trim(), quantity: newBookQuantity.trim(), price: newRentPrice.trim() }]);
      setNewBookTitle('');
      setNewBookAuthor('');
      setNewBookQuantity('');
      setNewRentPrice('');
      handleClose();
    }
  };
  return (
    <Grid2
      container
      xs={12}
      style = {gridStyle}
    >
      <Box
        position='relative'
        sx={style1}
        flexDirection = 'column'
        gap = '1rem'
      >
        <Box
          position='relative'
          sx={style1}
          flexDirection = 'column'
        >
          <Typography variant="h4" fontWeight='Bold' fontFamily ='Times New Roman, Times, serif'>
            Upload New Book
          </Typography>
        </Box>
        <Box
          position='relative'
          sx={style1}
          flexDirection = 'column'
        >
          <Autocomplete
            options={books}
            freeSolo
            getOptionLabel={(option) => option.title }
            style={{ width: 300 }}
            inputValue={inputValue}
            onInputChange={(event, newValue) => setInputValue(newValue)}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="Search available books or add new"
                placeholder='Search'
                variant="outlined"
                height = '100%'
                width = '100%'
                sx = {{backgroundColor: '#EFEBE9'}}
              />
            )}
            renderOption={(props, option, {index}) => {
              const { key, ...restProps } = props;
              return (
              <React.Fragment key={key}>
                {index === 0 && (
                  <ListItemButton onClick={handleOpen} align ='center'>
                    <Typography fontWeight = 'bold' color='blue'>
                      Add New
                    </Typography>
                  </ListItemButton>
                )}
                <Divider width = '250px' />
                <ListItem {...restProps}>
                  <Box 
                    boxSizing='border-box'
                    sx={{
                      width: 'auto',
                      height: 'auto'
                    }}
                  >
                    <Typography fontWeight='bold'> {option.title} </Typography>
                    <Typography variant='caption'> by {option.author} </Typography>
                  </Box>
                </ListItem>
              </React.Fragment>
            )}}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box 
              sx={style2}
            >
              <Typography 
                id="modal-modal-description" 
                sx={{ 
                  mt: -1, 
                  mb:2 
                }} 
                fontWeight='bold' 
                align='center'
              >
                Add New Book Details
              </Typography>
              <TextField
                margin='dense'
                label='Author Name'
                placeholder='Author Name'
                fullWidth
                required
                variant='outlined'
                value={newBookAuthor}
                onChange={(e) => setNewBookAuthor(e.target.value)}
                sx = {{backgroundColor: '#EFEBE9'}}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Book Title"
                placeholder='Book Title'
                fullWidth
                required
                variant="outlined"
                value={newBookTitle}
                onChange={(e) => setNewBookTitle(e.target.value)}
                sx = {{backgroundColor: '#EFEBE9'}}
              />
              <TextField
                margin='dense'
                label='Category'
                placeholder='Category'
                required
                fullWidth
                variant='outlined'
                sx = {{backgroundColor: '#EFEBE9'}}
                // value={Category}
                // onChange={(e) => setNewBookCategory(e.target.value)}
              />
              <Button 
                sx={{ mt:2, mb: -1 }}
                variant='contained'
                fullWidth
                onClick={() => (handleAdd, console.log("I got clicked"))}
              >
                Add
              </Button>
            </Box>
          </Modal>   
        </Box>
      </Box>
      <Box
        position='relative'
        sx={style1}
        flexDirection='column'
        gap = '1rem'
      >
        <Box
          position='relative'
          sx={style1}
          flexDirection='row'
          gap = '4rem'
        >
          <TextField
            margin="dense"
            label="Book Quantity"
            placeholder='Book Quantity'
            required
            type='number'
            inputProps = {{ min: 0 }}
            variant="outlined"
            sx = {{backgroundColor: '#EFEBE9', justifyContent: 'center'}}
            value={newBookQuantity}
            onChange={(e) => setNewBookQuantity(e.target.value)}
          /> 
          <TextField
            margin="dense"
            label="Rent Price for a week"
            placeholder='Rent Price for 1 week'
            required
            variant="outlined"
            sx = {{backgroundColor: '#EFEBE9'}}
            value={newRentPrice}
            onChange={(e) => setNewRentPrice(e.target.value)}
          />
        </Box>
        <Box
          position='relative'
          sx={style1}
          flexDirection='column'
          gap = '2rem'
        >
          <Button
            startIcon= {<UploadIcon />}
            sx={{textTransform: 'capitalize'}}
          >
            <Typography>
              Upload Book Cover
            </Typography>
          </Button>
          <Button
            variant='contained'
            sx={{
              width: '200px',
              textTransform: 'capitalize'
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
}
BookDropdown.propTypes = {
  key: PropTypes.string,
};

export default BookDropdown;




