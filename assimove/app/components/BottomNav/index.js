import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';


export default function BottomNav() {

  const [value, setValue] = useState(0);

  return (
    <Container maxWidth="md">
      {/* Los otros elementos */}
      
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Add" icon={
          <div style={{
            background: 'linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,165,0,1) 100%)',
            borderRadius: '50%',
            padding: '5px'
          }}>
            <AddBoxIcon style={{ color: '#fff' }} />
          </div>
        } />
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
      </BottomNavigation>
    </Container>
  );
}
