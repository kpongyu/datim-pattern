
import React from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
      case 'changeUserPassword':
        return{
          ...state,
          user: action.newUser.user,
          password: action.newUser.password
        }
      
      case 'changeIndicatorName':
          return {
            ...state,
           indicatorName: action.newIndicatorName
          }
      
      case 'changeCurrentIndicator':
          return {
          ...state,
          currentIndicator: action.newCurrentIndicator
            }
      
      case 'changeMatchDataElements':
          return {
          ...state,
          matchDataElements: action.newMatchDataElements
            }
      
      case 'resetIndicator':
          return {
          ...state,
          indicatorName: ''
            }
        
      default:
        return state;
    }
  };