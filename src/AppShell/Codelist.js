import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';

import Breadcrumb from '../Components/Breadcrumb';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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

export default function Codelist() {
  const [{ data_Elements }, dispatch] = useStateValue();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    fiscal: [],
    source: [],
    type: [], 
    dataSet: [],
    frequency: []
  });

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
            console.log(keyName);
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
  
        
  
  
          console.log(data_Element);
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
  
        
  
  
          console.log(data_Element);
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
  
        
  
  
          console.log(data_Element);
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
  
        
  
  
          console.log(data_Element);
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
  
        
  
  
          console.log(data_Element);
          filteredDataElements.push(data_Element);
        }
  
  
        }
        );
    }
    
    
    
    setDataElements(filteredDataElements);
  }


  

  const [dataElements, setDataElements] = React.useState(data_Elements);
  
  const [search, setSearch] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const downloadData = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
  const { HTML, JSON, CSV } = download;



    
    return (
      <div>
    <div className={classes.heroContainer}>
    <div className={classes.container}>
     <Breadcrumb></Breadcrumb>

     <Grid container alignItems="center" >
     <Grid item xs={12} md={7} >
      <headings.H1>Code lists</headings.H1>
      </Grid>


      <Grid item xs={12} md={5} justifyContent="flex-end" >
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
     
     
    

     <form className={classes.filterContainer} autoComplete="off">


     <Grid item xs={12} md={4} className={classes.filter} >
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






     <Grid item xs={12} md={4} className={classes.filter} >
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




<Grid item xs={12} md={4} className={classes.filter} >
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





<Grid item xs={12} md={4} className={classes.filter} >
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



<Grid item xs={12} md={4} className={classes.filter} >
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



</form>


<Button variant="outlined" onClick={clearValues} className={classes.filterButton}>
       Clear Filters
</Button>
<Button variant="outlined" className={classes.filterButton} onClick={downloadData}>
      Download Data
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
            Download Data
          </Button>
        </FormGroup>
      </FormControl>


      </Popover>


    {dataElements.map(dataElement => (
      <ExpansionPanel>
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
       <strong>Reporting Frequency</strong>: {dataElement.reportFrequency} <br/>
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
      <TablePagination
        component="ExpansionPanel"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />




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
  filter: {
   
    paddingRight: '20px'
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
  },
  
  
 
}));

