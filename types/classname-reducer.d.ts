export declare type ClassNameSpec = {
    [className: string]: boolean | ((state: any) => boolean);
};
export declare const classNameReducer: (classNameSpec: ClassNameSpec, state: any) => string;
