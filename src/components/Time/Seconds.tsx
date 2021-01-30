import * as React from 'react';
import {FormControl} from 'react-bootstrap';

export const Seconds = (props:any)=> (
  <FormControl type="number" min="0" max="59"
  aria-label={props.label} value={props.value}
    name={props.name} placeholder={props.placeholder}
    onChange={props.onChange} aria-describedby="inputGroup-sizing-sm" />
)
