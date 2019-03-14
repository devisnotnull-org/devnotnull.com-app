import * as React from 'react';
import classnames from 'classnames';

import * as styles from './folio.css'
import * as commonStyles from '../../style/common.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Folio: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Folio</h2>
        <div className={classnames(styles['Folio'])}>
            <section className={classnames(styles['Folio--Image'])}>
                <img src="http://media.fandanzle.co.uk/diy.png" />
            </section>
        </div>
        <div className={classnames(styles['Folio'])}>
            <section className={classnames(styles['Folio--Image'])}>
                <img src="http://media.fandanzle.co.uk/secdata.png" />
            </section>
        </div>
    </div>    
);

export default Folio;
