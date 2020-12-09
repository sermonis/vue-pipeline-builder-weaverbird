/** This module contains mongo specific translation operations */
import { Mongo36Translator } from '@/lib/translators/mongo';
/**
 * MongoStep interface. For now, it's basically an object with any property.
 */
export interface MongoStep {
    [propName: string]: any;
}
export declare class Mongo40Translator extends Mongo36Translator {
    static label: string;
}
