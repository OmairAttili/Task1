import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link ,Box} from '@mui/material';

export default function BasicMenu() {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{display:{md:'none'}}}>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        sx={{bgcolor:'#1abc9c',color:'white',fontSize:13}}
      >
        Menu
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': buttonId,
          },
        }}
      >
        <Link href='#Portfolio' sx={{textDecoration:'none',color:'black'}}>
        <MenuItem onClick={handleClose}>PORTFOLIO</MenuItem>
        </Link>
        <Link href='#' sx={{textDecoration:'none',color:'black'}}>
        <MenuItem onClick={handleClose}>CONTACT</MenuItem>
        </Link>
        <Link href='#About' sx={{textDecoration:'none',color:'black'}}>
        <MenuItem onClick={handleClose}>ABOUT</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}