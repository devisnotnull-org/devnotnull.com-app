import React, { SFC, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
  
interface StatePropTypes {
    initialState: string;
    splitPoints: string;
    rootComponent: ReactElement<any> | null;
    assets: {
        [key: string]: string;
    }
    PROD: boolean;
};
  
const Html: SFC<StatePropTypes> = ({ initialState, rootComponent, assets, PROD, splitPoints } ) => {

    const keys = Object.keys(assets);
    const js = keys.filter((a) => a.includes('.js') && !a.includes('.map') && !a.includes('.json') );
    const css = keys.filter((a) => a.includes('.css') && !a.includes('.map') );

    const srcJsFiles = js.map(key => <script src={assets[key]} />);
    const srcCssFiles = css.map(key => <link rel="stylesheet" href={assets[key]} type="text/css" />);
    
    return (
        <>
            <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>title</title>
                {srcCssFiles}
            </head>
            <body>
                <script dangerouslySetInnerHTML={{ __html: initialState }} />
                <script dangerouslySetInnerHTML={{ __html: splitPoints }} />
                {PROD
                ? <div id="root" dangerouslySetInnerHTML={{ __html: renderToString(rootComponent) }} />
                : <div id="root" />}
                {srcJsFiles}
            </body>
            </html>
        </>
    );
    };

export default Html;