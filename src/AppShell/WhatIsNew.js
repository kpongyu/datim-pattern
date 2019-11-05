
import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as headings from '../Styles/Text';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button:{
        backgroundColor: '#C1A783',
        color: '#000000',
        marginBottom: '1em',
        marginTop: '1em',
    
        '&:hover, &:focus':{
          color: '#ffffff'
        }
      }
    
}));

export const WhatIsNew =() =>{
    const classes = useStyles();
 
    return(
        <div>
        <headings.H1>Indicators</headings.H1>
        <p>Rutrum ac exercitationem! Lobortis ultricies, adipisicing, lacus quas, tincidunt, taciti? 
        Nostrum mi, explicabo doloremque, provident fermentum laborum aliquid placerat culpa accumsan platea 
        fuga magnis anim recusandae elit error dolorem minus soluta purus. Convallis cum mollis suspendisse, 
        ridiculus praesent vestibulum delectus mollitia beatae necessitatibus phasellus id suspendisse pede 
        accusamus recusandae pariatur, earum dolorum molestie, quasi deleniti suspendisse cras non? 
        Arcu quo officia sed quam atque ullamcorper quia nonummy excepteur, harum aptent nostrum quod animi rerum, 
        iusto commodi quae! Anim? Sapiente, excepteur, lacus distinctio varius quae. Nostra fugiat saepe! Venenatis nisl 
        quaerat atque ullam, debitis illo semper integer, dui iusto consequat. Hic.</p>

        <p>Ridiculus repellendus nisi maiores minus, eros, asperiores cillum litora ac tempus in. Aliqua ante, 
        quaerat ultricies? Sem etiam, adipisicing ac! Eligendi iure? Dolorum tortor beatae proident senectus, proin? 
        Accusantium nibh pellentesque fugiat tempore egestas vulputate, doloremque? Pulvinar beatae nascetur, sapien, 
        illum repudiandae curabitur enim laboris ea lacinia incidunt, interdum blanditiis necessitatibus omnis 
        porro esse laudantium quisquam. Ab. Eius sollicitudin facere. Ullamcorper pretium! Aliquam! Quisque, 
        quia, aute fames? Curae iure maiores cumque enim, etiam nemo ex nemo, voluptas class primis animi, 
        sint ratione distinctio aperiam pulvinar molestie, sapien recusandae optio blandit dapibus vulputate? 
        Tempor pede voluptatibus fuga adipisicing semper consequatur possimus.</p>

        <Button variant="contained" color="primary" className={classes.button}>
      Download MER Guidance
      </Button>
      </div>

    )
}