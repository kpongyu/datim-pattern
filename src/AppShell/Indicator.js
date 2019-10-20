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
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

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

    const [indicatorName, setIndicatorName] = React.useState('CXCA_SCRN');

    const [values, setValues] = React.useState({
      frequency: "",
      level: "", 
      target: ""
    });


    const [{ indicators, data_Elements }, dispatch] = useStateValue();
    
    const [currentIndicator, setCurrentIndicator]= React.useState([]);
    const [matchDataElements, setMatchDataElements]= React.useState([]);

    const [value, setValue] = React.useState(0);

    

    const classes = useStyles();

    const handleChange = (event, newValue) => {
      setValue(newValue);
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
   
    
    const match = [];

    data_Elements.map(data_Element => {
      if((data_Element.name).includes(indicatorName)){
        match.push(data_Element);
      }
    });

    setMatchDataElements(match);

  },[]);


  console.log(preventionIndicator.length);

   
  
  const RowPrevention = ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(preventionIndicator[index][0])}>
        <ListItemText primary={preventionIndicator[index][0]} />
    </ListItem>
  );
  const RowTesting = ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(testingIndicator[index][0])}>
    <ListItemText primary={testingIndicator[index][0]} />
    </ListItem>
  );
  const RowTreatment = ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(treatmentIndicator[index][0])}>
    <ListItemText primary={treatmentIndicator[index][0]} />
    </ListItem>
  );
  const RowViral = ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(viralIndicator[index][0])}>
    <ListItemText primary={viralIndicator[index][0]} />
    </ListItem>
  );
  const RowHealthSystem = ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(healthSystemIndicator[index][0])}>
    <ListItemText primary={healthSystemIndicator[index][0]} />
    </ListItem>
  );
  const RowHostCountry= ({ index, style }) => (
    <ListItem button  onTouchTap={() => setIndicatorName(hostCountryIndicator[index][0])}>
    <ListItemText primary={hostCountryIndicator[index][0]} />
    </ListItem>
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
<MenuItem value={'monthly'}>Monthly</MenuItem>
<MenuItem value={'semiAnnually'}>Semi-Annually</MenuItem>
<MenuItem value={'annually'}>Annually</MenuItem>
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
<MenuItem value={'level1'}>Level1</MenuItem>
<MenuItem value={'level2'}>Level2</MenuItem>
<MenuItem value={'level3'}>Level3</MenuItem>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={preventionIndicator.length}
    itemSize={35}>
                 {RowPrevention}
              </FixedSizeList>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={testingIndicator.length}
    itemSize={35}>
                {RowTesting}
              </FixedSizeList>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={treatmentIndicator.length}
    itemSize={35}>
                {RowTreatment}
              </FixedSizeList>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={viralIndicator.length}
    itemSize={35}>
                {RowViral}
              </FixedSizeList>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={healthSystemIndicator.length}
    itemSize={35}>
                {RowHealthSystem}
              </FixedSizeList>
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
              <ExpansionPanelDetails>
              <FixedSizeList height={200} width={'100%'} itemCount={hostCountryIndicator.length}
    itemSize={35}>
                {RowHostCountry}
              </FixedSizeList>
              </ExpansionPanelDetails>
</ExpansionPanel>
</div>

        </Paper>
        </Grid>


        <Grid item xs={12} md={9}>
        <headings.H1>{indicatorName}</headings.H1>


        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="INDICATOR DETAILS" {...a11yProps(0)} />
          <Tab label="DATA ELEMENTS/CODE LIST" {...a11yProps(1)} />
        </Tabs>



        <TabPanel value={value} index={0} className={classes.tabPanel}>
       
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
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Numerator</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
               
            <ul>
            {
             Object.keys(Object(currentIndicator.numerators)).map(
               key => <li>{Object(currentIndicator.numerators)[key]}</li>
             )
            }
            
            
           </ul>     
         
               
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
              <ExpansionPanelDetails>
                <FlexGrid>
                    <FlexGridHalfCol>
                    Number of ART patients who are expected to complete a course of TB preventive 
                    therapy during the reporting period (for programs using continuous IPT, this 
                    includes only the patients who are scheduled to complete the first 6 months of 
                    therapy)
                    </FlexGridHalfCol>
                    <FlexGridHalfCol>
                    The denominator can be generated by counting the total number of patients who are scheduled 
                    to complete a course of TB preventive therapy (or at least 6 months of IPT for those who 
                    are on a prolonged or continuous regimen) in the semiannual reporting period.
                    </FlexGridHalfCol>
                </FlexGrid>
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
                <ExpandTitle>Indicator changes</ExpandTitle>
                <ExpandSubTitle>(MER 2.0 v2.2 to v2.3)</ExpandSubTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
               <ChildList>
                   <li>Numerator disaggregates have been changed to capture Age/Sex by Type 
                   of TB preventive therapy (TPT) by ART Start.</li>
                   <li>Denominator disaggregates have been changed to capture Age/Sex by 
                   Type of TB preventive therapy (TPT) by ART Start.</li>
               </ChildList>
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>


       <ExpansionPanel>
       <ExpansionPanelSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Reporting level</ExpandTitle>
                <ExpandSubTitle>Facility</ExpandSubTitle>
        </ExpansionPanelSummary>
        </ExpansionPanel>

        <ExpansionPanel>
       <ExpansionPanelSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>Reporting frequency</ExpandTitle>
                <ExpandSubTitle>Semi-Annually</ExpandSubTitle>
        </ExpansionPanelSummary>
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
              <p className={classes.childContent}>
              This indicator measures the performance of HIV programs in scaling up TB preventive therapy, 
              with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing 
              TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured 
              in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will 
              allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy 
              will inform programs on their relative use of different regimens, and the timing of ART will allow 
              the clinical cascade to focus on those who are newly entering care, which will better demonstrate 
              program performance, particularly in countries that have already provided TB preventive therapy for 
              many of their PLHIV in care.
                </p>
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
             
              <p className={classes.childContent}>The numerator can be generated by counting the number of PLHIV on ART who are documented as 
              having received at least six months of IPT or have completed another standard course of TB 
              preventive therapy. This should include the patients who completed a shorter alternative course, 
              such as 3 months of isoniazid and rifapentine (3HP), as well as those who are on prolonged or 
              continuous IPT who have completed their first 6 months of therapy during the semiannual reporting 
              period. <strong>Importantly, programs should ensure that patients on continuous therapy are counted only 
              once, and not repeated in future calculations.</strong></p>
              <p className={classes.childContent}>
              The denominator can be generated by counting the total number of patients who are scheduled to 
              complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a 
              prolonged or continuous regimen) in the semiannual reporting period.
              </p>

              <strong>For IPT:</strong>
              <ChildList>
                   <li>Patients who are taking a standard 6-month course of IPT would be expected to complete therapy 
                   if they started IPT in the previous reporting period; therefore, all patients who started IPT at 
                   any time in the previous 6-month reporting period (i.e., the 6 months before the start of the 
                   current reporting period) should be included in the denominator. The few patients who start and 
                   complete IPT in the same reporting would also be included.</li>
                   <li>Patients who are taking prolonged (9- or 12-month) or continuous IPT would also be expected 
                   to complete the first 6 months of IPT if they started IPT in the previous reporting period; therefore, 
                   all patients who started prolonged or continuous IPT in the previous 6-month reporting period should 
                   be included. The few patients who start and complete 6 months of IPT in the same reporting would also 
                   be included.</li>
               </ChildList>


               <strong>For alternative regimens:</strong>
              <ChildList>
                   <li>Patients who are taking a 3-month regimen of isoniazid and rifapentine would be expected to 
                   complete therapy in this reporting period if they started on therapy at any time starting 3 months 
                   prior to the start of the current reporting period to 3 months prior to the end of the current 
                   reporting period; all such persons should be included in the denominator.</li>
                   <li>Patients who are taking a 4-month course of rifampicin would be expected to complete therapy 
                   in this reporting period if they were started on therapy at any time starting 4 months prior to 
                   the start of the current reporting period to 4 months prior to the end of the current reporting 
                   period; all such persons should be included in the denominator.</li>
               </ChildList>

               <p className={classes.childContent}>
               These data elements can be collected from the ART register or from separate TB screening (presumptive TB) 
               or IPT registers.
              </p>


               
       </ExpansionPanelDetails>
       </ExpansionPanel>



       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to review for data quality</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
              Only one disaggregation type is used for age (coarse disaggregations).
              Data Element ≥ subtotal of each of the disaggregations.
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>


       <ExpansionPanel>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
                <ExpandTitle>How to calculate annual total</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
              When analyzing this data in conjunction with data on TB screening for ART patients (TX_TB), 
              it is preferred to analyze it as a snapshot indicator and use the result reported at Q4. 
              However, one could analyze the TB_PREV numerator independently of other data and sum the 
              results across Q2 and Q4 to calculate the total number of ART patients who completed a 
              course of TB preventive therapy during the fiscal year.
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
                <ExpandTitle>Disaggregations</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
               <ChildList>


               <TableTitle>Numerator Disaggregations:</TableTitle>

               <Table >
        <TableHead>
          <TableRow>
            <TableCell>Disaggregate Groups</TableCell>
            <TableCell>Disaggregates</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <TableRow>
            <TableCell>
            Age/Sex by Type of TB Preventive Therapy (TPT) by ART Start:[Required]</TableCell>
            <TableCell>
            <ChildList>
                   <li>IPT by newly enrolled on ART: &lt; 15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>IPT by previously enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>Alternative TPT regimen by newly enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>Alternative TPT regimen by previously enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
            </ChildList>



            </TableCell>
          </TableRow>
        </TableBody>
        </Table>


        <TableTitle>Denominator Disaggregations:</TableTitle>
        <Table >
        <TableHead>
          <TableRow>
            <TableCell>Disaggregate Groups</TableCell>
            <TableCell>Disaggregates</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <TableRow>
            <TableCell>
           Age/Sex by Type of TB Preventive Therapy (TPT) by ART Start:[Required]</TableCell>
            <TableCell>
            <ChildList>
                   <li>IPT by newly enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>IPT by previously enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>Alternative TPT regimen by newly enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
                   <li>Alternative TPT regiment by previously enrolled on ART: &lt;15 F/M, 15+ F/M, Unknown Age F/M</li>
            </ChildList>



            </TableCell>
          </TableRow>
        </TableBody>
        </Table>



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
                <ExpandTitle>Disaggregate descriptions & definitions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <p className={classes.childContent}>
             <strong>Type of TB Preventive Therapy (TPT) by ART Start Descriptions:</strong>
             <ChildList>
                   <li>IPT/Newly enrolled on ART: Among those who completed 6 months of IPT, the patients 
                   who started IPT and ART in the previous reporting period.</li>
                   <li>IPT/Previously enrolled on ART: Among those who completed 6 months of IPT, the patients 
                   who started IPT in the previous reporting period, but who started ART prior to the previous 
                   reporting period (i.e., patients who were on ART prior to the reporting period when they 
                   started IPT).</li>
                   <li>Alternative TPT regimen/Newly enrolled on ART: Among those who completed an alternative regimen 
                   (e.g., 3-month INH and rifapentine), the patients who started the regimen and ART in the current or 
                   the previous reporting period</li>
                   <li>Alternative TPT/Previously enrolled on ART: Among those who completed an alternative regimen 
                   (e.g., 3-month INH and rifapentine), the patients who started the regimen in the current or the 
                   previous reporting period, but started ART prior to previous reporting period</li>
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
                <ExpandTitle>PEPFAR-support definition</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
             
             <strong>Standard definition of DSD and TA-SDI used.</strong>
             <p className={classes.childContent}>
             <strong>Provision of key staff or commodities for routine HIV-related services includes: </strong>
             ongoing provision of critical re-occurring costs or commodities (such as ARVs, 
             TB preventive therapy and diagnostic/screening tests) or funding of salaries or provision 
             of Health Care Workers for HIV clinic services. Staff responsible for maintaining patient 
             records in both HIV and TB clinics are included in this category however staff responsible 
             for fulfilling reporting and routine M&E requirements are not included.
                </p>

                <p className={classes.childContent}>
            <strong>Ongoing support for patients receiving routine HIV-related services includes:</strong> 
            training of HIV service providers, clinical mentoring and supportive supervision of staff at 
            HIV sites, infrastructure/renovation of facilities, support of HIV service data collection, 
            reporting, data quality, QI/QA of HIV services support, ARV and IPT consumption forecasting 
            and supply management, support of lab clinical.
                </p>


               
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
              <p className={classes.childContent}>
            
             <ChildList>
                   <li>Roughly what proportion of all PLHIV on treatment have already completed TB preventive 
                   therapy prior to this reporting period?</li>
                   <li>If TB preventive therapy was not provided to all PLHIV in care (and for who active TB 
                   disease was ruled out), what are the main reasons for limited scale-up?</li>
                   <li>Roughly what proportion of patients who received TB preventive therapy were treated with 
                   the 6-month (or longer) isoniazid regimen?</li>
                   <li>If completion rates were less than 85%, what are the main reasons why?</li>
                   <li>If less than 80% of newly enrolled PLHIV who screened negative for TB disease were 
                   started on TPT, what are the main reasons why?</li>
            </ChildList>
                </p>
       </ExpansionPanelDetails>
       </ExpansionPanel>



     

    </TabPanel>



      <TabPanel value={value} index={1} className={classes.tabPanel}>
        





      {matchDataElements.map(dataElement => (
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionPanelSummary}

        >
         <Grid container>
          <Grid Item  xs={12} md={9}>
          <Typography className={classes.heading}> 
           <strong>{dataElement.name}</strong>: {dataElement.category}
           </Typography>
          </Grid>

          <Grid Item xs={12} md={3}>
          <Typography className={classes.heading}> 
           <strong>Data Element UID</strong>: {dataElement.uid}
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
          {dataElement.indicatorCode}
          </NavLink>

          <br/>
          <strong>Description</strong>: {dataElement.description}<br/>
          <strong>Short Name</strong>: {dataElement.shortName}<br/>
          <strong>Code</strong>: {dataElement.code}<br/>
          <strong>Source</strong>: {dataElement.source}
          </Typography>
        </Grid>
        <Grid Item  xs={12} md={4}>
        <Paper className={classes.changeBox}>
        <Typography className={classes.changeBoxTitle}>
        Indicator changes/Alerts:
        </Typography>
    <p><strong>Indicator Changes</strong>: {dataElement.indicatorChanges} <br/>
       <strong>Reporting Frequency</strong>: {dataElement.frequency} <br/>
       <strong>Reporting Level</strong>: {dataElement.reportingLevel} 
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
        data={dataElement.combos}        
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

      ))}






      </TabPanel>
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

  
  
 
}));
