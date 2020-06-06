import * as React from "react";
import classnames from "classnames";

import { Link } from "../../common/link/link"
import * as styles from "./profile.css";
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
        <Link to={'/'}>
          <img src="//media.fandanzle.co.uk/avatar.png" alt="avatar" />
        </Link>
      </div>

      <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/'}>Home</Link></span>
      <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/blog'}>Blog</Link></span>
      <div className={styles['Clear']} />
  </div>
);

export default Profile;
