import { isServerRender } from '../utils';

const CssKeyToJsKey = (key: string) =>
  key.replace('--', '').replace(/-./g, x => x.toUpperCase()[1]);

const getAllCSSVariableNames = (styleSheets?: StyleSheetList) => {
  const cssVars: string[] = [];
  if (isServerRender) return [];
  styleSheets = document?.styleSheets;

  Array.from(styleSheets).forEach(styleSheet => {
    Array.from(styleSheet.cssRules).forEach(rule => {
      if (!rule || !rule['style']) {
        return;
      }

      Array.from(rule['style']).forEach((style: string) => {
        if (style.startsWith('--') && cssVars.indexOf(style) == -1) {
          cssVars.push(style);
        }
      });
    });
  });

  return cssVars;
};

const getElementCSSVariables = (
  allCSSVars: Array<string>,
  element: HTMLElement = document?.body,
  pseudo: string | undefined = ''
) => {
  const elStyles = window.getComputedStyle(element, pseudo);
  const cssVars = {};

  allCSSVars.forEach(key => {
    const value = elStyles.getPropertyValue(key);

    if (value) {
      cssVars[CssKeyToJsKey(key)] = value;
    }
  });

  return cssVars;
};

export const getAllCSSVariables = (): Record<string, string> => {
  const cssVars = getAllCSSVariableNames();

  if (isServerRender) return {};
  return getElementCSSVariables(cssVars, document?.documentElement);
};
