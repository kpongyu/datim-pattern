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
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';
import MaterialTable from 'material-table';
import { BrowserRouter, Route} from "react-router-dom";

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
    paddingLeft: '15px',
    paddingRight: '15px'
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
    }
  }
  
 
}));







export default function Codelist() {


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
  };

  const removeIndicator = e => {
    setValues({
      ...values,
      indicatorGroup: ''
    })
  };
  const removeSource = e => {
    setValues({
      ...values,
      source: ''
    })
  };
  const removeFiscal = e => {
    setValues({
      ...values,
      fiscal: ''
    })
  };

  
  
  


 
   
    
    return (
      <div>
    <div className={classes.heroContainer}>
    <div className={classes.container}>
     <Breadcrumb></Breadcrumb>
      <headings.H1>Codelist</headings.H1>

      <form className={classes.filterContainer} autoComplete="off">

      <Grid item xs={12} md={4} className={classes.filter} >
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="indicator">Indicator Group</InputLabel>
        <Select
          value={values.indicatorGroup}
          onChange={handleChange}
          inputProps={{
            name: 'indicatorGroup',
            id: 'indicator',
          }}
        >
          <MenuItem value={'group1'}>Group 1</MenuItem>
          <MenuItem value={'group2'}>Group 2</MenuItem>
          <MenuItem value={'group3'}>Group 3</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12} md={4} className={classes.filter} >
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="source">Source</InputLabel>
        <Select
          value={values.source}
          onChange={handleChange}
          inputProps={{
            name: 'source',
            id: 'source',
          }}
        >
          <MenuItem value={'source1'}>Source 1</MenuItem>
          <MenuItem value={'source2'}>Source 2</MenuItem>
          <MenuItem value={'source3'}>Source 3</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={12} md={4} className={classes.filter} >
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="fiscal">Fiscal Year</InputLabel>
        <Select
          value={values.fiscal}
          onChange={handleChange}
          inputProps={{
            name: 'fiscal',
            id: 'fiscal',
          }}
        >
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2019'}>2019</MenuItem>
          <MenuItem value={'2018'}>2018</MenuItem>
        </Select>
      </FormControl>
      </Grid>


      </form>
      </div>
    </div>
     <div className={classes.container}>
     <div className={classes.filterContainer}>
     <span className={values.indicatorGroup == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.indicatorGroup} 
     onClick={removeIndicator} />
     </span>
     <span className={classes.chipContainer, values.source == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.source} 
     onClick={removeSource}
     />
     </span>
     <span className={classes.chipContainer, values.fiscal == '' ? classes.hide : classes.chipContainer}>
     <Chip 
     label={values.fiscal} 
     onClick={removeFiscal}
     />
     </span>
    </div>


    <div className={classes.root}>
    <Route render={({ history}) => (
    <MaterialTable
        title=""
        columns={[
          { title: 'Name', field: 'name', defaultFilter: '', filtering: false },
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



      </div>
     </div>
    );
  
}

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorCube= styled.div`
    width: 100px;
    height: 70px;
    background-color: ${props => props.background};
    color: ${props => props.color}
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
`;

const FlexGrid = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`;
const FlexGridFourthCol = styled.p`
    width: 25%;

    @media (max-width: 768px){
      width: 50%;
    }
`;
