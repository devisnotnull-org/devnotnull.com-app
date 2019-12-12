import { SFC, Component } from 'react';

interface StateProps {
    cssLinks: string[];
    js: string[];
    state: Object;
    title: string;
}

type HtmlProps = StateProps

export const Html: SFC<HtmlProps> = ({ title }) => (
    <html>
        <head>
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>{title}</title>
        </head>
        <title></title>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        </body>
    </html>
);

export default Html;
