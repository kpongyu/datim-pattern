import React, {useEffect, Component } from 'react';
import * as headings from '../Styles/Text';
import styled from 'styled-components';
import * as color_palette from '../Styles/Colors';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Breadcrumb from '../Components/Breadcrumb';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {useStateValue} from '../ContextSetup';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Button from '@material-ui/core/Button';

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



function ListItemLink(props) {
  return  <ListItem button >
  <ListItemText primary={`Item`} />
</ListItem>
}


export default function Indicator() {

    const [indicatorName, setIndicatorName] = React.useState('');

    const [values, setValues] = React.useState({
      frequency: "",
      level: "", 
      target: ""
    });


    const [{ indicators, data_Elements }, dispatch] = useStateValue();
    
    const [currentIndicator, setCurrentIndicator]= React.useState([]);
    const [matchDataElements, setMatchDataElements]= React.useState([]);

    const [activeTab, setActiveTab]= React.useState(0);

    

    const classes = useStyles();

    const handleChange = (event, newActiveTab) => {
      setActiveTab(newActiveTab);
    };


    const [allIndicators, setAllIndicators] = React.useState([]);
    const [preventionIndicator, setPreventionIndicator] = React.useState([]);
    const [testingIndicator, setTestingIndicator] = React.useState([]);
    const [treatmentIndicator, setTreatmentIndicator] = React.useState([]);
    const [viralIndicator, setViralIndicator] = React.useState([]);
    const [healthSystemIndicator, setHealthSystemIndicator] = React.useState([]);
    const [hostCountryIndicator, setHostCountryIndicator] = React.useState([]);
   



    useEffect(() => {
    const allIndicatorCounter = [];
    const preventionIndicatorCounter = [];
    const testingIndicatorCounter = [];
    const treatmentIndicatorCounter = [];
    const viralIndicatorCounter = [];
    const healthSystemIndicatorCounter = [];
    const hostCountryIndicatorCounter = [];

    indicators.map(indicator => {
      allIndicatorCounter.push([indicator.name, indicator.frequency, indicator.level, indicator.target, indicator.group]);

      if(indicator.name===indicatorName){
        setCurrentIndicator(indicator);
      }
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
    });
    setAllIndicators(allIndicatorCounter);
    setPreventionIndicator(preventionIndicatorCounter);
    setTestingIndicator(testingIndicatorCounter);
    setTreatmentIndicator(treatmentIndicatorCounter);
    setViralIndicator(viralIndicatorCounter);
    setHealthSystemIndicator(healthSystemIndicatorCounter);
    setHostCountryIndicator(hostCountryIndicatorCounter);
   
   

  },[]);



  function updateIndicator(indicator_name){
     //match indicator name
     setIndicatorName(indicator_name);

     //match indicator details

     indicators.map(indicator => {
       if(indicator.name===indicator_name){
       setCurrentIndicator(indicator);
       }
     });

     //match data element of this indicator
  //    const match = [];
  //    data_Elements.map(data_Element => {
  //    if((data_Element.name).includes(indicator_name)){
  //      match.push(data_Element);
  //    }
  //  });
  //  setMatchDataElements(match);
  }

  function thirdLevelNav(indicatorName){
    return(
    <ExpansionPanel button >
     <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panell"
                id="panell"
                className={classes.sidebarExpansionSummary}
               
              >
       <ListItemText primary={indicatorName}  onClick={() => {
         updateIndicator(indicatorName);
         setActiveTab(0);
         
       }}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
       
        {
            data_Elements.map(
               data_Element => {
                if((data_Element.name).includes(indicatorName)){
                 return (
                 
                   <div className={classes.dataElementRow} 
                 onClick={()=> {
                  event.stopPropagation();
                   setActiveTab(1);
                   setIndicatorName(indicatorName);
                   indicators.map(indicator => {  
                      if(indicator.name===indicatorName){
                      setCurrentIndicator(indicator);
                    }})
                    setMatchDataElements(data_Element);
                   }}>{data_Element.name}</div>
                  
                   
                   )
                }
               }
                 
             )
            }
           
              </ExpansionPanelDetails>
    </ExpansionPanel>)
  }



   
  
  
  const RowTesting = ({ index, style }) => (
    <div>{thirdLevelNav(testingIndicator[index][0])}</div>

  );
  const RowTreatment = ({ index, style }) => (
    <div>{thirdLevelNav(treatmentIndicator[index][0])}</div>
  );
  const RowViral = ({ index, style }) => (
    <div>{thirdLevelNav(viralIndicator[index][0])}</div>
  );
  const RowHealthSystem = ({ index, style }) => (
    <div>{thirdLevelNav(healthSystemIndicator[index][0])}</div>
  );
  const RowHostCountry= ({ index, style }) => (
    <div>{thirdLevelNav(hostCountryIndicator[index][0])}</div>
  );


  const handleFilterChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

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
    });
    setPreventionIndicator(tempPreventionIndicator);
    setTestingIndicator(tempTestingIndicator);
    setTreatmentIndicator(tempTreatmentIndicator);
    setViralIndicator(tempViralIndicator);
    setHealthSystemIndicator(tempHealthSystemIndicator);
    setHostCountryIndicator(tempHostCountryIndicator);
  

  };




    return (

        
        <div className={classes.container}>
        <Breadcrumb></Breadcrumb>

        <Grid container>

        <Grid item xs={12} md={3}>
        <Paper className={classes.sidebar}>
       <h4 className={classes.sidebarTitle}>INDICATOR NAVIGATION</h4>
       <form className={classes.filterContainer} autoComplete="off">


<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="frequency">Reporting Frequency</InputLabel>
<Select
value={values.frequency}
onChange={handleFilterChange}
className = {classes.select}
inputProps={{
 name: 'frequency',
 id: 'frequency',
 classes: {
   icon: classes.selectIcon
 }
}}
>
<MenuItem value={'Monthly'}>Monthly</MenuItem>
<MenuItem value={'Quarterly'}>Quarterly</MenuItem>
<MenuItem value={'Semi-Annually'}>Semi-Annually</MenuItem>
<MenuItem value={'Annually'}>Annually</MenuItem>
</Select>
</FormControl>
</Grid>






<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="level">Reporting Level</InputLabel>
<Select
value={values.level}
onChange={handleFilterChange}
className = {classes.select}
inputProps={{
 name: 'level',
 id: 'level',
 classes: {
   icon: classes.selectIcon
 }
}}

>
<MenuItem value={'Facility'}>Facility</MenuItem>
<MenuItem value={'Community'}>Community</MenuItem>
<MenuItem value={'Facility & Community'}>Facility & Community</MenuItem>
</Select>
</FormControl>
</Grid>




<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
<InputLabel htmlFor="target">Target</InputLabel>
<Select
value={values.target}
onChange={handleFilterChange}
className = {classes.select}
inputProps={{
 name: 'target',
 id: 'target',
 classes: {
   icon: classes.selectIcon
 }
}}

>
<MenuItem value={'target1'}>Target1</MenuItem>
<MenuItem value={'target2'}>Target2</MenuItem>
<MenuItem value={'target3'}>Target3</MenuItem>
</Select>
</FormControl>
</Grid>











</form>

<div className={classes.sidebarGroup}>
<p className={classes.sidebarSubtitle}>INDICATOR GROUPS</p>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Prevention and support indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              {preventionIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
                 
            
              </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Testing Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
             
              {testingIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
             
              </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Treatment Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              {treatmentIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
              </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Viral Suppressions Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              {viralIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
              </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Health Systems Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              {healthSystemIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
              </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.sidebarExpansionSummary}
              >
                <ExpandTitle className={classes.sidebarExpandTitle}>Host Country Indicators</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
              {hostCountryIndicator.map((value, index) => {
                  return <span key={index} className={classes.thirdLevelContainer}>{thirdLevelNav(value[0])}</span>
              })}
              </ExpansionPanelDetails>
</ExpansionPanel>
</div>

        </Paper>
        </Grid>


        <Grid item xs={12} md={9}>


      {
        indicatorName===''? 
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

       
        
        
        
        
        : 
        <div>
        




        {/* <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="INDICATOR DETAILS" {...a11yProps(0)} />
          {matchDataElements.length===0 ? '': <Tab label="DATA ELEMENTS" {...a11yProps(1)}/>
          
          }
        </Tabs> */}



        <TabPanel value={activeTab} index={0} className={classes.tabPanel}>
        <headings.H1>{indicatorName}</headings.H1>
    
        <ExpansionPanel
             defaultExpanded="true"
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
              <p className={classes.childContent}>
               <ChildList>
               {
             Object.keys(Object(currentIndicator.changes)).map(
               key => <li>{Object(currentIndicator.changes)[key]}</li>
             )
            }
               </ChildList>
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>





       
        <ExpansionPanel
             defaultExpanded="true"
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




        <ExpansionPanel
             defaultExpanded="true"
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
              <p className={classes.childContent}><strong>Disaggregate Groups</strong>

              <ChildList>
               {
             Object.keys(Object(currentIndicator.disaggregate)).map(
               key => <li><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.disaggregate)[key]).map(
                 i => <li>{Object(currentIndicator.disaggregate)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
                </p>
               
       </ExpansionPanelDetails>
       </ExpansionPanel>


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



       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Disaggregate descriptions & definitions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
             {currentIndicator.disaggregateDefination}
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>



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
              <p className={classes.childContent}>
               <ChildList>
               {
             Object.keys(Object(currentIndicator.pepfarDef)).map(
               key => <li><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.pepfarDef)[key]).map(
                 i => <li>{Object(currentIndicator.pepfarDef)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>








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
               key => <p className={classes.childContent}>{Object(currentIndicator.howToUse)[key]}</p>
             )
            }
               </ChildList>
            
       </ExpansionPanelDetails>
       </ExpansionPanel>



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
               key => <p className={classes.childContent}>{Object(currentIndicator.howToCollect)[key]}</p>
             )
            }
            </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>



      


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
               key => <p className={classes.childContent}>{Object(currentIndicator.howToReview)[key]}</p>
             )
            }
            </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>


      


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
               key => <li><strong>{key}</strong>:<ChildList> {Object.keys(Object(currentIndicator.questions)[key]).map(
                 i => <li>{Object(currentIndicator.questions)[key][i]}</li>
               )}</ChildList></li>
             )
            }
               </ChildList>
       </ExpansionPanelDetails>
       </ExpansionPanel>







     

    </TabPanel>



      <TabPanel value={activeTab} index={1} className={classes.tabPanel}>
        


      <headings.H1 className={classes.heading1}>{matchDataElements.name}</headings.H1>



      <ExpansionPanel className={classes.expansionPanel} defaultExpanded="true">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionPanelSummary}

        >
         <Grid container>
          <Grid Item  xs={12} md={9}>
          <Typography className={classes.heading}> 
           <strong>{matchDataElements.name}</strong>: {matchDataElements.category}
           </Typography>
          </Grid>

          <Grid Item xs={12} md={3}>
          <Typography className={classes.heading}> 
           <strong>Data Element UID</strong>: {matchDataElements.uid}
          </Typography></Grid>
          </Grid>
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails 
         className={classes.expansionPanelDetails}
        >
        <Grid container>
        <Grid Item  xs={12} md={8} className={classes.expansionPanelLeft}>
          <Typography>
          <strong>Indicator Code</strong>: <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.buttonNav}>
          {matchDataElements.indicatorCode}
          </NavLink>

          <br/>
          <strong>Description</strong>: {matchDataElements.description}<br/>
          <strong>Short Name</strong>: {matchDataElements.shortName}<br/>
          <strong>Code</strong>: {matchDataElements.code}<br/>
          <strong>Source</strong>: {matchDataElements.source}
          </Typography>
        </Grid>
        <Grid Item  xs={12} md={4}>
        <Paper className={classes.changeBox}>
        <Typography className={classes.changeBoxTitle}>
        Indicator changes/Alerts:
        </Typography>
    <p><strong>Indicator Changes</strong>: {matchDataElements.indicatorChanges} <br/>
       <strong>Reporting Frequency</strong>: {matchDataElements.frequency} <br/>
       <strong>Reporting Level</strong>: {matchDataElements.reportingLevel} 
    </p>
      </Paper>
        </Grid>

        <Grid Item  xs={12} className={classes.comboTable}>
       
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
        data={matchDataElements.combos}        
        options={{
          filtering: true,
          cellStyle: {
            maxWidth: '200px'
          }
        }}
     
       
        onRowClick={()=>{history.push('/indicator')}}
      />
       </div>
      )} />
     

        </Grid>





        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    






      </TabPanel>
      
      </div>}
      
      </Grid>




     </Grid>


     </div>
    );
  
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
const FlexGrid = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`;
const FlexGridHalfCol = styled.p`
    width: 45%;
    padding-right: 1em;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const ChildList =styled.ul`
    margin-top:0;
    padding-top:0;
`;

const TableTitle = styled.h4`

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
    paddingRight: '15px'
  },
  heroContainer:{
    margin: '0 auto',
    backgroundColor: '#eeeeee',
    paddingBottom: '20px',
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
    paddingTop: '30px',
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
  dataElementRow:{
    wordBreak: 'break-word',
    cursor: 'pointer',
    fontSize: '0.8em',
    marginBottom: '10px'
  },
  button:{
    backgroundColor: '#C1A783',
    color: '#000000',

    '&:hover, &:focus':{
      color: '#ffffff'
    }
  },
  hide:{
    display: 'none'
  },
  heading1:{
    wordBreak:'bread-word'
  },
  thirdLevelContainer:{
    marginBottom: '5px'
  }

  
  
 
}));
