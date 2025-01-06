import ClientForm from "@/components/ui/form";
import Link from "next/link";

export default async function LoginPage() {
  return (
    <section className="h-full grid place-items-center">
      <div className="max-w-[400px] w-full mx-auto">
        <h1 className="text-2xl">Iniciar sesión</h1>
        <h2 className="text-xl text-black/40 text-center">
          Ingresa tu email debajo
        </h2>

        <ClientForm />
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
