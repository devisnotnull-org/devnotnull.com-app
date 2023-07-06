import { readFile } from 'fs/promises';
import React, { FC, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

/**
 *
 */
interface StatePropTypes {
  initialState: string;
  splitPoints: string;
  rootComponent: ReactElement<any> | null;
  buildProd: boolean;
  config: any;
  runtimeProd: boolean;
  css?: string[]
}

/**
 *
 * @param param0
 */
const Html: FC<StatePropTypes> = ({
  initialState,
  rootComponent,
  buildProd,
  config,
  splitPoints,
  css
}) => {
  // Asset var is hydrate at runtime
  // Please note is is not set when running dev
  const assets = __ASSETS__ ?? {};

  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  const keys = Object.keys(assets);
  const js = keys.filter(
    a => a.includes('.js') && !a.includes('.map') && !a.includes('.json')
  );

  let srcJsFiles = js.map(key => (
    <script key={'js-scripts'} src={`${config.static?.path}${assets[key]}`} />
  ));

  // Nasty
  const devStatic = [
    <script
      key={'js-scripts-app'}
      src={`${config.static?.path}static/js/app.js`}
    />,
    <script
      key={'js-scripts-vendor'}
      src={`${config.static?.path}static/js/vendor.js`}
    />
  ];

  if (!buildProd) srcJsFiles = devStatic;
  
  return (
    <>
      <html {...htmlAttrs}>
        <head>
          <meta charSet="utf-8" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {css && css.map(css => {
            return <style>{css}</style>
          })}
        </head>
        <body {...bodyAttrs}>
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          <script dangerouslySetInnerHTML={{ __html: splitPoints }} />
          {buildProd && rootComponent ? (
            <div
              id="root"
              dangerouslySetInnerHTML={{
                __html: renderToString(rootComponent)
              }}
            />
          ) : (
            <div id="root" />
          )}
          <div id="modal-root" />
          {srcJsFiles}
        </body>
      </html>
    </>
  );
};

export default Html;
