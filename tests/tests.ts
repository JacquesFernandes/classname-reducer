import { expect } from 'chai';

import { classNameReducer } from '../src/classname-reducer';
import { standardKey, standardKeysWithFunctionEval, stringKey, stringKeysWithFunctionEval } from './examples';

describe('classnameReducer', (): void => {
  // object-key
  it('simple object-key usage', (): void => {
    const result = classNameReducer(standardKey, {});
    expect(result).is.equal('main');
  });

  it('complex object-key usage > state-dependent function > true', (): void => {
    const resultEvalIsTrue = classNameReducer(standardKeysWithFunctionEval, { isHighlight: true });
    expect(resultEvalIsTrue).is.equal('main highlight');
  });

  it('complex object-key usage > state-dependent function > false', (): void => {
    const resultEvalIsFalse = classNameReducer(standardKeysWithFunctionEval, { isHighlight: false });
    expect(resultEvalIsFalse).is.equal('main');
  });

  it('complex object-key usage > state-dependent function > undefined', (): void => {
    const resultEvalIsUndefined = classNameReducer(standardKeysWithFunctionEval, {});
    expect(resultEvalIsUndefined).is.equal('main');
  });

  // string key
  it('simple string-key usage', (): void => {
    const result = classNameReducer(stringKey, {});
    expect(result).is.equal('highlight-text');
  });

  it('complex string-key usage > state-dependent function > true', (): void => {
    const resultEvalIsTrue = classNameReducer(stringKeysWithFunctionEval, { isSuperHigh: true });
    expect(resultEvalIsTrue).is.equal('highlight-text superscript-to-the-moon');
  });

  it('complex string-key usage > state-dependent function > false', (): void => {
    const resultEvalIsFalse = classNameReducer(stringKeysWithFunctionEval, { isSuperHigh: false });
    expect(resultEvalIsFalse).is.equal('highlight-text');
  });

  it('complex string-key usage > state-dependent function > undefined', (): void => {
    const resultEvalIsUndefined = classNameReducer(stringKeysWithFunctionEval, {});
    expect(resultEvalIsUndefined).is.equal('highlight-text');
  });
});