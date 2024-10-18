import { AssetSchemaType } from '@models/asset';

export const isServerRender = typeof window === 'undefined';
export const isProduction = process.env.NODE_ENV === 'production';

export const findAsset = (asset: string, assets: AssetSchemaType[]) =>
  assets.find((item) => item.sys.id === asset);

export const dateCaculator = (
  date: Date
): { unit: number; unitType: string } => {
  const dateUpdated = date;
  const dateDiff = new Date().getTime() - dateUpdated.getTime();

  const days = Math.floor(dateDiff / (1000 * 3600 * 24));

  if (days > 365) {
    const years = Math.floor(days / 365);
    return { unit: years, unitType: years > 1 ? 'years' : 'year' };
  }
  if (days > 30) {
    const months = Math.floor(days / 30);
    return { unit: months, unitType: months > 1 ? 'months' : 'month' };
  }
  if (days > 7) {
    const weeks = Math.floor(days / 7);
    return { unit: weeks, unitType: weeks > 1 ? 'week' : 'weeks' };
  }
  return { unit: days === 0 ? 1 : days, unitType: days > 1 ? 'days' : 'day' };
};
