/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ZodRawShape, ZodTypeAny, ZodObject } from "zod";
export function validate(
  contract: ZodObject<
    ZodRawShape,
    "strip",
    ZodTypeAny,
    {
      [x: string]: any;
    },
    {
      [x: string]: any;
    }
  >,
  payload: object
) {
  try {
    contract.parse(payload);
    return {
      ok: true,
      issues: null,
    };
  } catch (e: any) {
    return {
      ok: false,
      issues: e.issues,
    };
  }
}
