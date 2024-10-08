/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Category,
  Category$inboundSchema,
  Category$Outbound,
  Category$outboundSchema,
} from "./category.js";
import {
  Tag,
  Tag$inboundSchema,
  Tag$Outbound,
  Tag$outboundSchema,
} from "./tag.js";

/**
 * pet status in the store
 */
export const Status = {
  Available: "available",
  Pending: "pending",
  Sold: "sold",
} as const;
/**
 * pet status in the store
 */
export type Status = ClosedEnum<typeof Status>;

export type Pet = {
  id?: number | undefined;
  name: string;
  category?: Category | undefined;
  photoUrls: Array<string>;
  tags?: Array<Tag> | undefined;
  /**
   * pet status in the store
   */
  status?: Status | undefined;
};

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const Pet$inboundSchema: z.ZodType<Pet, z.ZodTypeDef, unknown> = z
  .object({
    id: z.number().int().optional(),
    name: z.string(),
    category: Category$inboundSchema.optional(),
    photoUrls: z.array(z.string()),
    tags: z.array(Tag$inboundSchema).optional(),
    status: Status$inboundSchema.optional(),
  });

/** @internal */
export type Pet$Outbound = {
  id?: number | undefined;
  name: string;
  category?: Category$Outbound | undefined;
  photoUrls: Array<string>;
  tags?: Array<Tag$Outbound> | undefined;
  status?: string | undefined;
};

/** @internal */
export const Pet$outboundSchema: z.ZodType<Pet$Outbound, z.ZodTypeDef, Pet> = z
  .object({
    id: z.number().int().optional(),
    name: z.string(),
    category: Category$outboundSchema.optional(),
    photoUrls: z.array(z.string()),
    tags: z.array(Tag$outboundSchema).optional(),
    status: Status$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pet$ {
  /** @deprecated use `Pet$inboundSchema` instead. */
  export const inboundSchema = Pet$inboundSchema;
  /** @deprecated use `Pet$outboundSchema` instead. */
  export const outboundSchema = Pet$outboundSchema;
  /** @deprecated use `Pet$Outbound` instead. */
  export type Outbound = Pet$Outbound;
}
