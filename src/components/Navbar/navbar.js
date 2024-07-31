import React from 'react'
import "./navbar.css"
import headshot from "../../img/HeadShotW24.jpg"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DropDownMenu(){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img className ='My-Img' src={headshot} alt='OH NO I FORGOT A PITURE HERE' />
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


function Navbar() {
  return (
    <div className='Nav-Bar'dark-mode = "true">
        <div className='Nav-Left'dark-mode = "true">
            <p className='Nav-Name'>Liam Beresford</p>
        </div>
        <div className='Nav-Right'>
          <div className='My-Img-Div'>
            {DropDownMenu()}
          </div>
        </div>

        
    </div>
  )

}

export default Navbar

