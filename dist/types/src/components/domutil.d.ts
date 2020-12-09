/**
 * This module contains DOM / browser utility functions, e.g. positioning
 * helpers used by the Popover.
 */
import { Alignment } from '@/components/constants';
/**
 * `WindowDimensions` represents the subpart of the `Window` object that is needed
 * to compute various dimension and alignment properties in our helpers.
 */
declare type WindowDimensions = Pick<Window, 'innerWidth' | 'innerHeight'>;
/**
 * `ElementOffset` represents the subpart of an `HTMLElement` object that is needed
 * to compute various dimension and alignment properties in our helpers.
 */
declare type ElementOffset = Pick<HTMLElement, 'offsetWidth' | 'offsetHeight'>;
/**
 * `PositionContext` is a type that provides all positioning context for a given element
 * that can be required to compute a specific new positioning
 */
declare type PositionContext = {
    /** the main element being manipulated */
    element: ElementOffset;
    /** its parent element's position */
    parent: ClientRect;
    /** the document body's position */
    body: ClientRect;
    /** the window dimensions */
    window: WindowDimensions;
};
declare type PartialPositionContext = Partial<{
    [K in keyof PositionContext]: Partial<PositionContext[K]>;
}>;
/**
 * Compute the position properties required to justify-align `ctx.element`.
 *
 * @param alignment the alignment strategy (e.g `Alignment.Center`, `Alignment.Justify`)
 * @param ctx the position context used to make positioning computations
 */
export declare function align(alignment: Alignment, ctx: PartialPositionContext): {
    left: number;
};
/**
 * Compute the "top" position propertiy required for `ctx.element`.
 *
 * @param fromBottom whether or not the element should be "bottom" or "top" aligned
 * @param ctx the position context used to make positioning computations
 */
export declare function computeTop(fromBottom: boolean | undefined, ctx: PartialPositionContext): number;
export {};
