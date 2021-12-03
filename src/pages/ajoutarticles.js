import TextField from '@mui/material/TextField';
import Navbar from '../components/navbar/navbar2';

export default function Ajoutarticle() {
  return (
    <div>
      <Navbar />

      <div className='flex mt-3 justify-center w-100'>
        <TextField id='outlined-basic' label='title' variant='outlined' />
        <TextField id='outlined-basic' label='sauveteur' variant='outlined' />
        <TextField id='outlined-basic' label='Bateau' variant='outlined' />
      </div>
    </div>
  );
}
