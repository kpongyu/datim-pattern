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
  const [{ data_Elements }, dispatch] = useStateValue();


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

//implement comparison checkbox
const handleCompareCheckbox = name => event => {
  event.stopPropagation();
  console.log([name]);

};

  
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



//set download data popup
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

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setComparePanel({ ...comparePanel, [side]: open });
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
<Button variant="outlined" className={classes.actionButton} onClick={downloadData}>
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


<Button variant="outlined" className={classes.actionButton} onClick={toggleDrawer('bottom', true)}>Comparison</Button>
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
            onClick={handleCompareCheckbox(dataElement.name)}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox />}
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
      <CloseIcon onClick={toggleDrawer('bottom', false)} className={classes.closeComparePanel}>add_circle</CloseIcon>
      <p>Quam, tempora minus error doloremque? Turpis impedit aliquet, dolorem facere, quod quas! Illo taciti netus excepturi! Sociis faucibus, ipsum quasi, auctor, enim! Rerum nostrud? Rutrum elit, ornare? Proident fringilla urna, perferendis sint? Harum risus aliquet inceptos eveniet luctus? Sed? Explicabo tempor quae, quo porttitor nunc quaerat. Suspendisse hic, necessitatibus commodi etiam excepturi debitis morbi officia laudantium, minus feugiat irure accumsan? Dis purus ad iaculis, cupidatat? Reiciendis convallis justo tenetur! Varius eleifend quibusdam, sunt maecenas modi praesent! Quam urna reiciendis litora. Repellat reprehenderit impedit quidem laudantium, nulla harum adipisicing sequi eros? In, praesentium delectus risus corrupti netus. Hic! Facere, libero lectus.</p>
      <p>Molestie veritatis aspernatur, repudiandae litora ullamcorper torquent autem accusamus deserunt laborum congue dolore tincidunt, tincidunt irure minim inceptos expedita nulla magnam praesentium maecenas diamlorem, nam sagittis, nascetur? Saepe, laborum aliquam aute maxime? Ea, officia molestie reprehenderit, assumenda luctus explicabo. Tempora cillum metus varius, fermentum, ac rhoncus quisque cumque elementum blandit exercitationem lacus eum semper? Hendrerit varius odio hendrerit phasellus excepteur illo accusantium quod, pharetra nemo, consequat. Lacinia incididunt, cursus lacinia placerat ex, tincidunt risus primis curabitur morbi optio. Anim a expedita voluptate scelerisque soluta enim per nostrum facilis. Maecenas dolores quam mollitia in auctor consequatur natoque, ut mollitia commodi unde.</p>
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
    borderBottom: '1px solid #C1A783',
    wordBreak: 'break-word'
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
     paddingLeft: '1em'

   },
   closeComparePanel:{
    float:'right',
    margin: '1em',
    cursor:'pointer'
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
    height:'80vh'
  },
  dataElementContainer:{
  },
  tabDashboard:{
    width: '100%',
    display:'flex',
    justifyContent: 'flex-end'
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
 
    }
  }
    
  
  
 
}));

