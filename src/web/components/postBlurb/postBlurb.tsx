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

export const BlobBlurb: React.SFC<Props> = ({ metadata }) => (
  <div className={classnames(commonStyles["Block"])}>
    <h2>Blog post</h2>
    <p>
      {metadata.summary}
    </p>
  </div>
);

export default BlobBlurb;
