import React, { FC } from 'react';
import classnames from 'classnames';

import commonStyles from '../../style/common.css';

export const Folio: FC = () => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>Portfolio</h2>
  </div>
);

export default Folio;
