import * as React from 'react';

import styles from './loadingSpinner.css';

export const Experiance: React.FC = () => (
  <div className={styles['Spinner']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Experiance;
