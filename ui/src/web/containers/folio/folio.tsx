import React, { Component, Fragment, FC, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  IFolioComponentProps,
  mapDispatchToProps,
  mapStateToProps
} from './folio.state';

import blogStyles from './folio.css';
import { IAssetPayload } from 'models/asset';

export type IProps = {
  to: string;
};

export const blockType = (content: any, marks?: []) => {
  const codeMark = marks && marks.find((dd: any) => dd?.type === 'code');
  const codeBold = marks && marks.find((dd: any) => dd?.type === 'bold');
  if (!content) return <Fragment></Fragment>;
  if (codeMark)
    return <pre className={blogStyles['Block--Code']}>{content}</pre>;
  if (codeBold) return <b>{content}</b>;
  return <span>{content}</span>;
};

const findAsset = (assets: IAssetPayload[], id: string) =>
  assets.find((item) => item.sys.id === id);

export const BlogView: FC<IFolioComponentProps> = ({ onFetchAction, folio, assets }) => {
  useEffect(() => {
    onFetchAction();
  }, []);

  return (
    <div className={blogStyles.InnerContainer}>
      {folio?.map((item) => {
        return (
          <div className={blogStyles['Entry--Container']}>
            <div>{item?.fields?.title}</div>
            <img
              className={blogStyles['Entry--Primary-image']}
              src={
                findAsset(assets, item?.fields?.primaryMediaItem?.sys?.id)
                  ?.fields?.file?.url
              }
            />
            {item?.fields?.secondaryMediaItems &&
              item?.fields?.secondaryMediaItems?.map((item) => (
                <img
                  className={blogStyles['Entry--Secondary-image']}
                  src={findAsset(assets, item.sys?.id)?.fields?.file?.url}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogView);
