/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateUserRequest = {
  /**
   * name that needs to be updated
   */
  username: string;
  /**
   * Update an existent user in the store
   */
  user?: components.User | undefined;
};

/** @internal */
export const UpdateUserRequest$inboundSchema: z.ZodType<
  UpdateUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  User: components.User$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "User": "user",
  });
});

/** @internal */
export type UpdateUserRequest$Outbound = {
  username: string;
  User?: components.User$Outbound | undefined;
};

/** @internal */
export const UpdateUserRequest$outboundSchema: z.ZodType<
  UpdateUserRequest$Outbound,
  z.ZodTypeDef,
  UpdateUserRequest
> = z.object({
  username: z.string(),
  user: components.User$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    user: "User",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserRequest$ {
  /** @deprecated use `UpdateUserRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUserRequest$inboundSchema;
  /** @deprecated use `UpdateUserRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateUserRequest$outboundSchema;
  /** @deprecated use `UpdateUserRequest$Outbound` instead. */
  export type Outbound = UpdateUserRequest$Outbound;
}
