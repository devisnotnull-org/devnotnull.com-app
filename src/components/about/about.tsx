import * as React from "react";
import classnames from "classnames";

import { aboutPayload } from "../../common/data";

import * as commonStyles from "../../style/common.css";

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const About: React.SFC<Props> = () => (
  <div className={classnames(commonStyles["Block"])}>
    <h2>About me</h2>
    <div>
      {aboutPayload.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  </div>
);

export default About;
