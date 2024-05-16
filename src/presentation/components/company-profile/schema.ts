import { z } from "zod";

const typesEnum = z.enum([
  "HAIRCUTS",
  "MAKE_UP",
  "MANICURE",
  "MASSAGE",
  "BARBER",
]);

export const companyProfileSchema = z.object({
  name: z.string(),
  description: z.string(),
  types: z.array(typesEnum),
});
