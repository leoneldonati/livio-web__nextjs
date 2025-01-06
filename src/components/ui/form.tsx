"use client";

import { login } from "@/actions/auth";
import { IconLoader3, IconTrashFilled } from "@tabler/icons-react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export default function ClientForm() {
  const initialState = {
    ok: true,
    message: "",
    otherIssues: null,
    status: 102,
  };
  const [state, formAction, pending] = useActionState(login, initialState);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (state.status === 200 && !hasError) {
      return router.push("/feed");
    }

    if (state.status >= 400) {
      setHasError(true);
      const timer = setTimeout(() => {
        setHasError(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state]);
  return (
    <Form
      action={formAction}
      className={`text-xl max-w-[340px] w-full flex flex-col my-[10px] mx-auto rounded-md p-6 transition-colors shadow-md shadow-black/50 relative `}
    >
      <label className="w-full flex flex-col mb-[10px]" htmlFor="email">
        Email{" "}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="m@ejemplo.com"
          autoFocus
          autoComplete="email"
          required
          className={`p-3 border-2 rounded-md ${hasError && "border-red-500"}`}
        />
      </label>

      <label className="w-full flex flex-col mb-[10px]" htmlFor="password">
        Contraseña
        <input
          type="password"
          name="password"
          id="password"
          required
          className={`p-3 border-2 rounded-md ${hasError && "border-red-500"}`}
        />
      </label>

      <button
        type="submit"
        className="py-4 px-8 bg-accent rounded-md transition-transform hover:scale-95 flex flex-row items-center justify-center gap-2"
      >
        <span>{pending ? "Iniciando sesión" : "Inicia sesión con Email"}</span>
        {pending && <IconLoader3 className="animate-spin" />}
      </button>

      {/* STATUS CARD */}
      <div
        className={`w-full flex justify-center fixed bottom-[10%] z-30 left-0 transition ${
          !hasError && "-translate-y-full"
        } ${!hasError && "opacity-0"} ${!hasError && "pointer-events-none"}`}
      >
        <article className="max-w-[340px]  bg-red-400 border-2 border-red-500 p-5 rounded-md text-white flex flex-col gap-2 items-center relative">
          <span className="text-4xl font-bold">{state.status}</span>

          <strong>Oops, parece que pasó algo..</strong>

          <p>{state.message}</p>

          <button
            type="button"
            className="text-white absolute top-3 right-3  transition-transform hover:scale-105 active:scale-100"
            onClick={() => setHasError(false)}
          >
            <IconTrashFilled />
          </button>
        </article>
      </div>
      {/* STATUS CARD */}
    </Form>
  );
}
