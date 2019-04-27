import * as React from 'react';
import classnames from 'classnames';

import * as styles from './folio.css'
import * as commonStyles from '../../style/common.css';
import { folioPayload } from '../../common/data';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Folio: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <div>Portfolio</div>
        {folioPayload.map((item) => (
            <div className={classnames(styles['Folio'])}>
                <section className={classnames(styles['Folio--Image'])}>
                    <img src={item.image} />
                    <h3>{item.title}</h3>
                </section>
            </div>
        ))}
    </div>    
);

export default Folio;
