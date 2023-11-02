import { createSelector } from "reselect";

import { IMetadataState } from "./reducer";
import { IState } from "../reducers";

export const getMetadata = (state: IState): IMetadataState => state?.metadata;

export const getMetadataTitle = createSelector(
  getMetadata,
  (state) => state?.title,
);

export const getMetadataBlurb = createSelector(
  getMetadata,
  (state) => state?.blurb,
);

export const getMetadataSummary = createSelector(
  getMetadata,
  (state) => state?.summary,
);

export const getMetadataItemLoading = createSelector(
  getMetadata,
  (state) => state?.loading,
);

export const getMetadataItemErrors = createSelector(
  getMetadata,
  (state) => state?.errors ?? undefined,
);
