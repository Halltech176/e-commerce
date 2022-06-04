import { AppBar,Menu, Box, Toolbar, InputBase, styled, Typography , Badge, MenuItem} from "@mui/material";
import { MdPhoneInTalk, MdMenu, MdEmail, MdNotifications, MdPersonPin, MdPerson} from "react-icons/md";
import {useState} from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display : 'none',
  gap :'10px',
  alignItems : 'center',
  [theme.breakpoints.up('sm')] : {
    display : 'flex'
  }
  
}));

const MenuIcon = styled('div')(({theme}) => ({
  [theme.breakpoints.up('sm')] : {
    display : 'none'
  }
}))

const LogoIcon = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')] : {
    display : 'none'
  }
  
}));
const UserBox = styled(Box)(({ theme }) => ({
  display : 'flex',
  gap :'10px',
  alignItems : 'center',
  [theme.breakpoints.up('sm')] : {
    display : 'none'
  }
  
}));

const Navbar = ({barOpen, setbarOpen} ) => {
  const [open ,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          talKit
        </Typography>
        <LogoIcon>
        <MdPhoneInTalk
          size={30}
        /></LogoIcon>

        <Search><InputBase placeholder ='search'/></Search>
        <Icons>
          <Badge badgeContent ={4} color ='error'>
          <MdEmail color='secondary'/>
          </Badge>

          <Badge badgeContent ={3} color ='error'>
          <MdNotifications color='secondary'/>
          </Badge>

          <Badge onClick = {() => setOpen(true)} badgeContent ={2} color ='error'>
          <MdPersonPin color='secondary'/>
          </Badge>
        </Icons>

        <UserBox onClick = {() => setOpen(true)}>
        <Badge badgeContent ={2} color ='error'>
          <MdPerson color='secondary'/>
          </Badge>
          <Typography variant ='span'>John</Typography>
        </UserBox>

        <MenuIcon onClick = {() => setbarOpen(barOpen === 'none' ? 'block' : 'none')}>
        <MdMenu color='secondary'/>
        </MenuIcon>

      </StyledToolbar>
      <Menu 
      id ='menu'
      aria-labelledby = 'demo'
      open = {open}
      onClose = {() => setOpen(false)}
      anchorOrigin = {{
        vertical : 'top',
        horizontal : 'right'
      }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>

      </Menu>
    </AppBar>
  );
};
export default Navbar;
