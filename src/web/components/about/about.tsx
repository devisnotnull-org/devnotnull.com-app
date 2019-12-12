import * as React from "react";
import classnames from "classnames";

import * as commonStyles from "../../../style/common.css";
import { IMetadataPayload } from "../../../models/metadata";

interface StateProps {
  metadata: IMetadataPayload;
}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const About: React.SFC<Props> = ({ metadata }) => (
  <div className={classnames(commonStyles["Block"])}>
    <h2>About me</h2>
    <div>
      {metadata.summary}
    </div>
  </div>
);

export default About;
