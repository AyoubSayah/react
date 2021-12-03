import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import { AppContext } from '../store/app.context';
import Button from '@mui/material/Button';

const Home = () => {
  const { languageState } = useContext(AppContext);

  return (
    <div className='header'>
      <Navbar />
      <Button className='btn' variant='contained'>
        {languageState.translation.HOME.BUTTON}
      </Button>

      <img className='boat' src='/home/home.png' />
      <img className='mejdaf' src='/home/image.png' />

      <img className='Rectangle' src='/home/Rectangle.png' />

      <img className='Ellipse' src='/home/Ellipse.png' />

      <img className='boat' src='/home/boat.png' />
    </div>
  );
};
export default Home;
