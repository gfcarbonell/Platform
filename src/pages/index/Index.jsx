import React, { Component } from 'react';
//React Router 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles, LinearProgress } from '@material-ui/core'
import AppBar from '../../components/AppBar';

const styles = theme => ({
    root:{
        position:"relative"
    },
    sliderWrapper:{
        position:"absolute",
        width:"100%",
        height: "100vh",
        top:0,
        zIndex: -1
    }

})
const mapStateToProps = (state, props) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
  const actions = {
  
  };
  return actions;
}

class Index extends Component {
    state = {
        loadingPage: true
    }
    componentDidMount = () => {
        this.setState(state => ({
            loadingPage: false
        }));
    }
    render() {
        let { classes } = this.props;
        let { loadingPage } = this.state;

        return (
            <div className={classes.root}>
               <AppBar />
               {loadingPage ? <LinearProgress /> : <li> Pagina Principal </li>}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Index)));