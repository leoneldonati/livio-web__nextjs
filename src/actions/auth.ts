/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { userModel } from "@/db";
import { compareHash } from "@/libs/bcrypt";
import { encrypt } from "@/libs/jose";
import { createSession } from "@/utils/session";
import { validate } from "@/utils/zod";
import { z } from "zod";

const loginContract = z.object({
  email: z
    .string()
    .email({ message: "El email debe tener un formato de email válido." }),
  password: z.string(),
});
export async function login(prevState: any, payload: FormData) {
  const { email, password } = Object.fromEntries(payload);
  try {
    const { ok, issues } = validate(loginContract, { email, password });

    if (!ok)
      return {
        ok: false,
        message: "Algunos datos no son válidos, por favor revísalos.",
        status: 404,
        otherIssues: issues,
      };

    const user = await userModel.findOne({ email: email });

    if (!user)
      return {
        ok: false,
        message:
          "No se encontró un usuario con ese email, asegúrate de estar registrado.",
        status: 404,
        otherIssues: null,
      };

    const isMatched = await compareHash(password.toString(), user.password);

    if (!isMatched)
      return {
        ok: false,
        message: "Credenciales inválidas, intenta nuevamente.",
        status: 401,
        otherIssues: null,
      };

    const sessionInfo = {
      signedDate: new Date(),
      signedUserId: user._id,
    };
    const signedToken = await encrypt(sessionInfo);

    await createSession(signedToken);

    return {
      ok: true,
      message: "¡Inicio de sesión exitoso!",
      status: 200,
      otherIssues: null,
    };
  } catch (e) {
    console.error(e);
    return {
      ok: false,
      message: "Error en el servidor.",
      status: 500,
      otherIssues: null,
    };
  }
}
