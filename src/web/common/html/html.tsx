import React, { SFC, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
  
interface StatePropTypes {
    initialState: string;
    splitPoints: string;
    rootComponent: ReactElement | null;
    assets: {
        manifest: string;
        app: string;
        vendor: string;
    }
    PROD: boolean;
};
  
const Html: SFC<StatePropTypes> = ({ initialState, rootComponent, assets, PROD, splitPoints } ) => {

  const { manifest, app, vendor } = assets || {};

  return (
      <>
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>title</title>
            {PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
        </head>
        <body>
            <script dangerouslySetInnerHTML={{ __html: initialState }} />
            <script dangerouslySetInnerHTML={{ __html: splitPoints }} />
            {PROD
            ? <div id="root" dangerouslySetInnerHTML={{ __html: renderToString(rootComponent) }} />
            : <div id="root" />}
            {PROD && <script dangerouslySetInnerHTML={{ __html: manifest }} />}
            {PROD && <script src={vendor} />}
            <script src={PROD ? app : '/static/app.js'} />
        </body>
        </html>
    </>
  );
};

export default Html;