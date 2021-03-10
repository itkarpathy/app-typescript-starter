import React from 'react'
import { Link } from 'react-router-dom'
import { Button, MenuItem, Menu } from '@material-ui/core'

const Navbar:React.FC<any> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
       
    <div  className="nav">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Link to="/network">
              <MenuItem onClick={handleClose}>Network Service</MenuItem>
          </Link>
          <Link to="/cache">
              <MenuItem onClick={handleClose}>Cache Service</MenuItem>
          </Link>
          <Link to="/localdata">
              <MenuItem onClick={handleClose}>Local Data Service</MenuItem>
          </Link>
          <Link to="/threadpool">
              <MenuItem onClick={handleClose}>Thread Pool Service</MenuItem>
          </Link>
        
      </Menu>
    </div>
  );
}

export default Navbar;
