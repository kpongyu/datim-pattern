import React from 'react';

export const initialState = {
    title: 'Welcome to the OCL Metadata Browser',
    group: 'testing',
    user: '',
    password: '',
    data_Elements:  [
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/ScreenVisitType)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'quarterly',
        indicator:'VMMC_CIRC',
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
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/)', 
      source: 'DATIM',
      type: 'Results',
      fiscal: '2020', 
      dataSet: 'facility',
      frequency: 'quarterly',
      indicator:'VMMC_CIRC',
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
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/fs)', 
    source: 'DATIM',
    type: 'Results',
    fiscal: '2020', 
    dataSet: 'facility',
    frequency: 'quarterly',
    indicator:'VMMC_CIRC',
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
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/dfas)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'quarterly',
        indicator:'VMMC_CIRC',
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
    ],
    indicators: [
      {
        name: 'VMMC_CIRC',
        frequency: 'Quarterly',
        level: 'Facility',
        target: 'target1',
        group: 'prevention',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }

      },


      {
        name: 'HTS_INDEX',
        frequency: 'Semi-Annually',
        level: 'Facility',
        target: 'target1',
        group: 'prevention',

        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'HTS_RECENT',
        frequency: 'Annually',
        level: 'Facility',
        target: 'target2',
        group: 'testing',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'HTS_SELF',
        frequency: 'Monthly',
        level: 'Community',
        target: 'target1',
        group: 'treatment',

        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'HTS_TST',
        frequency: 'Quarterly',
        level: 'Facility & Community',
        target: 'target1',
        group: 'viral',

        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'OVC_HIVSTAT',
        frequency: 'Annually',
        level: 'Facility',
        target: 'target3',
        group: 'health-system',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_EID',
        frequency: 'Annually',
        level: 'Community',
        target: 'target2',
        group: 'host-country',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_FO',
        frequency: 'Monthly',
        level: 'Facility & Community',
        target: 'target1',
        group: 'health-system',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_HEI_POS',
        frequency: 'Semi-Annually',
        level: 'Community',
        target: 'target3',
        group: 'testing',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_STAT',
        frequency: 'Semi-Annually',
        level: 'Facility',
        target: 'target2',
        group: 'prevention',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'TB_STAT',
        frequency: 'Quarterly',
        level: 'Facility',
        target: 'target3',
        group: 'treatment',



        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:'N/A',
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      }
        
    ]

  };