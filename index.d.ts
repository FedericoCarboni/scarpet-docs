type Base = {
  /**
   * Documentation for the item in Markdown format.
   */
  markdown?: string;
  /**
   * Documentation for the item in plain text.
   */
  plain?: string;
  /**
   * A deprecation message in Markdown format. `undefined` if the item is not
   * deprecated.
   */
  deprecated?: string;
};
export type Type = "string" | "number" | "bool" | "map" | "list" | "text";
/**
 * A function parameter.
 */
export type Param = {
  /**
   * Name of the parameter.
   */
  name: string;
  /**
   * Type of the parameter.
   */
  type?: Type;
  /**
   * `true` if the parameter is a rest parameter. If type is also specified it
   * refers to the type of items it expects, e.g. `f(...args) -> null; f(1, 2)`
   * would specify `type: "number"` for `args`.
   */
  rest?: boolean;
  /**
   * If the function has more than one signature and this parameter is
   * provided, this property specifies its default value. If `default` is
   * provided but type is omitted, `default` is assumed to be `string`.
   */
  default?: string;
};
export type SuggestionValues = {
  type?: string;
  values: string[];
};
export type Suggestion = {
  [name: string]: SuggestionValues;
};
export type Signature = {
  params: Param[];
  suggests?: Suggestion[];
};
export type Callback = Base & {
  params: Param[];
};
export type Function = Base & {
  signatures: Signature[];
};
export type Constant = Base;
export type Event = string;
export type Data = {
  /**
   * An object where each property key is a callback name and its associated
   * value is its documentation data.
   */
  callbacks: Record<string, Callback>;
  /**
   * An object where each property key is a constant name and its associated
   * value is its documentation data.
   */
  constants: Record<string, Constant>;
  /**
   * An object where each property key is a built-in function name and its
   * associated value is its documentation data.
   */
  functions: Record<string, Function>;
  /**
   * An array of known event names.
   */
  events: Event[];
};
declare const data: Data;
export default data;
