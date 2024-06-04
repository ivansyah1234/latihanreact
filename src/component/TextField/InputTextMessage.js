import * as React from 'react';
import TextField from '@mui/material/TextField';
import {  useThemeProps } from '@mui/material/styles';


export default function InputTextMessage(props) {
  return (
  <TextField 
  id={props.id} 
  label={props.label} 
  variant={props.variant} 
  fullWidth={props.fullWidth} 
  required={props.required}
  margin={props.margin}
  autoFokus={props.autoFokus}
  name={props.name}
  type={props.type}
  autoComplete={props.autoComplete} 
  />


);
  
}
