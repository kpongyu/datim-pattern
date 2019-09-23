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
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

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
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  chipContainer: {
    marginRight: '10px'
  },
  formControl:{
    width: '90%'
  },
  filterContainer: {
    display: 'flex',
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

  function createData(name, description, uid, fiscal, indicatorGroup, source) {
    return { name, description, uid, fiscal, indicatorGroup, source };
  }
  const rows = [
    createData('Codelist1', 'abc', 12345, '2020', 'group1', 'source1'),
    createData('Codelist2', 'cde', 14564, '2019', 'group2', 'source3'),
    createData('Codelist3', 'xyz', 27689, '2018', 'group3', 'source1'),
    createData('Codelist4', 'wze', 87313, '2019', 'group2', 'source2'),
    createData('Codelist5', 'mze', 73978, '2020', 'group3', 'source1'),
  ];

  


 
   
    
    return (
      <div>
    <div className={classes.heroContainer}>
    <div className={classes.container}>
     <Breadcrumb></Breadcrumb>
      <headings.H1>Codelist</headings.H1>

      <form className={classes.filterContainer} autoComplete="off">

      <Grid item xs={12} md={4} classname={classes.filter} >
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

    <Grid item xs={12} md={4} classname={classes.filter} >
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

      <Grid item xs={12} md={4} classname={classes.filter} >
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

     <Paper className={classes.root}>
     <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">UID</TableCell>
            <TableCell align="right">Fiscal</TableCell>
            <TableCell align="right">Indicator Group</TableCell>
            <TableCell align="right">Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.button}>
                {row.name}
              </NavLink>
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.uid}</TableCell>
              <TableCell align="right">{row.fiscal}</TableCell>
              <TableCell align="right">{row.indicatorGroup}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

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
