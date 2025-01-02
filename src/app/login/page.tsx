import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="sign">
      <div className="sign__container">
        <h1 className="sign__title">Iniciar sesión</h1>
        <h2 className="sign__subtitle">Ingresa tu email debajo</h2>
        <form method="post" className="sign__form">
          <label className="sign__form__label--email" htmlFor="email">
            Email{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="m@ejemplo.com"
              autoFocus
              autoComplete="email"
              required
            />
          </label>

          <label className="sign__form__label--password" htmlFor="password">
            Contraseña
            <input type="password" name="password" id="password" required />
          </label>

          {/* <SubmitBtn hoverTitle="¡Inicia sesión!" loadingText="Iniciando...">
            Inicia sesión con Email
          </SubmitBtn> */}
        </form>
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
