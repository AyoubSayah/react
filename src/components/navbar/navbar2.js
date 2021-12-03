import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { AppContext } from '../../store/app.context';
import LANGUAGE_STATE from '../../store/language';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import './navbar.css';
import Divider from '@mui/material/Divider';
export default function Navbar() {
  const { languageState, dispatchChangeLanguage } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [img, setimg] = useState('en');
  const changeLanguage = (event, value) => {
    event.preventDefault();
    setimg(value);
    dispatchChangeLanguage({
      language: value,
      type: LANGUAGE_STATE.types.CHANGE_LANGUAGE,
    });
    handleClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <img className='mejdaf width' src='/search/rectangle.png' />
      <ul className='flex align-center navbar'>
        <li>
          <img className='logo2' src='/home/logo.png' />
        </li>
        <li className='flex sous-liste'>
          <p> {languageState.translation.NAVBAR.HOME}</p>
          <p> {languageState.translation.NAVBAR.SEARCH}</p>
          <p>{languageState.translation.NAVBAR.ARTICLES}</p>
        </li>
        <li>
          <Button
            onClick={(e) => {
              handleClick(e);
            }}
            aria-describedby={id}
          >
            <img alt={img} src={'/' + img + '.png'} className='flag' />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    changeLanguage(e, 'FR');
                  }}
                >
                  <ListItemIcon>
                    <img alt='french' className='flag' src='/fr.png' />
                  </ListItemIcon>
                  <ListItemText primary='FR' />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    changeLanguage(e, 'EN');
                  }}
                >
                  <ListItemIcon>
                    <img alt='english' className='flag' src='/en.png' />
                  </ListItemIcon>
                  <ListItemText primary='EN' />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    changeLanguage(e, 'PR');
                  }}
                >
                  <ListItemIcon>
                    <img alt='pirate' className='flag' src='/pr.png' />
                  </ListItemIcon>
                  <ListItemText primary='PR' />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </li>
      </ul>
    </div>
  );
}
