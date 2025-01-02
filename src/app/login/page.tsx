import SubmitBtn from "@/components/ui/submit-btn";
import Link from "next/link";
import Form from "next/form";
export default function LoginPage() {
  return (
    <section className="h-full grid place-items-center">
      <div className="max-w-[400px] w-full mx-auto">
        <h1 className="text-2xl">Iniciar sesión</h1>
        <h2 className="text-xl text-black/40 text-center">
          Ingresa tu email debajo
        </h2>
        <Form
          action={async (e) => {
            "use server";
          }}
          className="text-xl max-w-[340px] w-full flex flex-col my-[10px] mx-auto rounded-md p-[10px] shadow-md shadow-black/50"
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
              className="p-[6px]"
            />
          </label>

          <label className="w-full flex flex-col mb-[10px]" htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              required
              className="p-[6px]"
            />
          </label>

          <SubmitBtn hoverTitle="¡Inicia sesión!" loadingText="Iniciando...">
            Inicia sesión con Email
          </SubmitBtn>
        </Form>
        {/* 
     <div id="separator">
      <span></span>
      <span>O CONTINUAR CON</span>
    </div>

     <div className="sign__container--o-auth-btn ">
      <OAuthBtn provider="GITHUB" />
      <OAuthBtn provider="INSTAGRAM" />
    </div>  */}

        <small>
          ¿No tienes una cuenta?{" "}
          <Link href="/sign" className="text-black/80">
            Crear una cuenta
          </Link>
        </small>
      </div>
    </section>
  );
}
