export type ClassNameSpec = {
  [className: string]: boolean | ((state: any) => boolean);
};

export const classNameReducer = (classNameSpec: ClassNameSpec, state: any): string => {
  const computedClassNames: Array<string> = [];

  for (const className in classNameSpec) {
    const evaluator = classNameSpec[className];
    if (
      evaluator === true                           // explicitly set to true
      || (evaluator !== false && evaluator(state)) // not false and is a function
    ) {
      computedClassNames.push(className);
    }
  }

  return computedClassNames.join(' ');
};