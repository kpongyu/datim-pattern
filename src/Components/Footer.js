import React, { Component } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    footer:{
        width: '100%',
        minHeight: '50px',
        backgroundColor:'#002134',
        borderTop:'#C1A783 5px solid',
        position: 'absolute',
        bottom: 0,
    }

}));

export default function Footer() {
    const classes = useStyles();

    return(
    <div className={classes.footer}>


    </div>
    
    
    );
}