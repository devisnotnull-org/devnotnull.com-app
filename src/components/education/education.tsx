import * as React from "react";
import classnames from "classnames";

import * as commonStyles from "../../style/common.css";
import * as styles from "./education.css";
import { IEducationPayload } from "../../common/model/education";
import { educationPayload } from "../../common/data";

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const Education: React.SFC<Props> = () => (
  <div className={classnames(commonStyles["Block"])}>
    <h2>Education</h2>
    {educationPayload.map((item: IEducationPayload) => (
      <div className={styles["Education"]}>
        <div className={styles["Education--Year"]}>{item.year}</div>
        <div className={styles["Education--Description"]}>
          <h3>{item.institute}</h3>
          <h4>{item.subject}</h4>
          {item.description.map(descriptiveItem => (
            <p>{descriptiveItem}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Education;
