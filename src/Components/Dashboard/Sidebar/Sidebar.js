import React from 'react';
import {
  Drawer as MIUDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText 
  } from "@material-ui/core"
import { makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
drawer: {
  width: '160px',

}
})



const Sidebar = (props) => {
  const {history} = props;
  const classes = useStyles();
  const itemsList = [
    {
     text: "Home",
     icon: <HomeIcon/>,
     onClick: () => history.push('/')
    },
    {
     text: "Customers",
     icon: <DashboardIcon/>,
     onClick: () => history.push('/')
    },
    {
      text: "Add Trainer",
      icon: <AddIcon/>,
      onClick: () => history.push('/addTrainer')
    },
    {
      text: "Edit classes",
      icon: <EditIcon/>,
      onClick: () => history.push('/editClasses')
    }
  ] 
  return (
    <MIUDrawer variant="permanent" className={classes.drawer}>
    <List style={{backgroundColor:'rgba(212, 200, 131, 0.945)'}}>
         {itemsList.map((item, index) => {
           const {text, icon, onClick} = item;  
           return(
           <ListItem button key={text} onClick={onClick}>
            { icon && <ListItemIcon>{icon}</ListItemIcon>}
             <ListItemText primary={text} />
           </ListItem>
         )})}
       </List>
   </MIUDrawer>
  );
};

export default withRouter(Sidebar);