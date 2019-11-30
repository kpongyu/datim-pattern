import React, {useEffect, Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';

import Breadcrumb from '../Components/Breadcrumb';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MaterialTable from 'material-table';
import {useStateValue} from '../ContextSetup';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Fade from '@material-ui/core/Fade';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

export default function Codelist() {

  const classes = useStyles();

  //get data-elements from context
  const [{ data_Elements, pdhDataElements, mohDataElements }, dispatch] = useStateValue();



  //initial filter state
  const [values, setValues] = React.useState({
    fiscal: [],
    type: [], 
    dataSet: [],
    source: [],
    frequency: []
  });
  const [init, setInit] = React.useState(false);

  //clear all filter values
  const clearValues = event => {
    setValues(()=>({
      fiscal: [],
      source: [],
      type: [], 
      dataSet: [],
      frequency: []
    }));

    setDataElements(data_Elements);
  }

  //advanced search filters
  const [advanced, setAdvanced]= React.useState(false);
  const displayAdvanced = event => {
    setAdvanced(!advanced);
  }


  //handling change filters
  const handleChangeSource = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    const filteredDataElements = [];


    if(!values[event.target.name]==[]){
      

      data_Elements.map(data_Element => {
        if(

          (Object.keys(values).map(function(keyName){
       
            if(keyName!==event.target.name){
              return(
                (values[keyName].length==0 ? true :
                  values[keyName].some( item => item == data_Element.keyName))
              )
            }

          }))
          &&
          (
          event.target.value.length==0 ? true :
          event.target.value.some( item => item == data_Element.source))

          ){
  
        
  
  
         
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);

  }

  const handleChangeType = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    const filteredDataElements = [];


    if(!values[event.target.name]==[]){
      

      data_Elements.map(data_Element => {


        if(
          (values.fiscal.length==0 ? true :
          values.fiscal.some( item => item == data_Element.fiscal))
          &&
          (values.source.length==0 ? true :
          values.source.some( item => item == data_Element.source))
          &&
          (values.dataSet.length==0 ? true :
            values.dataSet.some( item => item == data_Element.dataSet))
          &&
          (values.frequency.length==0 ? true :
          values.frequency.some( item => item == data_Element.frequency))
          &&
          (
          event.target.value.length==0 ? true :
          event.target.value.some( item => item == data_Element.type))

          ){
  
        
  
  
         
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);

  
  }

  const handleChangeFiscal = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    const filteredDataElements = [];


    if(!values[event.target.name]==[]){
      

      data_Elements.map(data_Element => {

   
        if(
          (values.type.length==0 ? true :
          values.type.some( item => item == data_Element.type))
          &&
          (values.source.length==0 ? true :
          values.source.some( item => item == data_Element.source))
          &&
          (values.dataSet.length==0 ? true :
            values.dataSet.some( item => item == data_Element.dataSet))
          &&
          (values.frequency.length==0 ? true :
          values.frequency.some( item => item == data_Element.frequency))
          &&
          (
            event.target.value.length==0 ? true :
          event.target.value.some( item => item == data_Element.fiscal))

          ){
  
        
  
  
       
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);
  
  }

  const handleChangeDataSet = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    const filteredDataElements = [];


    if(!values[event.target.name]==[]){
      

      data_Elements.map(data_Element => {

   
        if(
          (values.type.length==0 ? true :
          values.type.some( item => item == data_Element.type))
          &&
          (values.source.length==0 ? true :
          values.source.some( item => item == data_Element.source))
          &&
          (values.fiscal.length==0 ? true :
            values.fiscal.some( item => item == data_Element.fiscal))
          &&
          (values.frequency.length==0 ? true :
          values.frequency.some( item => item == data_Element.frequency))
          &&
          (
            event.target.value.length==0 ? true :
          event.target.value.some( item => item == data_Element.dataSet))

          ){
  
        
  
  
         
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);
   
  }

  const handleChangeFrequency = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    const filteredDataElements = [];


    if(!values[event.target.name]==[]){
      

      data_Elements.map(data_Element => {

   
        if(
          (values.type.length==0 ? true :
          values.type.some( item => item == data_Element.type))
          &&
          (values.source.length==0 ? true :
          values.source.some( item => item == data_Element.source))
          &&
          (values.fiscal.length==0 ? true :
            values.fiscal.some( item => item == data_Element.fiscal))
          &&
          (values.dataSet.length==0 ? true :
          values.dataSet.some( item => item == data_Element.dataSet))
          &&
          (
            event.target.value.length==0 ? true :
          event.target.value.some( item => item == data_Element.frequency))

          ){
  
        
  
  
        
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);
   
  }


const [selectedDataElement, setSelectedDataElement]=React.useState([]);   
//implement comparison checkbox
const handleCompareCheckbox = dataElement => event => {
  event.stopPropagation();
  if(selectedDataElement.includes(dataElement.name)){
    const newSelectedDataElement = selectedDataElement.filter(data =>{
    return data !== dataElement.name;
    });
    setSelectedDataElement(newSelectedDataElement);
    }else{
    const newSelectedDataElement = [...selectedDataElement, dataElement.name];
    setSelectedDataElement(newSelectedDataElement);
    }


};

const selectAll = event =>{
  if(selectedDataElement.length<data_Elements.length){
    const tempDataElement = [];
    data_Elements.map(dataElement =>{
      tempDataElement.push(dataElement.name);
    })

    setSelectedDataElement(tempDataElement);
  }else{
    setSelectedDataElement([]);
    console.log(selectedDataElement);
  }
}




  
//set initial values
  const [dataElements, setDataElements] = React.useState(data_Elements);
  const [search, setSearch] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comparePanel, setComparePanel] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [dropDownName, setDropDownName] = React.useState("");



//set download data popup
  const dropDownMenu = buttonName => event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setDropDownName(buttonName);
    
   
  };
  const popOpen = Boolean(anchorEl);
  const popId = popOpen ? 'popover' : undefined;
  const popHandleClose = () => {
    setAnchorEl(null);
  };




  const [download, setDownload] = React.useState({
    HTML: true,
    JSON: false,
    CSV: false,
  });
  const handleDownloadChange = name => event => {
    setDownload({ ...download, [name]: event.target.checked });
  };

  const [compare, setCompare] = React.useState({
    DATIM: true,
    PDH: false,
    MOH: false,
  });
  const handleCompareChange = name => event => {
    setCompare({ ...compare, [name]: event.target.checked });
  };






  const { HTML, JSON, CSV } = download;
  const { DATIM, PDH, MOH } = compare;





  const [selectedDatim, setSelectedDatim]= React.useState([]);


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setComparePanel({ ...comparePanel, [side]: open });

    const selectDataTemp=[];
    dataElements.map(dataElement => {
     if(selectedDataElement.includes(dataElement.name)){
     selectDataTemp.push(dataElement)
   }
 
   })
   setSelectedDatim(selectDataTemp);


  };








    
    return (
      <div>

<div className={classes.heroContainer}>
<div className={classes.container}>
     <Breadcrumb></Breadcrumb>

     {/* hero section */}
     <Grid container alignItems="center" >
     <Grid item xs={12} md={7} >
      <headings.H1>Code lists</headings.H1>
      </Grid>


      <Grid item xs={12} md={5} justifyContent="flex-end" >

       {/* search bar */}
      <form 
       className={classes.searchForm}
       onSubmit={e => {
          e.preventDefault();
          const filteredDataElements = data_Elements.filter(dataElement => {
            if(search!==''){
            return (
              Object.values(dataElement).indexOf(search)>-1
            )}else{
              return(
                Object.values(dataElement)
              )
            };
          });

          setDataElements(filteredDataElements);
         
        }}>
       
      <TextField
       
        type="text"
        value={search}
        label="Search"
        variant="outlined"
        onChange={e =>{
          setSearch(e.target.value);
        }}
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle
          }}
        className={classes.inputField}
        InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
       
      >
      
      
      </TextField>
       
     
      </form>
      
      </Grid>
</Grid>


      </div>
      </div>








   
      <div className={classes.container}>
    <Grid container>


{/* filters */}
<Grid item xs={12} md={3}>
<Paper className={classes.sidebar}>
<div className={`${classes.container} ${classes.sidebarContainer}`}>
     
     
<h4 className={classes.sidebarTitle}>Data Element Filters</h4>


     <form  autoComplete="off">



{/* source filter */}


<Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>


  <InputLabel htmlFor="source">Source</InputLabel>
  <Select
   multiple
    value={values.source}
    onChange={handleChangeSource}
    className = {classes.select}
    inputProps={{
      name: 'source',
      id: 'source',
      classes: {
        icon: classes.selectIcon
      }
    }}
    renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
    )}
  >
    <MenuItem value={'DATIM'}>DATIM</MenuItem>
    <MenuItem value={'PDH'}>PDH</MenuItem>
    <MenuItem value={'MOH'}>MOH</MenuItem>
  </Select>
</FormControl>
</Grid>

{/* frequency filter */}
<Grid item xs={12} cclassName={classes.filter}  >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="frequency">Frequency</InputLabel>
  <Select
   multiple
    value={values.frequency}
    onChange={handleChangeFrequency}
    className = {classes.select}
    inputProps={{
      name: 'frequency',
      id: 'frequency',
      classes: {
        icon: classes.selectIcon
      }
    }}
    renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
    )}
  >
    <MenuItem value={'quarterly'}>Quarterly</MenuItem>
    <MenuItem value={'semiAnnual'}>Semi-Annual</MenuItem>
    <MenuItem value={'annual'}>Annual</MenuItem>
  </Select>
</FormControl>
</Grid>







{/* fiscal year filter */}
     <Grid item xs={12} className={classes.filter} >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="fiscal">Fiscal Year</InputLabel>
  <Select
    multiple
    value={values.fiscal}
    onChange={handleChangeFiscal}
    className = {classes.select}
    inputProps={{
      name: 'fiscal',
      id: 'fiscal',
      classes: {
        icon: classes.selectIcon
      }
    }}
    renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
    )}
  >
    <MenuItem value={'2020'}>2020</MenuItem>
    <MenuItem value={'2019'}>2019</MenuItem>
    <MenuItem value={'2018'}>2018</MenuItem>
  </Select>
</FormControl>
</Grid>



{/* type filter */}
<Grid item xs={12} className={advanced ? classes.filter : classes.hide} >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="type">Type</InputLabel>
  <Select
   multiple
    value={values.type}
    onChange={handleChangeType}
    className = {classes.select}
    inputProps={{
      name: 'type',
      id: 'type',
      classes: {
        icon: classes.selectIcon
      }
    }}
    renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
    )}
  >
    <MenuItem value={'Results'}>Results</MenuItem>
    <MenuItem value={'Target'}>Target</MenuItem>
    <MenuItem value={'SIMS'}>SIMS</MenuItem>
  </Select>
