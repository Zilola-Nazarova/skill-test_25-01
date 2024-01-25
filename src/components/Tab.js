import React, { useState } from "react";
import styles from '../styles/Climb.module.scss';

const Tab = ({ label, onClick, isActive }) => (
    <li
      className={isActive ? styles.active : ""}
      onClick={onClick}
      style={{order: (label * 2)}}
    >
      <span>
        Mountain
        {' '}
        {label + 1}
      </span>
    </li>
);
 
export default Tab;
