import * as React from 'react';

import {
  NavLink
} from "react-router-dom";

export const Header = (props: any) => (
  <header className={'header'}>
  <h1 className={"title"}>Just Another HIIT Timer</h1>
  <nav className={'nav'}>
    <ul className={"menu"}>
      <li className={"item"}><NavLink className={"link"} to="/user-guide">Guide</NavLink></li>
      <li className={"item"}><NavLink className={"link"} to="/">Workouts</NavLink></li>
    </ul>
  </nav>
  </header>
);
