import * as React from "react";
import classnames from "classnames";

import * as styles from "./profile.css";
import * as commonStyles from "../../style/common.css";

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps;

export const Profile: React.SFC<Props> = () => (
  <div className={classnames(styles["Header"], commonStyles["Block"])}>
      <div className={classnames(styles["Header--Photo"])}>
        <img src="//media.fandanzle.co.uk/avatar.png" alt="avatar" />
      </div>
      <div className={classnames(styles["Text--Header"])}>
        <h1>Alex brown Portfolio</h1>
        <div className={classnames(styles["Description"])}>
          A Developer with a passion for web development, security, networking and microservices.
        </div>
      </div>
  </div>
);

export default Profile;
