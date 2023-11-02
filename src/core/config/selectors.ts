import { createSelector } from "reselect";
import { IConfigState } from "./reducer";
import { IState } from "../reducers";

export const getConfig = (state: IState): IConfigState => state?.config;

export const getCdn = createSelector(getConfig, (state) => state?.cdn);
