import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



function Navbar(){


    return(
        <AppBar position="static">
          <Toolbar >
          <Typography variant="h6" >
              Elaine And Felipe
            </Typography>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Our Wedding</Button>
            <Button color="inherit">Our Registry</Button>
            <Button color="inherit">FAQ</Button>
          </Toolbar>
        </AppBar>
        
    )
}

export default Navbar;