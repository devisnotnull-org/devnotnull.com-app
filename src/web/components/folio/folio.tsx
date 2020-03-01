
import * as React from 'react';
import classnames from 'classnames';

import * as styles from './folio.css'
import * as commonStyles from '../../../style/common.css';
import { IFolioPayload } from '../../../models/folio';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Folio: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Portfolio</h2>
    </div>    
);

export default Folio;