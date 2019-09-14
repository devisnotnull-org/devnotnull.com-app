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
        <h2>Portfolio</h2>
        {folioPayload.map((item) => (
            <div className={classnames(styles['Folio'])}>
                <section className={classnames(styles['Folio--Image'])}>
                    <div className={classnames(styles['Folio--Overlay'])}>
                        <div className={classnames(styles['Folio--Overlay--Header'])}>// {item.title}</div>
                    </div>
                    <img src={item.image} />
                </section>
            </div>
        ))}
    </div>    
);

export default Folio;
