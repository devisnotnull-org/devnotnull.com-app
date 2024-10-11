import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

interface StateProps {
  rootComponent: ReactElement<any> | null;
  buildProd: boolean;
  config: any;
  runtimeProd: boolean;
  css?: string[];
}

const Html = ({
  rootComponent,
  buildProd,
  config,
  css,
}: StateProps): JSX.Element => {
  // Asset var is hydrate at runtime
  // Please note is is not set when running dev
  const assets = __ASSETS__ ?? {};

  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  const keys = Object.keys(assets);
  const js = keys.filter(
    (a) => a.includes('.js') && !a.includes('.map') && !a.includes('.json')
  );

  const cssImport = keys.filter((a) => a.includes('.css'))?.[0];

  let srcJsFiles = js.map((key) => (
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
    />,
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
          {css &&
            css.map((css) => {
              return <style>{css}</style>;
            })}
          {cssImport && (
            <link
              rel="stylesheet"
              href={`${config.static?.path}${assets[cssImport]}`}
            ></link>
          )}
        </head>
        <body {...bodyAttrs} className="bg-zinc-50">
          {buildProd && rootComponent ? (
            <div
              id="root"
              dangerouslySetInnerHTML={{
                __html: renderToString(rootComponent),
              }}
            />
          ) : (
            <div id="root" />
          )}
          {srcJsFiles}
        </body>
      </html>
    </>
  );
};

export default Html;
