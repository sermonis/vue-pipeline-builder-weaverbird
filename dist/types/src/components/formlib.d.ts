import Vue, { VueConstructor } from 'vue';
import { PipelineStepName } from '@/lib/steps';
export declare type StepMapper = {
    [K in PipelineStepName]?: VueConstructor<Vue>;
};
/**
 * This will contain the mapping *step name* → *corresponding form class*
 * for each available step form.
 */
export declare const STEPFORM_REGISTRY: StepMapper;
interface StepFormConfig {
    vqbstep: PipelineStepName;
    [prop: string]: any;
}
/**
 * `StepFormComponent` is a thin wrapper around `vue-property-decorator.Component`
 * that registers a form component class for a given step in the `STEPFORM_REGISTRY`
 * registry.
 *
 * The step name should be specified with the `vqbstep` configuration parameter.
 *
 * @param config the component configuration. Its value is directly passed to
 * the `vue-property-decorator.Component` decorator.
 */
export declare function StepFormComponent(config: StepFormConfig, registry?: StepMapper): (target: any) => any;
export {};
