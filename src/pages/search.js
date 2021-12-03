import Navbar from '../components/navbar/navbar2';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Cardperso from '../components/card';
export default function Search() {
  return (
    <div>
      <Navbar />
      <img className='man' src='/search/man.png' />
      <img className='man' src='/search/rectangle2.png' />
      <div className='flex justify-center search-input'>
        <Paper
          component='form'
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='Search '
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
            <img src='/search/search.png' />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        </Paper>
      </div>
      <div className='flex wrap'>
        <Cardperso />
        <Cardperso />
        <Cardperso />
        <Cardperso />
        <Cardperso />
        <Cardperso />
      </div>
    </div>
  );
}
