import React, {useEffect } from 'react';
import * as headings from '../Styles/Text';
import styled from 'styled-components';
import * as color_palette from '../Styles/Colors';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Breadcrumb from '../Components/Breadcrumb';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {useStateValue} from '../ContextSetup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// eslint-disable-next-line no-unused-vars
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Button from '@material-ui/core/Button';


import {WhatIsNew} from './WhatIsNew';





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

const ExpandTitle = styled.p`
    margin:0;
    padding:0;
    font-size: 1.2em;
    color: ${color_palette.SECONDARY_RED};
    font-weight: bold;
`;
const ExpandSubTitle = styled.span`
    margin-left: 1em;
    font-size: 1em;
    padding-top: 5px;
    font-weight: 300;
`;


const ChildList =styled.ul`
    margin-top:0;
    padding-top:0;
`;


const useStyles = makeStyles(theme => ({
  
  
  childContent:{
    margin: 0,
    padding:0,
    paddingBottom: '1em',
    display: 'block',
    width: '100%'
  },

  hide:{
    display: 'none'
  },
  container:{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom:'50px'
  },
  heroContainer:{
    margin: '0 auto',
    backgroundColor: '#eeeeee',
    paddingBottom: '20px'
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  chipContainer: {
    marginRight: '10px'
  },
  formControl:{
    width: '100%'
  },
  filterContainer: {
    display: 'flex',
    flexGrow: 1,
    paddingBottom: '20px',
    flexDirection: 'column'
  },
  filter: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '50px',
  },
  searchForm:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  inputField:{
    width: '100%',
    backgroundColor:'#ffffff'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `'#D55804' !important`,
      borderWidth: '2px',
    }

  },
  popOver:{
      padding: '20px',
      minWidth: '200px'
  },

  cssFocused: {},
  tabContainer:{
    borderBottom: '1px solid #C1A783',
    width: '100%'
  },
  bigIndicator:{
    backgroundColor:'#C1A783'
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#D55804 !important'
  },
  floatingLabelFocusStyle:{
    '&$focused': {
    color:'#D55804 !important'
    }
  },
  iconButton:{
    padding: '10px',
    borderRadius: '5px',
    marginLeft: '-10px'

  },
  select: {
    '&:before': {
        borderColor: '#D55804',
        borderWidth: '2px'
    },
    '&:after': {
        borderColor: '#D55804',
        borderWidth: '2px'
    }
},
  selectIcon:{
    fill: '#D55804'
  },
  checkbox:{
    color: '#D55804',
  },
  changeBox:{
    padding: '20px',
    marginLeft: '15px',
    marginRight: '15px'
  },
  changeBoxTitle:{
    color: '#920E0E'
  },
  expansionPanelSummary:{
    borderBottom: '1px solid #C1A783',
  },
  expansionPanelDetails:{
    paddingTop: '30px'
  },
  comboTable:{
    boxShadow: 'none',
    border: 'none',
    maxWidth: '100%',
  },
  expansionPanelLeft:{
    paddingBottom: '30px'
  },
  chip:{
    marginRight: '5px'
  },
  filterButton:{
    marginBottom: '20px',
    marginRight: '20px',

    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  downloadButton:{
    marginRight: '20px',
    marginTop: '10px',
    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  formLegend:{
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1.2em',
    marginBottom: '10px'
  },
  sidebar:{
    margin: '0em',
    marginRight: '2em'

  },
  sidebarTitle:{
    textAlign: 'center',
    padding: '1em',
    marginBottom: '0 !important'
  },
  sidebarExpandTitle:{
    fontSize: '1em',
    lineHeight:'1.4em',
    fontWeight: 'normal',
    color: '#000000',
    margin: 0
  },
  sidebarGroup:{
    
   },
   sidebarSubtitle:{
    textAlign: 'center'
   },
   indicatorList:{
    display: 'flex',
    flexDirection: 'column'
   },
   indicatorListItem:{
     paddingBottom: '1em',
     cursor: 'pointer'
   },
   button:{
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',

    '&:hover, &:focus':{
      color: '#ffffff'
    }
  },
  titleNote:{
    color: "rgba(0, 0, 0, 0.87) !important",
    fontSize: '0.8rem',
    fontWeight: 'normal'
  },
  indicatorChanges:{
    padding: '1em',
    marginBottom:'2em'
  },
  panelDetails:{
    flexDirection: 'column'
  },
  comparePanelContainer:{
    maxWidth: '1200px',
    margin:'0 auto',
    height:'80vh'
  },
  closeComparePanel:{
    float:'right',
    margin: '1em',
    cursor:'pointer'
  },
  dataElementContainer:{
    marginBottom: '1em'
  },
  tabDashboard:{
    width: '100%',
    display:'flex',
    justifyContent: 'flex-end'
  },
  historyButton:{
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',

    '&:hover, &:focus':{
      color: '#000000'
    }
  },
  cardList:{
    fontWeight: 300
  },
  [theme.breakpoints.down('sm')]: {
    // styles
    filterContainer: {
      display: 'block',
    },
    formControl:{
      width: '100%'
    },
    root:{
      width: '95vw'
    },
    tableContainer:{
      maxWidth: "85vw"
    },
    tabPanel:{
      width: '95vw',
      padding: '0 !important'
    },
    expansionPanel:{
      margin: '0 -24px'
    },
    sidebar:{
      marginRight: 0
    }
   
  },
  
  
  
 
}));


export default function Indicator() {

    const classes = useStyles();

   
    //initial filter state
    const [values, setValues] = React.useState({
      frequency: "",
      level: "", 
      target: ""
    });


    //get indicator and data-elements from context
    const [{ indicators, data_Elements, indicatorName, currentIndicator, matchDataElements }, dispatch] = useStateValue();

    //set initial panel state and panel handle change function
    const [panel, setPanel] = React.useState(0);
    const handleChange = (event, newPanel) => {
      setPanel(newPanel);
    };

   


    
    //indicator that the app has mounted
    const [init, setInit]= React.useState(false);


    //set states for different indicators
    const [allIndicators, setAllIndicators] = React.useState([]);
    const [preventionIndicator, setPreventionIndicator] = React.useState([]);
    const [testingIndicator, setTestingIndicator] = React.useState([]);
    const [treatmentIndicator, setTreatmentIndicator] = React.useState([]);
    const [viralIndicator, setViralIndicator] = React.useState([]);
    const [healthSystemIndicator, setHealthSystemIndicator] = React.useState([]);
    const [hostCountryIndicator, setHostCountryIndicator] = React.useState([]);



    //before page load
    useEffect(() => {

     //temp indicator hosts
    const allIndicatorCounter = [];
    const preventionIndicatorCounter = [];
    const testingIndicatorCounter = [];
    const treatmentIndicatorCounter = [];
    const viralIndicatorCounter = [];
    const healthSystemIndicatorCounter = [];
    const hostCountryIndicatorCounter = [];


    //get indicator from context, get the filtering elements from the indicator, and divide the indicator based on grouping

    indicators.map(indicator => {
      allIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);

      if(indicator.group === "prevention"){
        preventionIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      if(indicator.group === "testing"){
        testingIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      if(indicator.group === "treatment"){
        treatmentIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      if(indicator.group === "viral"){
        viralIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      if(indicator.group === "health-system"){
        healthSystemIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      if(indicator.group === "host-country"){
        hostCountryIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);
      }
      return true;
    });
    setAllIndicators(allIndicatorCounter);
    setPreventionIndicator(preventionIndicatorCounter);
    setTestingIndicator(testingIndicatorCounter);
    setTreatmentIndicator(treatmentIndicatorCounter);
    setViralIndicator(viralIndicatorCounter);
    setHealthSystemIndicator(healthSystemIndicatorCounter);
    setHostCountryIndicator(hostCountryIndicatorCounter);

    //indicator that the app has mounted
    setInit(true);

  },[]);


  //update the indicator details and matched data-element when select indicator
  function updateIndicator(indicator_name){
     //match indicator name
    //  setIndicatorName(indicator_name);
    dispatch({
      type: 'changeIndicatorName',
      indicatorName: indicator_name
    })
     //match indicator details

     indicators.map(indicator => {
       if(indicator.name===indicator_name){
      //  setCurrentIndicator(indicator);
      dispatch({
        type: 'changeCurrentIndicator',
        currentIndicator: indicator
      })
       }
      return true;
     });

     //match data element of this indicator
     const match = [];
     data_Elements.map(data_Element => {
     if((data_Element.name).includes(indicator_name)){
       match.push(data_Element);
     }
     return true;
   });
  //  setMatchDataElements(match);
  dispatch({
    type: 'changeMatchDataElements',
    matchDataElements: match
  })
  }

  //realize the function of "key update" to back to the default status
  function backtoDefault(){
    dispatch({
      type: 'changeIndicatorName',
      indicatorName: ''
    })
    dispatch({
      type: 'changeCurrentIndicator',
      currentIndicator: []
    })
    dispatch({
      type: 'changeMatchDataElements',
      matchDataElements: []
    })
  }




//implement filtering function by set Values first
  const handleFilterChange = event => {
   
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));

  
  };





//when value has changed, call useEffect function
  useEffect(() => {

//if it's not the first time the app mounted
    if(init){

    const tempPreventionIndicator = [];
    const tempTestingIndicator = [];
    const tempTreatmentIndicator = [];
    const tempViralIndicator = [];
    const tempHealthSystemIndicator = [];
    const tempHostCountryIndicator = [];


    allIndicators.map(indicator => {
      if((values.frequency ==='' ? true : indicator[1] === values.frequency) &&
         (values.level ===''? true : indicator[2] === values.level) &&
         (values.target ==='' ? true: indicator[3] === values.target)
        ){

            if(indicator[4]==='prevention'){
              tempPreventionIndicator.push(indicator);
            }
            if(indicator[4]==='testing'){
              tempTestingIndicator.push(indicator);
            }
            if(indicator[4]==='treatment'){
              tempTreatmentIndicator.push(indicator);
            }
            if(indicator[4]==='viral'){
              tempViralIndicator.push(indicator);
            }
            if(indicator[4]==='health-system'){
              tempHealthSystemIndicator.push(indicator);
            }
            if(indicator[4]==='host-country'){
              tempHostCountryIndicator.push(indicator);
            }
          }    
      return true;   
    });
    setPreventionIndicator(tempPreventionIndicator);
    setTestingIndicator(tempTestingIndicator);
    setTreatmentIndicator(tempTreatmentIndicator);
    setViralIndicator(tempViralIndicator);
    setHealthSystemIndicator(tempHealthSystemIndicator);
    setHostCountryIndicator(tempHostCountryIndicator);
  }
  
  }, [values]);



//layout
return (

        
 <div className={classes.container}>
<Breadcrumb></Breadcrumb>

<Grid container>


{/* sidebar */}
<Grid item xs={12} md={3}>
  <Paper className={classes.sidebar}>
       <h4 className={classes.sidebarTitle}>INDICATOR NAVIGATION</h4>



{/* filters */}
<form className={classes.filterContainer} autoComplete="off">


{/* frequency filter */}
<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="frequency">Reporting Frequency</InputLabel>
<Select
native
value={values.frequency}
onChange={handleFilterChange}
className={classes.select}
inputProps={{
 name: 'frequency',
 id: 'frequency',
 classes: {
   icon: classes.selectIcon
 }
}}
>
<option value={""} />
<option value={'Quarterly'}>Quarterly</option>
<option value={'Semi-Annually'}>Semi-Annually</option>
<option value={'Annually'}>Annually</option>
</Select>
</FormControl>
</Grid>




{/* level filter */}
<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="level">Reporting Level</InputLabel>
<Select
native
value={values.level}
onChange={handleFilterChange}
className={classes.select}
inputProps={{
 name: 'level',
 id: 'level',
 classes: {
   icon: classes.selectIcon
 }
}}

>
<option value={""} />
<option value={'Facility'}>Facility</option>
<option value={'Community'}>Community</option>
</Select>
</FormControl>
</Grid>



{/* target filter */}
<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="target">Target</InputLabel>
<Select
native
value={values.target}
onChange={handleFilterChange}
className={classes.select}
inputProps={{
 name: 'target',
 id: 'target',
 classes: {
   icon: classes.selectIcon
 }
}}

>
<option value={""} />
<option value={'target1'}>Target1</option>
<option value={'target2'}>Target2</option>
<option value={'target3'}>Target3</option>
</Select>
</FormControl>
</Grid>

</form>



{/* indicator groups */}

<div className={classes.sidebarGroup}>
<p className={classes.sidebarSubtitle}>INDICATOR GROUPS</p>


{/* Prevention and support indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Prevention and support indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
                preventionIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
             
              </ExpansionPanelDetails>
</ExpansionPanel>


{/* Testing indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Testing Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
                testingIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
              </ExpansionPanelDetails>
</ExpansionPanel>




{/* Treatment indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Treatment Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
                treatmentIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
              </ExpansionPanelDetails>
</ExpansionPanel>


{/* Viral Suppression indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Viral Suppressions Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
                viralIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
              </ExpansionPanelDetails>
</ExpansionPanel>


{/* Health Systems indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Health Systems Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
                healthSystemIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
              </ExpansionPanelDetails>
</ExpansionPanel>



{/* Host Country indicators */}
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Host Country Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.indicatorList}>
              {
               hostCountryIndicator.map(indicator =>{
                  return(
                    <div onClick={() => updateIndicator(indicator[0])} className={classes.indicatorListItem} key={Math.random()}>
                    {indicator[0]}
                    </div>
                  )
                 
                  
                 
                })
              }
              </ExpansionPanelDetails>
</ExpansionPanel>
</div>

        </Paper>
        </Grid>

{/* main content */}
<Grid item xs={12} md={9}>



{/* if there is no indicator selected display default what's new, 
otherwise display the indicator details and data elements related*/}
        {
        indicatorName===''? <WhatIsNew/> : 
        <div>

        <Button onClick={backtoDefault}>&lt; KEY UPDATES</Button>
        <headings.H1>{indicatorName}</headings.H1>
      {/* indicator tabs */}
        <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
          <Tab label="INDICATOR DETAILS" {...a11yProps(0)} />
          <Tab label="DATA ELEMENTS" {...a11yProps(1)} />
        </Tabs>


      {/* indicator details */}
        <TabPanel value={panel} index={0} className={classes.tabPanel}>
      


     {/* Indicator changes */}
        <ExpansionPanel
             defaultExpanded={true}
        >
 
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Indicator changes</ExpandTitle>
                <ExpandSubTitle>(MER 2.0 v2.2 to v2.3)</ExpandSubTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              
               <ChildList>
               {
             Object.keys(Object(currentIndicator.changes)).map(
               key => <li key={Math.random()}>{Object(currentIndicator.changes)[key]}</li>
             )
            }
               </ChildList>
               
       </ExpansionPanelDetails>
       </ExpansionPanel>





        {/* Indicator description */}
        <ExpansionPanel
             defaultExpanded={true}
        >
 
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Description</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p className={classes.childContent}>
               {currentIndicator.description}
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>


      {/* Indicator reporting level */}
       <ExpansionPanel>
       <ExpansionPanelSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Reporting level</ExpandTitle>
                <ExpandSubTitle> {currentIndicator.level}</ExpandSubTitle>
        </ExpansionPanelSummary>
        </ExpansionPanel>


        <ExpansionPanel>
       <ExpansionPanelSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Reporting frequency</ExpandTitle>
                <ExpandSubTitle>{currentIndicator.frequency}</ExpandSubTitle>
        </ExpansionPanelSummary>
        </ExpansionPanel>



   {/* Indicator calculate */}
        <ExpansionPanel
             defaultExpanded={true}
        >
 
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to calculate annual total</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p className={classes.childContent}>
               {currentIndicator.howtoCalculate}
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>



   {/* Indicator numerator */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Numerator</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              <p className={classes.childContent}><strong>Numerator Name</strong>: {Object(currentIndicator.numerators).name}</p>
              <p className={classes.childContent}><strong>Numerator Description</strong>: {Object(currentIndicator.numerators).description}</p>
              <p className={classes.childContent}><strong>Disaggregate Groups</strong></p>

              <ChildList>
               {
             Object.keys(Object(currentIndicator.disaggregate)).map(
               key => <li key={Math.random()} className={classes.cardList}><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.disaggregate)[key]).map(
                 i => <li key={Math.random()} className={classes.cardList}>{Object(currentIndicator.disaggregate)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
                
               
       </ExpansionPanelDetails>
       </ExpansionPanel>



  {/* Indicator denominator */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Denominator</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              <p className={classes.childContent}><strong>Denominator Name</strong>: {Object(currentIndicator.denominator).name}</p>
              <p className={classes.childContent}><strong>Denominator Description</strong>: {Object(currentIndicator.denominator).description}</p>
              <p className={classes.childContent}><strong>Disaggregate Groups</strong>: {Object(currentIndicator.denominator).groups}</p>
              <p className={classes.childContent}><strong>Disaggregate Disaggregates</strong>: {Object(currentIndicator.denominator).disaggregates}</p>
             </ExpansionPanelDetails>
       </ExpansionPanel>


  {/* Indicator disaggregate */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Disaggregate descriptions & definitions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
             
              {
             Object.keys(Object(currentIndicator.disaggregateDefination)).map(
               key => <li className={classes.cardList}  key={Math.random()}><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.disaggregateDefination)[key]).map(
                 i => <li className={classes.cardList} key={Math.random()}>{Object(currentIndicator.disaggregateDefination)[key][i]}</li>
               )}</ChildList></li>
             )
            }
             
               
       </ExpansionPanelDetails>
       </ExpansionPanel>


  {/* Indicator pepfar definition */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>PEPFAR-support definition</ExpandTitle>
                <ExpandSubTitle>Standard definition of DSD and TA-SDI used.</ExpandSubTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              
               <ChildList>
               {
             Object.keys(Object(currentIndicator.pepfarDef)).map(
               key => <li className={classes.cardList}  key={Math.random()}><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.pepfarDef)[key]).map(
                 i => <li className={classes.cardList}  key={Math.random()}>{Object(currentIndicator.pepfarDef)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
               
       </ExpansionPanelDetails>
       </ExpansionPanel>

  {/* Indicator how to use */}
        <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to use</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <ChildList>
               {
             Object.keys(Object(currentIndicator.howToUse)).map(
               key => <p className={classes.childContent}  key={Math.random()}>{Object(currentIndicator.howToUse)[key]}</p>
             )
            }
               </ChildList>
            
       </ExpansionPanelDetails>
       </ExpansionPanel>


  {/* Indicator how to collect */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to collect</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <ChildList>
              {
             Object.keys(Object(currentIndicator.howToCollect)).map(
               key => <p className={classes.childContent}  key={Math.random()}>{Object(currentIndicator.howToCollect)[key]}</p>
             )
            }
            </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>



      

  {/* Indicator how to review quality */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to review data quality</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <ChildList>
              {
             Object.keys(Object(currentIndicator.howToReview)).map(
               key => <p className={classes.childContent}  key={Math.random()}>{Object(currentIndicator.howToReview)[key]}</p>
             )
            }
            </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>


      

  {/* Indicator guiding narrative questions */}
       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Guiding narrative questions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <ChildList>
               {
             Object.keys(Object(currentIndicator.questions)).map(
               key => <li  key={Math.random()}><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.questions)[key]).map(
                 i => <li  key={Math.random()}>{Object(currentIndicator.questions)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>


    </TabPanel>


      {/* data elements */}
      <TabPanel value={panel} index={1} className={classes.tabPanel}>
      {/* <div className={classes.tabDashboard}>
      <Button variant="contained" color="primary" className={classes.button} onClick={toggleDrawer('bottom', true)}>Comparison</Button>
      </div> */}
        
      {matchDataElements.map(dataElement => (
      <div key={Math.random()}>
      <ExpansionPanel className={classes.expansionPanel}>

      {/* data elements summery */}
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionPanelSummary}

        >
         <Grid container alignItems="center">
       
          <Grid item  xs={11} md={10}>
         
          <Typography className={classes.heading}> 
           <strong>{dataElement.name}</strong>: {dataElement.category}
           </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
          <Typography className={classes.heading}> 
          <strong>Version</strong>: {dataElement.version}
          </Typography></Grid>
          </Grid>
         
        </ExpansionPanelSummary>



         {/* data elements details */}
        <ExpansionPanelDetails 
         className={classes.expansionPanelDetails}
        >
        <Grid container>
        <Grid item  xs={12} className={classes.expansionPanelLeft}>
          <Typography>
          <strong>Indicator Code</strong>: <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.buttonNav}>
          {dataElement.indicatorCode}
          </NavLink>

          <br/>
          <strong>Description</strong>: {dataElement.description}<br/>
          {/* <strong>Short Name</strong>: {dataElement.shortName}<br/>
          <strong>Code</strong>: {dataElement.code}<br/> */}
          <strong>Source</strong>: {dataElement.source}<br/>
          <strong>Data Element UID</strong>: {dataElement.uid}
        

          </Typography>
        </Grid>
       
        {/* data element Disaggregations */}
        <Grid item  xs={12} className={classes.comboTable}>
        <strong>Disaggregations</strong>:<br/>
       
          <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Disaggregations Name</TableCell>
            <TableCell>Disaggregations Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
             Object.keys(Object(dataElement.combos)).map(
               key => <TableRow key={Math.random()}>
              <TableCell component="th" scope="row">
              {Object(dataElement.combos)[key].name}
              </TableCell> 
              <TableCell component="th" scope="row">
              {Object(dataElement.combos)[key].code}
              </TableCell> 
              </TableRow>
              
             )
            }
        </TableBody>
        </Table>


         {/* open the comparison panel */}
          <Button variant="outlined" color="primary" className={classes.historyButton}>Previous Versions</Button>


       
        {/* material table that might be used later
        
        <Route render={({ history}) => (
           <div className={classes.tableContainer}>
    <MaterialTable
        title="Disaggregations"
        columns={[
          { title: 'Name', field: 'name', defaultFilter: '',  filtering: false },
          { title: 'UID', field: 'uid',  filtering: false  },
          { title: 'Code', field: 'code',  filtering: false },
          { title: 'Age Group', field: 'ageGroup',  
          lookup: { '15-19': '15-19', '20-24': '20-24', "25-29": '25-29', '30-34': '30-34', '35-39':'35-39', '40-44':'40-44', "45-49":'45-49', "50+":'50+', "unknown": "Unknown Age" }},
          { title: 'Visit Type', field: 'visitType', 
          lookup: { 'firstTime': 'First Time', 'followUp': 'Follow Up', "rescreened": 'Rescreened'}
          },
          { title: 'Visit Result', field: 'visitResult',
          lookup: { 'positive': 'Positive', 'negative': 'Negative', "suspected": 'Suspected'}
          },
        ]}
        data={dataElement.combos}        
        options={{
          filtering: true,
          cellStyle: {
            maxWidth: '200px'
          }
        }}
     
       
        onRowClick={()=>{history.push('/indicator')}}
      /> */
      
      
      }
      
     
     

        </Grid>





        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

     

      </div>

      ))}






      </TabPanel>
      
      </div>
        }

     
      
      </Grid>




     </Grid>


     </div>
    );
  
}



