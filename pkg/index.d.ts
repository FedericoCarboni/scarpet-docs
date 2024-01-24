export interface ScarpetSignature {
  params: {
    name: string;
    rest?: boolean;
    type: string;
  }[];
  returns?: string;
}

export interface ScarpetBuiltin {
  signatures?: ScarpetSignature[];
  docs: string;
}

export interface ScarpetBuiltinData {
  [symbol: string]: ScarpetBuiltin;
}

export const functions: ScarpetBuiltinData;
export const constants: ScarpetBuiltinData;
