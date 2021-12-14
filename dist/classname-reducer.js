"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNameReducer = void 0;
const classNameReducer = (classNameSpec, state) => {
    const computedClassNames = [];
    for (const className in classNameSpec) {
        const evaluator = classNameSpec[className];
        if (evaluator === true // explicitly set to true
            || (evaluator !== false && evaluator(state)) // not false and is a function
        ) {
            computedClassNames.push(className);
        }
    }
    return computedClassNames.join(' ');
};
exports.classNameReducer = classNameReducer;
//# sourceMappingURL=classname-reducer.js.map