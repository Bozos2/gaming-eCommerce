import { z } from "zod";

export const FormDataSchema = z
  .object({
    ime: z
      .string({
        required_error: "Potreban unos imena",
        invalid_type_error: "Ime mora biti slova",
      })
      .min(4, { message: "Minimalan broj karaktera: 4" })
      .max(20, { message: "Predugacko ime." }),
    prezime: z
      .string({
        required_error: "Potreban unos prezimena",
        invalid_type_error: "Prezime mora biti slova",
      })
      .min(4, { message: "Minimalan broj karaktera: 4" })
      .max(20, { message: "Predugacko prezime." }),
    email: z
      .string({
        required_error: "Potreban unos emaila",
        invalid_type_error: "Email mora sadrzavati @",
      })
      .email({ message: "Ovo nije validan nacin email-a" }),
    lozinka: z
      .string({
        required_error: "Potreban unos passworda",
      })
      .min(6, { message: "Minimalan broj karaktera: 6" })
      .max(32, { message: "Maximalan broj karaktera: 32" }),
    potvrdalozinke: z.string({
      required_error: "Potreban ponovan unos passworda",
    }),
    dob: z.coerce.string(),
    spol: z.string(),
    drzava: z.string(),
  })
  .refine((data) => data.lozinka === data.potvrdalozinke, {
    message: "Lozinke nisu iste.",
    path: ["potvrdalozinke"],
  });
