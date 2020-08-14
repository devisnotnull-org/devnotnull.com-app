import { IAssetPayload } from './models/asset'

export const isServerRender = (typeof window === 'undefined');
export const isProduction = process.env.NODE_ENV === 'production';

export const findAsset = (asset: string, assets: IAssetPayload[]) => assets.find(item => item.sys.id === asset);