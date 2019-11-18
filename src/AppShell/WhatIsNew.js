
import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as headings from '../Styles/Text';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {useStateValue} from '../ContextSetup';
const useStyles = makeStyles(theme => ({
    button:{
        backgroundColor: '#C1A783',
        color: '#000000',
        marginBottom: '1em',
        marginTop: '1em',
        float: 'right',
    
        '&:hover, &:focus':{
          color: '#000000',
        }
      },
      divider:{
        width: '70px',
        height: '3px',
        marginTop: '10px',
        backgroundColor: '#C1A783'
      },
      tabContainer:{
        borderBottom: '1px solid #C1A783'
      },
      indicator: {
        backgroundColor: '#C1A783'
      },
      indicatorItem:{
        flexDirection: 'column'
      },
      indicatorTitle:{
        padding: 0,
        fontSize: '1.2em',
        color: '#1d5893 !important'
      },
      indicatorContent:{
        fontSize: '0.8em'
      },
      indicatorContainer:{
        borderBottom: '1px solid #cdcdcd',
        marginTop: '1em'
      }
    
}));

//tab panel function
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


 
export const WhatIsNew =() =>{

      //get indicator and data-elements from context
      const [{ indicators, indicatorName, data_Elements, newIndicators, newDisaggregations, 
        changeFrequencies, modifyIndicators, modifyDisaggregations, retiredIndicators, retiredDisaggregations }, dispatch] = useStateValue();


    const classes = useStyles();

    
    
    //update indicator 
    const updateIndicator = (indicatorName) => event => {
      const match=[];
      data_Elements.map(data_Element => {
   if((data_Element.name).includes(indicatorName)){
     match.push(data_Element);
   }
 });

      dispatch(
      
    {
      type: 'changeIndicatorName',
      newIndicatorName: indicatorName
    }, 
    
    indicators.map(indicator => {
     if(indicator.name===indicatorName){
    dispatch({
      type: 'changeCurrentIndicator',
      newCurrentIndicator: indicator
    })
     }
   }),

  
 dispatch({
  type: 'changeMatchDataElements',
  newMatchDataElements: match
})

   
     
    )
    };


    
    //set initial panel state and panel handle change function
    const [panel, setPanel] = React.useState(0);
    const handleChange = (event, newPanel) => {
          setPanel(newPanel);
        };
    
 
    return(
        <div>
         <Grid container alignItems="center">


        


    <Grid Item  xs={12} md={8}>
        <headings.H1>KEY UPDATES AND CHANGES</headings.H1>
        <div className={classes.divider}/>
    </Grid>
    <Grid Item  xs={12} md={4} alignItems="flex-end">
    <Button variant="outlined" color="primary" className={classes.button}>
      Download MER Guidance
      </Button>
    </Grid>
    </Grid>
    <headings.H4>MER 2.2 to MER 2.3</headings.H4>
        <p>Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key
program areas (e.g., index testing services) that should be taken to scale.</p>

<Tabs value={panel} onChange={handleChange} aria-label="simple tabs example" className={classes.tabContainer}  classes={{ indicator: classes.indicator }} > 
          <Tab label="New Additions to MER 2.3" {...a11yProps(0)} />
          <Tab label="Adjustments from MER 2.2" {...a11yProps(1)} />
          <Tab label="Removals from MER2.2" {...a11yProps(2)} />
        </Tabs>



        <TabPanel value={panel} index={0} className={classes.tabPanel}>


        <ExpansionPanel   defaultExpanded="true">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>New Indicators</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {newIndicators.map(newIndicator => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{newIndicator.name}</Button>
          {
             Object.keys(Object(newIndicator.content)).map(
               key => <p className={classes.indicatorContent}>{Object(newIndicator.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>New Disaggregations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {newDisaggregations.map(newDisaggregation => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{newDisaggregation.name}</Button>
          {
             Object.keys(Object(newDisaggregation.content)).map(
               key => <p className={classes.indicatorContent}>{Object(newDisaggregation.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>



    


        </TabPanel>

        <TabPanel value={panel} index={1} className={classes.tabPanel}>

        <ExpansionPanel  defaultExpanded="true">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Changes in Reporting Frequency</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {changeFrequencies.map(changeFrequency => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{changeFrequency.name}</Button>
          {
             Object.keys(Object(changeFrequency.content)).map(
               key => <p className={classes.indicatorContent}>{Object(changeFrequency.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Modifications to Existing Indicators</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {modifyIndicators.map(modifyIndicator => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{modifyIndicator.name}</Button>
          {
             Object.keys(Object(modifyIndicator.content)).map(
               key => <p className={classes.indicatorContent}>{Object(modifyIndicator.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Modifications to Existing Disaggregations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {modifyDisaggregations.map(modifyDisaggregation => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{modifyDisaggregation.name}</Button>
          {
             Object.keys(Object(modifyDisaggregation.content)).map(
               key => <p className={classes.indicatorContent}>{Object(modifyDisaggregation.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>






        </TabPanel>

        <TabPanel value={panel} index={2} className={classes.tabPanel}>

        <ExpansionPanel defaultExpanded="true">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Retired Indicators</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {retiredIndicators.map(retiredIndicator => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{retiredIndicator.name}</Button>
          {
             Object.keys(Object(retiredIndicator.content)).map(
               key => <p className={classes.indicatorContent}>{Object(retiredIndicator.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Retired Disaggregations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.indicatorItem}>

        {retiredDisaggregations.map(retiredDisaggregation => (
        <div className={classes.indicatorContainer}>
          <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.indicatorTitle}>{retiredDisaggregation.name}</Button>
          {
             Object.keys(Object(retiredDisaggregation.content)).map(
               key => <p className={classes.indicatorContent}>{Object(retiredDisaggregation.content)[key]}</p>
             )
            }
      </div>
        ))}
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

        </TabPanel>
      
      </div>

    )
}