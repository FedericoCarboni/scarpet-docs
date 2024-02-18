type Base = {
  markdown?: string;
  plain?: string;
  deprecated?: string;
};
export type Param = {
  name: string;
  type?: string;
  rest?: boolean;
};
export type Signature = {
  params: Param[];
};
export type Callback = Base & {
  markdown?: string;
  plain?: string;
  params: Param[];
};
export type Function = Base & {
  signatures: Signature[];
};
export type Constant = Base;
export type Event = string;
export type ScarpetData = {
  callbacks: Record<string, Callback>;
  constants: Record<string, Constant>;
  functions: Record<string, Function>;
  events: Event[];
};
declare const data: ScarpetData;
export default data;
