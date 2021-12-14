import { ClassNameSpec } from '../src/classname-reducer';

export const standardKey: ClassNameSpec = {
  main: true,
};

export const standardKeysWithFunctionEval: ClassNameSpec = {
  ...standardKey,
  highlight: (state) => state?.isHighlight,
};

export const stringKey: ClassNameSpec = {
  'highlight-text': true,
};

export const stringKeysWithFunctionEval: ClassNameSpec = {
  ...stringKey,
  'superscript-to-the-moon': (state) => state?.isSuperHigh
};