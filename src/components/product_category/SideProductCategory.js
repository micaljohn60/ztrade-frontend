import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


export default function SideBarCategory() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Product Category
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Electronic" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          {/* <DraftsIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Fashion" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {/* <InboxIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Household Utility" />
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Kitchen" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
