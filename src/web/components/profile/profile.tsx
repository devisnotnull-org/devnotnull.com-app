


import * as React from "react";
import classnames from "classnames";

import { Link } from "../../common/link/link"
import * as styles from "./profile.css";
import * as commonStyles from "../../../style/common.css";
import { IMetadataPayload } from "../../../models/metadata";

interface StateProps {
  metadata: IMetadataPayload;
}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const Profile: React.SFC<Props> = ({ metadata }) => (
  <div className={classnames(styles["Header"])}>
      <div className={classnames(styles["Header--Photo"], styles['Link--left'])}>
        <a href="/">
          <img src="//media.fandanzle.co.uk/avatar.png" alt="avatar" />
        </a>
      </div>

      <span className={classnames(styles['Link'], styles['Link--left'], styles['Link--active'])}><Link to={'/'}>Home</Link></span>
      <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/blog'}>Blog</Link></span>
      <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/porfolilo'}>Portfolio</Link></span>
      <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/projects'}>Projects</Link></span>
      <div className={styles['Clear']} />
  </div>
);

export default Profile;
