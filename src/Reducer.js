
import React from 'react';

export const reducer = (state, action) => {
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