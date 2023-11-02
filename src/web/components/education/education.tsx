import React, { FC } from "react";
import moment from "moment";

import { IEducationPayload } from "../../../models/education";
import { ICommonFields } from "../../../models/common";

interface IStateProps {
  educationList: ICommonFields<IEducationPayload>[];
}

type Props = IStateProps;

export const Education: FC<Props> = ({ educationList }) => (
  <div className="mb-2">
    <h1 className="text-2xl py-3.5 my-2 text-center">Education</h1>
    {educationList.map(
      (item: ICommonFields<IEducationPayload>, index: number) => (
        <div
          key={index}
          className="rounded-2xl ring-1 ring-inset ring-gray-900/10 p-5 mb-2"
        >
          <h3 className="font-bold mr-1.5 mb-1.5 text-lg">
            {item.fields.institute}
          </h3>
          <h3 className="font-bold italic mr-1.5 mb-1.5 text-lg">
            {item.fields.subject}
          </h3>
          <h3 className="font-bold mr-1.5 mb-1.5 text-lg font-grey-500">
            <span>
              {moment(item.fields.startDate).format("MMM")}{" "}
              {moment(item.fields.startDate).format("YYYY")}
            </span>
            <span> - </span>
            <span>
              {moment(item.fields.endDate).format("MMM")}{" "}
              {moment(item.fields.endDate).format("YYYY")}
            </span>
          </h3>
          <div>
            {item.fields.qualifications.map((qualification) => (
              <p>{qualification}</p>
            ))}
          </div>
        </div>
      ),
    )}
  </div>
);

export default Education;
