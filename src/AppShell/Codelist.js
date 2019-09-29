import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';
import styled from 'styled-components';
import Breadcrumb from '../Components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSortDown, faUser, faDownload, faBars,
        faFileExport, faQuestionCircle, faMapMarkerAlt,
        faCog, faExchangeAlt, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MaterialTable from 'material-table';
import { BrowserRouter, Route} from "react-router-dom";
import {useStateValue} from '../ContextSetup';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';


  



export default function Codelist() {
  const [{ data_Elements }, dispatch] = useStateValue();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    indicatorGroup: '',
    source: '',
    fiscal: ''
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    //dataElement is the current state of the filtered data, use dataElement not data_Element
    const filteredDataElements = dataElements.filter(dataElement => {
      console.log(values.indicatorGroup);
      return (
        
        Object.values(dataElement).indexOf(event.target.value)>-1
      )
      }
      );
    setDataElements(filteredDataElements);
    
  };

  const removeIndicator = e => {
    setValues({
      ...values,
      indicatorGroup: ''
    })
    console.log(values.source);
    const filteredDataElements = data_Elements.filter(
      i => (i.indicator !== e.target.value && 
        (values.source == '' ? true: i.source === values.source) &&
        (values.fiscal == '' ? true : i.fiscal === values.fiscal)
        
        )
      );
    setDataElements(filteredDataElements);
  };


  const removeSource = e => {
    setValues({
      ...values,
      source: ''
    })
    const filteredDataElements = data_Elements.filter(
      i => (i.source !== e.target.value && 
        (values.indicatorGroup =='' ? true : i.indicator === values.indicatorGroup) &&
        (values.fiscal == '' ? true : i.fiscal === values.fiscal)
      
        )
      );
    setDataElements(filteredDataElements);
    
  };
  const removeFiscal = e => {
    setValues({
      ...values,
      fiscal: ''
    })
    const filteredDataElements = data_Elements.filter(
      i => (i.fiscal !== e.target.value && 
        (values.indicatorGroup =='' ? true : i.indicator === values.indicatorGroup) &&
        (values.source == '' ? true : i.source === values.source)
      
        )

      );
    setDataElements(filteredDataElements);
    
  };

  const [dataElements, setDataElements] = React.useState(data_Elements);
  
  const [search, setSearch] = React.useState("");

    
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
  <InputLabel htmlFor="fiscal">Fiscal Year</InputLabel>
  <Select
    value={values.fiscal}
    onChange={handleChange}
    className = {classes.select}
    inputProps={{
      name: 'fiscal',
      id: 'fiscal',
      classes: {
        icon: classes.selectIcon
      }
    }}
  >
    <MenuItem value={'2020'}>2020</MenuItem>
    <MenuItem value={'2019'}>2019</MenuItem>
    <MenuItem value={'2018'}>2018</MenuItem>
  </Select>
</FormControl>
</Grid>


<Grid item xs={12} md={4} className={classes.filter} >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="source">Results</InputLabel>
  <Select
    value={values.source}
    onChange={handleChange}
    className = {classes.select}
    inputProps={{
      name: 'source',
      id: 'source',
      classes: {
        icon: classes.selectIcon
      }
    }}
  >
    <MenuItem value={'source1'}>Result 1</MenuItem>
    <MenuItem value={'source2'}>Result 2</MenuItem>
    <MenuItem value={'source3'}>Result 3</MenuItem>
  </Select>
</FormControl>
</Grid>

<Grid item xs={12} md={4} className={classes.filter} >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="indicator">Facility Based Code List</InputLabel>
  <Select
    value={values.indicatorGroup}
    onChange={handleChange}
    className = {classes.select}
    inputProps={{
      name: 'indicatorGroup',
      id: 'indicator',
      classes: {
        icon: classes.selectIcon
      }
    }}
  >
    <MenuItem value={'group1'}>Group 1</MenuItem>
    <MenuItem value={'group2'}>Group 2</MenuItem>
    <MenuItem value={'group3'}>Group 3</MenuItem>
  </Select>
</FormControl>
</Grid>






</form>








     <div className={classes.filterContainer}>
     <span className={classes.chipContainer, values.fiscal == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.fiscal} 
     onClick={removeFiscal}
     />
     </span>

     <span className={classes.chipContainer, values.source == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.source} 
     onClick={removeSource}
     />
     </span>
     
     <span className={values.indicatorGroup == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.indicatorGroup} 
     onClick={removeIndicator} />
     </span>
   
     
    </div>

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
          <strong>Description</strong>: {dataElement.description}<br/>
          <strong>Short Name</strong>: {dataElement.shortName}<br/>
          <strong>Code</strong>: {dataElement.code}
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
        title="Category Combo Options"
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
        component="nav"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />

{/*

    <div className={classes.root}>
    <Route render={({ history}) => (
    <MaterialTable
        title=""
        columns={[
          { title: 'Name', field: 'name', defaultFilter: '', filtering: false, cellStyle: {maxWidth: '30%'} },
          { title: 'Description', field: 'description', filtering: false},
          { title: 'UID', field: 'uid', type: 'numeric', filtering: false },
          { title: 'Fiscal Year', field: 'fiscal', type: 'numeric', defaultFilter: values.fiscal, filtering: false},
          { title: 'Indicator Group', field: 'indicator', defaultFilter: values.indicatorGroup, filtering: false},
          { title: 'Source', field: 'source', defaultFilter: values.source, filtering: false},
        ]}
        data={[
          { name: 'Codelist1', description: 'abc', uid: 12345, fiscal: 2020, indicator: 'group1', source: 'source1'  },
          { name: 'Codelist2', description: 'cde', uid: 14564, fiscal: 2019, indicator: 'group2', source: 'source3' },
          { name: 'Codelist3', description: 'xyz', uid: 27689, fiscal: 2018, indicator: 'group3', source: 'source1' },
          { name: 'Codelist4', description: 'wze', uid: 87313, fiscal: 2019, indicator: 'group2', source: 'source2' },
          { name: 'Codelist5', description: 'mze', uid: 73978, fiscal: 2020, indicator: 'group3', source: 'source1' },
        ]}        
        options={{
          filtering: true
        }}
        onRowClick={()=>{history.push('/indicator')}}
      />
      )} />
      </div>

      */}



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
  
  [theme.breakpoints.down('xs')]: {
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
    }
  }
  
 
}));

