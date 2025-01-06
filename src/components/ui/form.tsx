/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { login } from "@/actions/login";
import Form from "next/form";
import { useActionState } from "react";

const StatusCard = ({
  state,
}: {
  state: {
    ok: boolean;
    message: string;
    status: number;
    otherIssues: any;
  };
}) => {
  return (
    <article className="max-w-[340px]  bg-red-400 border-2 border-red-500 p-5 rounded-md text-white flex flex-col items-center">
      <span className="text-4xl font-bold">{state.status}</span>

      <strong>Oops, parece que pasó algo..</strong>

      <p>{state.message}</p>
    </article>
  );
};
export default function ClientForm() {
  const [state, formAction, pending] = useActionState(login, {
    ok: true,
    message: "",
    otherIssues: null,
    status: 200,
  });
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
          className={`p-3 border-2 rounded-md ${!state.ok && "border-red-500"}`}
        />
      </label>

      <label className="w-full flex flex-col mb-[10px]" htmlFor="password">
        Contraseña
        <input
          type="password"
          name="password"
          id="password"
          required
          className={`p-3 border-2 rounded-md ${!state.ok && "border-red-500"}`}
        />
      </label>

      <button
        type="submit"
        className="py-4 px-8 bg-accent rounded-md transition-transform hover:scale-95"
      >
        {pending ? "Iniciando sesión" : "Inicia sesión con Email"}
      </button>

      <div
        className={`w-full flex justify-center absolute -bottom-1/2 left-0 transition ${
          state.ok && "-translate-y-full"
        } ${state.ok && "opacity-0"} ${state.ok && "pointer-events-none"}`}
      >
        <StatusCard state={state} />
      </div>
    </Form>
  );
}
