import { StepFormType } from './utils';
export default function buildSchema(form: StepFormType): {
    properties: {
        [prop: string]: {
            [prop: string]: any;
        };
    };
};
