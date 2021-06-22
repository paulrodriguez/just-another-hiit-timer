import * as React from 'react';

import { Header } from './Header';

import { CountdownTimer } from 'countdown-timer';

export const App = (props) => (
  <>
    <Header />
    {props.children}
  </>
);