</FormControl>
</Grid>





{/* data set filter */}
<Grid item xs={12} className={advanced ? classes.filter : classes.hide}>
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="dataSet">Data Set</InputLabel>
  <Select
   multiple
    value={values.dataSet}
    onChange={handleChangeDataSet}
    className = {classes.select}
    inputProps={{
      name: 'dataSet',
      id: 'dataSet',
      classes: {
        icon: classes.selectIcon
      }
    }}
    renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
    )}
  >
    <MenuItem value={'facility'}>Facility Based Code List</MenuItem>
    <MenuItem value={'community'}>Community Based Code List</MenuItem>
  </Select>
</FormControl>
</Grid>




</form>

{/* filter functions */}
<Button onClick={displayAdvanced} className={classes.toggleFilters}>
      {advanced ? 'Less Filters' : 'More Filters'}
</Button>
<Button variant="outlined" onClick={clearValues} className={classes.filterButton}>
       Clear Filters
</Button>


   




      </div>
    
</Paper>
</Grid>

<Grid item xs={12} md={9} className={classes.dataElementContent}>
<div className={classes.tabDashboard}>
  <div>
<Button variant="outlined" className={classes.actionButton} onClick={dropDownMenu("download")} id="downloadButton">
Download selected data elements
</Button>
<Button variant="outlined" className={classes.actionButton} onClick={dropDownMenu("compare")} id="comparisonButton">
Compare selected data elements
</Button>
</div>

