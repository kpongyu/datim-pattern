import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Welcome from './AppShell/Welcome';
import Basic from './AppShell/Basic';
import Codelist from './AppShell/Codelist';
import Sidebar from './Components/Sidebar';
import Inputs from './AppShell/Inputs';
import Indicator from './AppShell/Indicator';
import {StateProvider} from './ContextSetup';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import history from './history';



export default function App() {

  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const initialState = {
    title: 'Welcome to the OCL Metadata Browser',
    user: '',
    password: '',
    data_Elements:  [
      { name: 'CXCA_SCRN (N, DSD, Age/Sex/HIVStatus/ScreenResult/ScreenVisitType)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART screened for cervical cancer', 
        description: 'Number of HIV-positive women on ART screened for cervical cancer, Facilis hac ornare voluptatibus consequatur corporis, sollicitudin libero, netus quisquam eget sequi modi montes litora parturient at', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'XWK6yAwhol8', 
        
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'positive',
          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '15-19',
            visitType: 'followUp',
            visitResult: 'negative',

          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '20-24',
            visitType: 'rescreened',
            visitResult: 'suspected',

          }
      ]
      },

      { name: 'CXCA_SCRN (N, TA, Age/Sex/HIVStatus/ScreenResult/ScreenVisitType)', 
        source: 'DATIM',
        type: 'Target',
        fiscal: '2019', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART eligible for treatment',
        description: 'Voluptatum nisl nobis! Feugiat et facilisi vehicula quos. Doloribus exercitationem cursus diamlorem, suscipit cupidatat egestas, architecto', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'D8gXql7mhrZ', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },


      { name: 'CXCA_TX (N, DSD, Age/Sex/HIVStatus/TreatmentType/ScreenVisitType)', 
        source: 'DATIM',
        type: 'SIMS',
        fiscal: '2018',
        dataSet: 'community',
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART eligible for treatment ',
        description: 'Voluptatibus velit per, taciti senectus incidunt. Tellus donec commodi nunc, donec convallis', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'Z6qsl1ezjTS', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'CXCA_TX (N, TA, Age/Sex/HIVStatus/TreatmentType/ScreenVisitType)', 
        source: 'PDH',
        type: 'SIMS',
        fiscal: '2019',  
        dataSet: 'community',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Services Offered',
        description: 'Nec cubilia maiores, porro accumsan voluptatem proident reprehenderit quisquam! Tellus est rutrum, justo', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'mFvVvrRvZgo', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'EMR_SITE (N, NoApp, Service Delivery Area)', 
        source: 'MOH',
        type: 'Results',
        fiscal: '2020',
        dataSet: 'community',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Providing voluntary FPS',
        description: 'Feugiat inventore penatibus odio proin, facere sit culpa mi, mauris! Sem, morbi, optio vel cras fugit nesciunt tellus', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'Duf3Ks5vfNL', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'FPINT_SITE (N, NoApp, Serv Del Point)', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'community',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care',
        description: 'Ipsam dis adipiscing mauris, eleifend laboris distinctio natoque nostrum incididunt? Natoque, fusce', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'GT81rJIJrrd', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'GEND_GBV (N, DSD, Age/Sex/PEP)', 
        source: 'MOH',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care',
        description: 'Morbi minima blandit maecenas, pharetra corporis excepturi vel lacinia a. Class laborum, pretium ad', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'OZ9CHCMYJMS', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'GEND_GBV (N, TA, Age/Sex/PEP)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2018', 
        dataSet: 'community',
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care', 
        description: 'Fugiat sed tempora in itaque curae cursus ad, deleniti voluptatibus dictum sagittis quod corporis', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'pKH3YTAShEe', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'GEND_GBV (N, TA, Age/Sex/ViolenceType) v2', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2019', 
        dataSet: 'community',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Health Workers', 
        description: 'Semper repudiandae expedita et, hendrerit. Repellendus hendrerit! Maiores sagittis, condimentum mus mus quod', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'yoxGr2OW5vT', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'HRH_CURR (N, DSD, CadreCategory/FinancialSupport/Expenditure)', 
        source: 'PDH',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Number of contacts', 
        description: 'Officia quidem. Mollitia illum dolores pede sed ante tellus urna leo magnis deserunt molestiae', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'fpW7iq7zFNN', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'HTS_INDEX_FAC (N, DSD, Age Aggregated/Sex/Contacts)', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'community', 
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Number of contacts ', 
        description: 'Mollit similique sed sem enim, quaerat modi litora! Impedit volutpat! Consequatur lectus nonummy, orci quisquam', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'wJSHzXjl3ev', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },

      { name: 'HTS_RECENT (D, DSD, Age/Sex/HIVIndication)', 
        source: 'DATIM',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'HTS recently tested', 
        description: 'Facere eveniet, labore convallis anim numquam, adipiscing aliquip, odit labore quae incidunt eiusmod libero', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'fSXIwl6nGZV', 
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ]
      },
    
    ]
  };



  

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeUserPassword':
        return{
          ...state,
          user: action.newUser.user,
          password: action.newUser.password
        }
        
      default:
        return state;
    }
  };




  
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
      <div className={classes.root}>

      
     


      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
       <div className={classes.topBar}/>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
        </IconButton>
         
        <Header/>
        </Toolbar></AppBar>


      <Router history={history}>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>


              <Sidebar/>
      </Drawer>



      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />     
            <Switch>
            
              <Route exact path="/" component={Welcome} />
              <Route path="/basic" component={Basic} />
              <Route path="/codelist" component={Codelist} />
              <Route path="/inputs" component={Inputs} />
              <Route path="/indicator" component={Indicator} />
              <Route path="/codelist/indicator" component={Indicator} />
              <Route exact path="/2019/datim/v3/index.html" component={Welcome} />
            </Switch>
            </main>
          
         
       

        </Router>
      </div>
      <Footer></Footer>
       </StateProvider>
    );
  
}


const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '93vh'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:"#ffffff"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#0A314D'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  topBar:{
    width:'100%',
    backgroundColor: '#002134',
    height: '30px'
  }
}));