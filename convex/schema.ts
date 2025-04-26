import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    credits: v.number(),
    subscriptionId: v.optional(v.string()),
    height: v.optional(v.float64()),
    weight: v.optional(v.float64()),
    gender: v.optional(v.string()),
    age: v.optional(v.number()),
  }),
});