<Button variant="outlined" className={classes.actionButton} onClick={selectAll}   id="downloadButton">
Select All
</Button>

 <Popover
        id={popId}
        open={popOpen}
        anchorEl={anchorEl}
        onClose={popHandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        
      >
      {
       dropDownName==="download" ? 
        <FormControl component="fieldset" className={classes.formControl} className = {classes.popOver}>
        
        <FormGroup>
        <FormLabel component="legend" className={classes.formLegend}>Data Format</FormLabel>
          <FormControlLabel
            control={<Checkbox checked={HTML} style={{color: '#D55804'}} onChange={handleDownloadChange('HTML')} value="HTML" />}
            label="HTML"
          />
          <FormControlLabel
            control={<Checkbox checked={CSV} style={{color: '#D55804'}} onChange={handleDownloadChange('CSV')} value="CSV" />}
            label="CSV"
          />
          <FormControlLabel
            control={
              <Checkbox checked={JSON} style={{color: '#D55804'}} onChange={handleDownloadChange('JSON')} value="JSON" />
            }
            label="JSON"
          />
          <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={()=> console.log(download, dataElements)}>
            Download DATA
          </Button>
        </FormGroup>
      </FormControl>: 
       <FormControl component="fieldset" className={classes.formControl} className = {classes.popOver}>
        
       <FormGroup>
       <FormLabel component="legend" className={classes.formLegend}>Data Sources</FormLabel>
         <FormControlLabel
           control={<Checkbox checked={DATIM} style={{color: '#D55804'}} onChange={handleCompareChange('DATIM')} value="DATIM" />}
           label="DATIM" disabled
         />
         <FormControlLabel
           control={<Checkbox checked={PDH} style={{color: '#D55804'}} onChange={handleCompareChange('PDH')} value="PDH" />}
           label="PDH"
         />
         <FormControlLabel
           control={
             <Checkbox checked={MOH} style={{color: '#D55804'}} onChange={handleCompareChange('MOH')} value="MOH" />
           }
           label="MOH"
         />
         <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={toggleDrawer('bottom', true)} >
          COMPARE SOURCES
         </Button>
       </FormGroup>
     </FormControl>

      }
        
       
        

      </Popover>



</div>

 {/* data elements */}
{dataElements.map(dataElement => (
  <div >
      <ExpansionPanel className={classes.dataElementContainer}>

      {/* data elements summery */}
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionPanelSummary}

        >
         <FormControlLabel
            aria-label="Acknowledge"
            onClick={handleCompareCheckbox(dataElement)}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox />}
            checked={selectedDataElement.includes(dataElement.name) ? true : false}
            // label="I acknowledge that I should stop the click event propagation"
          />
         <Grid container alignItems="center">


        


          <Grid Item  xs={12} md={10}>
          <Typography className={classes.heading}> 
           <strong>{dataElement.name}</strong>: {dataElement.category}
           </Typography>
          </Grid>

          <Grid Item xs={12} md={2}>
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
        <Grid Item  xs={12} className={classes.expansionPanelLeft}>
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
      

        <Grid Item  xs={12} className={classes.comboTable}>
       
        <Route render={({ history}) => (
           <div className={classes.tableContainer}>
            {/* data element Disaggregations */}
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
            key => <TableRow>
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
       </div>
      )} />
     

        </Grid>





        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


  

      </div>

      ))}
      <TablePagination
        component="ExpansionPanel"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />

