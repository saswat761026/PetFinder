import React from 'react';
import { Alert } from 'reactstrap';
import {createSelector} from 'reselect';
import { shallowEqual, useSelector } from "react-redux";

const CommonAlert = (props) =>{

    const makeAlertIsOpen = createSelector(
        (state, props) => props,
        (state) => state.alert,
        (props, alert) => {
          return alert;
        }
      ); 
    
      const isOpen = useSelector(
        (state) => makeAlertIsOpen(state),
        shallowEqual
      );  

const{color="primary",
toggle,
fade=true,
component,
className=null
 } = props

 return(<div>
<Alert toggle={toggle} color={color} isOpen={isOpen} className={className} fade={fade} >
<component/>
</Alert>
</div>);
}

export default CommonAlert