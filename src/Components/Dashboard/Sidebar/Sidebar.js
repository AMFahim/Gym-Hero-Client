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
     text: "Clients",
     icon: <DashboardIcon/>,
     onClick: () => history.push('/clients')
    },
    {
      text: "Add Trainer",
      icon: <AddIcon/>,
      onClick: () => history.push('/addTrainer')
    },
    {
      text: "Manage classes",
      icon: <EditIcon/>,
      onClick: () => history.push('/editClasses')
    }
  ] 
  return (
    <MIUDrawer variant="permanent" className={classes.drawer}>
    <List className="text-white" style={{height:"600px", backgroundColor:'#34495E'}}>
         {itemsList.map((item, index) => {
           const {text, icon, onClick} = item;  
           return(
           <ListItem button key={text} onClick={onClick}>
            { icon && <ListItemIcon className="text-white">{icon}</ListItemIcon>}
             <ListItemText primary={text} />
           </ListItem>
         )})}
       </List>
   </MIUDrawer>
  );
};

export default withRouter(Sidebar);