{/* data element comparison panel */}
<Drawer anchor="bottom" open={comparePanel.bottom} onClose={toggleDrawer('bottom', false)}>
      <Grid container className={classes.comparePanelContainer}>
      <Grid item xs={12}>
     
      <div className={classes.fixedTop}>
      <CloseIcon onClick={toggleDrawer('bottom', false)} className={classes.closeComparePanel}>add_circle</CloseIcon>
      <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT COMPARISON</h2>

      <div className={classes.compareTitle}>
        {DATIM ? <div className={classes.compareTitleColumn}>DATIM</div> :''}
        {PDH ? <div className={classes.compareTitleColumn}>PDH</div> :''}
        {MOH ? <div className={classes.compareTitleColumn}>MOH</div> :''}
      </div>
      </div>

      {
        selectedDatim.map(datim =>{
          return(
            <div className={classes.compareRow}>
              <div className={classes.compareRowColumn}>
              
              <ExpansionPanel defaultExpanded className={classes.expandPanel}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3b-content"
                id="panel3b-header"
                
              >
              <div className={classes.compareCardSummary}>
              <div className={classes.compareCardText}>DATIM Data Element: </div>
              <div className={classes.compareCardName}>{datim.name}</div>
              <div className={classes.compareCardText}>DATIM UID: <strong>{datim.uid}</strong></div>
              </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>


              <Route render={({ history}) => (
           <div className={classes.tableContainer}>
            {/* data element Disaggregations */}
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
          Object.keys(Object(datim.combos)).map(
            key => <TableRow>
           <TableCell component="th" scope="row">
           {Object(datim.combos)[key].name}
           </TableCell> 
           <TableCell component="th" scope="row">
           {Object(datim.combos)[key].code}
           </TableCell> 
           </TableRow>
           
          )
         }
     </TableBody>
     </Table>
     </div>)}></Route>
              </ExpansionPanelDetails>
              </ExpansionPanel>
              </div>

              <div className={PDH ? classes.compareRowColumn : classes.hide}>

                
                { datim.pdh.length===0? 'No matching PDH data element': pdhDataElements.map(pdhDataElement => {
                    if((datim.pdh).includes(pdhDataElement.uid)){
                      return(
                        <ExpansionPanel  className={classes.expandPanel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3b-content"
                            id="panel3b-header"
                            
                          >
                          <div className={classes.compareCardSummary}>
                          <div className={classes.compareCardText}>PDH Data Element: </div>
                          <div className={classes.compareCardName}>{pdhDataElement.name}</div>
                          <div className={classes.compareCardText}>PDH Data Element UID: <strong>{pdhDataElement.uid}</strong></div>
                          <div className={classes.compareCardText}>Derived Data Element? <strong>{pdhDataElement.derived}</strong></div>
                          </div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails className={classes.panelDetail}>
            
            
                          <Route render={({ history}) => (
                       <div className={classes.tableContainer}>
                        {/* data element Disaggregations */}
                  <strong>PDH Disaggregations</strong>:<br/>
                   
                   <Table className={classes.table} aria-label="simple table">
                 <TableHead>
                   <TableRow>
                     <TableCell>Disaggregations Name</TableCell>
                     <TableCell>Disaggregations Code</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {
                      Object.keys(Object(pdhDataElement.combos)).map(
                        key => <TableRow>
                       <TableCell component="th" scope="row">
                       {Object(pdhDataElement.combos)[key].name}
                       </TableCell> 
                       <TableCell component="th" scope="row">
                       {Object(pdhDataElement.combos)[key].code}
                       </TableCell> 
                       </TableRow>
                       
                      )
                     }
                 </TableBody>
                 </Table>
                 </div>)}></Route>
                          </ExpansionPanelDetails>
                          </ExpansionPanel>
                      )
                    }
                  })
                }
                </div>

                <div className={MOH ? classes.compareRowColumn : classes.hide}>

                { datim.moh.length===0? 'No matching MOH data element': mohDataElements.map(mohDataElement => {
                    if((datim.moh).includes(mohDataElement.uid)){
                      return(
                        <ExpansionPanel  className={classes.expandPanel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3b-content"
                            id="panel3b-header"
                            
                          >
                          <div className={classes.compareCardSummary}>
                          <div className={classes.compareCardText}>MOH Data Element: </div>
                          <div className={classes.compareCardName}>{mohDataElement.name}</div>
                          <div className={classes.compareCardText}>MOH Data Element UID: <strong>{mohDataElement.uid}</strong></div>
                          <div className={classes.compareCardText}>Derived Data Element? <strong>{mohDataElement.derived}</strong></div>
                          </div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails className={classes.panelDetail}>
            
            
                          <Route render={({ history}) => (
                       <div className={classes.tableContainer}>
                        {/* data element Disaggregations */}
                  <strong>MOH Disaggregations</strong>:<br/>
                   
                   <Table className={classes.table} aria-label="simple table">
                 <TableHead>
                   <TableRow>
                     <TableCell>Disaggregations Name</TableCell>
                     <TableCell>Disaggregations Code</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {
                      Object.keys(Object(mohDataElement.combos)).map(
                        key => <TableRow>
                       <TableCell component="th" scope="row">
                       {Object(mohDataElement.combos)[key].name}
                       </TableCell> 
                       <TableCell component="th" scope="row">
                       {Object(mohDataElement.combos)[key].code}
                       </TableCell> 
                       </TableRow>
                       
                      )
                     }
                 </TableBody>
                 </Table>
                 </div>)}></Route>
                          </ExpansionPanelDetails>
                          </ExpansionPanel>
                      )
                    }
                  })
                }
                </div>
            </div>

          )
        })

      }
      
     





      
      
      </Grid>

      
      </Grid>
</Drawer>







</Grid>
</Grid>

</div>


</div>

   
    
    );
  
}

