import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={ styles.Root }>
      <ul className={ styles.List }>
        <li className={ styles.ListItem }>
          <Link to={ '/costing-requests' }>Costing Requests</Link>
        </li>

        <li className={ styles.ListItem }>
          <Link to={ '/costing-requests/new' }>New Costing Request</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
