import React, { FC } from "react";
import { format } from "date-fns";

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
              {format(new Date(item.fields.startDate), "MM")}
              {format(new Date(item.fields.startDate), "yyyy")}
            </span>
            <span> - </span>
            <span>
              {format(new Date(item.fields.endDate), "MM")}
              {format(new Date(item.fields.endDate), "yyyy")}
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