const useStyles = makeStyles(theme => ({
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
    paddingBottom: '20px'
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
    borderBottom: '1px solid #C1A783'
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
   marginTop: '20px',
   marginBottom: '0px',
   width: '100%',

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
    marginRight: '2em',
    paddingBottom: '2em'

  },
  sidebarTitle:{
    textAlign: 'center',
    padding: '1em',
    marginBottom: '0 !important'
  },
  sidebarContainer:{
    paddingTop: 0
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
   dataElementContent:{
     paddingLeft: '1em',
     paddingBottom:'50px'

   },
   closeComparePanel:{
    float:'right',
    margin: '1em',
    cursor:'pointer',
    padding:'10px',
    border:'1px solid #111111',
    borderRadius:'50%',
    marginTop: 0
  },
  actionButton:{
    marginLeft: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  panelDetails:{
    flexDirection: 'column'
  },
  comparePanelContainer:{
    maxWidth: '1200px',
    margin:'0 auto',
    height:'100vh'
  },
  dataElementContainer:{
  },
  tabDashboard:{
    width: '100%',
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent: 'space-between'
  },
  toggleFilters:{
    marginTop: '15px',
    color: "#1d5893 !important",
    padding: 0,

    '&:hover, &:focus':{
      background: 'transparent'
    }
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
  heading:{
    wordBreak:'break-all'
  },
  comparisonPanelTitle:{
    color: '#303030',
  fontSize: '30px',
  textAlign: 'center',
  fontFamily: 'EB Garamond !important', 
  fontWeight: 400,
  paddingLeft: '30px',
  paddingRight: '30px',
  textTransform: 'uppercase'
  },
  fixedTop:{
    top: 0,
    width: '100%',
    zIndex: 99,
    position: 'sticky',
    backgroundColor: '#ffffff'
  },
  compareTitle:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  compareTitleColumn:{
    flex: 1,
    color: '#ffffff',
    border: '1px solid #ffffff',
    padding: '1em',
    textAlign: 'center',
    alignItems: 'center',
    borderBottom: 0,
    justifyContent: 'center',
    backgroundColor: '#062133'
  },
  compareRow:{
    width: '100%',
    display: 'flex',
    paddingTop: '1em',
    borderBottom: '1px solid #062133',
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',

    '&:nth-child(even)': {
      backgroundColor:'#eeeeee'
    }
  },
  compareRowColumn:{
    flex: 1,
    margin: '1em'
  },
  compareCardSummary:{
    flexDirection:'column'
  },
  compareCardName:{
    fontWeight: 'bold',
    wordBreak:'break-all'
  },
  compareCardText:{
    fontWeight:300,
    paddingBottom:'5px',
    paddingTop: '5px'
  },


  [theme.breakpoints.down('md')]: {
    actionButton:{
      fontSize:'0.7em'
    }
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
    filter: {
   
      paddingRight: '0px'
    },
    sidebar:{
      marginRight: 0
    },
    dataElementContent:{
      paddingLeft: '0em',
      paddingTop: '1em'
 
    },
    tabDashboard:{
      flexDirection:'column'
    },
    actionButton:{
      width: '90vw',
      fontSize:'1em'
    },
    compareRow:{
      flexDirection:'column'
    },
    comparisonPanelTitle:{
      margin:0,
      padding:'30px',
      borderBottom:'2px solid #061233'
    },
    compareTitle:{
      display: 'none'
    }
    
  }
    
  
  
 
}));

