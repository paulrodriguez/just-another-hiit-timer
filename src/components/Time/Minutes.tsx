import * as React from 'react';
import {FormControl} from 'react-bootstrap';

export const Minutes = (props:any)=> (
  <FormControl type="number" min="0"
  aria-label={props.label} value={props.value}
    name={props.name} placeholder={props.placeholder}
    onChange={props.onChange} aria-describedby="inputGroup-sizing-sm" />
)
