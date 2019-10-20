import React from 'react';

export const initialState = {
    title: 'Welcome to the OCL Metadata Browser',
    group: 'testing',
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
    ],
    indicators: [
      {
        name: 'CXCA_SCRN',
        group: 'prevention',
        frequency: 'semiAnnually',
        level: 'level1',
        target: 'target1',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'HTS_INDEX',
        group: 'prevention',
        frequency: 'semiAnnually',
        level: 'level2',
        target: 'target1',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'HTS_RECENT',
        group: 'testing',
        frequency: 'annually',
        level: 'level1',
        target: 'target2',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'HTS_SELF',
        group: 'treatment',
        frequency: 'monthly',
        level: 'level2',
        target: 'target1',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'HTS_TST',
        group: 'viral',
        frequency: 'semiAnnually',
        level: 'level3',
        target: 'target1',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'OVC_HIVSTAT',
        group: 'health-system',
        frequency: 'annually',
        level: 'level1',
        target: 'target3',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'PMTCT_EID',
        group: 'host-country',
        frequency: 'annually',
        level: 'level2',
        target: 'target2',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'PMTCT_FO',
        group: 'health-system',
        frequency: 'monthly',
        level: 'level3',
        target: 'target1',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'PMTCT_HEI_POS',
        group: 'testing',
        frequency: 'annually',
        level: 'level2',
        target: 'target3',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'PMTCT_STAT',
        group: 'prevention',
        frequency: 'monthly',
        level: 'level3',
        target: 'target2',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      },
      {
        name: 'TB_STAT',
        group: 'treatment',
        frequency: 'semiAnnually',
        level: 'level1',
        target: 'target3',
        description: 'Proportion of ART patients who completed a standard course of TB preventive therapy within the semiannual reporting period',
        numerators:[
          'Number of ART patients who completed a course of TB preventive therapy during the reporting period (for continuous IPT programs, this includes the patients who have completed the first 6 months of isoniazid preventive therapy (IPT))',
          'The numerator can be generated by counting the number of PLHIV on ART who are documented as having received at least six months of IPT or have completed another standard course of TB preventive therapy.'
        ],
        denominator:[
          'Number of ART patients who are expected to complete a course of TB preventive therapy during the reporting period (for programs using continuous IPT, this includes only the patients who are scheduled to complete the first 6 months of therapy)',
          'The denominator can be generated by counting the total number of patients who are scheduled to complete a course of TB preventive therapy (or at least 6 months of IPT for those who are on a prolonged or continuous regimen) in the semiannual reporting period.'
        ],
        indicatorChanges:[
          'Numerator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.',
          'Denominator disaggregates have been changed to capture Age/Sex by Type of TB preventive therapy (TPT) by ART Start.'
        ],
        reportingLevel: 'Facility',
        howToUse: 'This indicator measures the performance of HIV programs in scaling up TB preventive therapy, with the goal of preventing progression to active TB disease among PLHIV and decreasing ongoing TB transmission in this population. As part of a cascade from TX_CURR to TB screening (captured in TX_TB), this indicator will inform programs on the pace of scale-up, and the proportion will allow for monitoring of cohorts through completion of therapy. Disaggregates on type of therapy will inform programs on their relative use of different regimens, and the timing of ART will allow the clinical cascade to focus on those who are newly entering care, which will better demonstrate program performance, particularly in countries that have already provided TB preventive therapy for many of their PLHIV in care.'

      }
        
    ]

  };