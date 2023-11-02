import { createSelector } from "reselect";

import { IAssetState } from "./reducer";
import { IState } from "../reducers";

export const getAsset = (state: IState): IAssetState => state?.assets;

export const getAssetItem = (state, assetId) =>
  createSelector(getAsset, (state) => state?.items?.[assetId]);

export const getAssetItemsLoading = createSelector(
  getAsset,
  (state) => state?.loading,
);

export const getAssetItemsErrors = createSelector(
  getAsset,
  (state) => state?.errors ?? undefined,
);
