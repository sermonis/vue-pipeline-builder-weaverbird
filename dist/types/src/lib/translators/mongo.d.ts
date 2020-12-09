/** This module contains mongo specific translation operations */
import * as S from '@/lib/steps';
import { BaseTranslator, ValidationError } from '@/lib/translators/base';
/**
 * MongoStep interface. For now, it's basically an object with any property.
 */
export interface MongoStep {
    [propName: string]: any;
}
declare type FilterComboAndMongo = {
    $and: MongoStep[];
};
export declare function _simplifyAndCondition(filterAndCond: FilterComboAndMongo): MongoStep;
/**
 * Simplify a list of mongo steps (i.e. merge them whenever possible)
 *
 * - if multiple `$match` steps are chained, merge them,
 * - if multiple `$project` steps are chained, merge them.
 *
 * @param mongoSteps the input pipeline
 *
 * @returns the list of simplified mongo steps
 */
export declare function _simplifyMongoPipeline(mongoSteps: MongoStep[]): MongoStep[];
export declare class Mongo36Translator extends BaseTranslator {
    static label: string;
    domainToCollection(domain: string): string;
    constructor();
    setDomainToCollection(domainToCollectionFunc: (domain: string) => string): void;
    translate(pipeline: S.Pipeline): MongoStep[];
    /** transform an 'append' step into corresponding mongo steps */
    append(step: Readonly<S.AppendStep>): MongoStep[];
    /** transform a 'join' step into corresponding mongo steps */
    join(step: Readonly<S.JoinStep>): MongoStep[];
    validate(customEditedStep: S.CustomStep): ValidationError[] | null;
}
export {};
