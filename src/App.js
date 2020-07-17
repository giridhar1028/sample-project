import React , {Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Header from './Components/header';
import Body from './body/body'



class App extends Component{
render(){
  return (
    <div style={{margin:"0px",padding:"0px"}}>
     <Header></Header>
     <Body></Body>
    </div>
  );
}
 
}

export default App;
