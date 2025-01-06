import { IconCalendarPlus, IconMapPin, IconPencil } from "@tabler/icons-react";

export default function Loading() {
  return (
    <section className="min-h-screen relative w-full max-w-[500px] mx-auto flex flex-col pt-[48px]">
      <header className="absolute top-0 z-30 w-full flex flex-row items-center px-[13px] py-[6px] bg-white">
        {/* <BackBtn /> */}
        <div className="flex flex-col ml-6">
          <strong className="animate-pulse">Cargando nombre...</strong>
        </div>
      </header>

      <div className="aspect-video h-[200px] object-cover object-center w-full bg-black/20"></div>

      <div className="relative px-[13px] mb-4">
        <div className="w-full absolute flex justify-end -top-14 left-0 z-10 px-[13px]">
          <div className="flex flex-col items-center gap-2">
            <div className="aspect-square object-cover object-center rounded-full w-[140px] h-[140px]"></div>

            <div
              title="Edita tu perfil."
              className={`px-5 py-3 rounded-md bg-accent flex flex-row items-center gap-1 transition-transform hover:scale-95`}
            >
              <IconPencil /> Editar perfil
            </div>
          </div>
        </div>

        <div className="my-[10px]">
          <h1 className="font-bold text-2xl animate-pulse">
            Cargando nombre...
          </h1>
          <span className="text-black/70 animate-pulse">
            Cargando usuario...
          </span>
        </div>

        <p className="max-w-[34ch] animate-pulse">Cargando bio...</p>

        <div className="my-[10px] flex flex-row gap-[10px] text-black/70 [&>#info]:flex [&>#info]:flex-row [&>#info]:items-start [&>#info]:w-fit [&>#info]:gap-1">
          <span id="info" className="animate-pulse">
            <IconMapPin />
            Cargando ubicación...
          </span>

          <span id="info" className="animate-pulse">
            <IconCalendarPlus /> Cargando fecha de ingreso...
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 [&>span]:flex [&>span]:flex-row [&>span]:gap-1 [&>span]:items-center [&>span]:text-black/60">
          <span>
            <strong className="text-black animate-pulse">...</strong>
            Siguiendo
          </span>

          <span>
            <strong className="text-black animate-pulse">...</strong>
            Seguidores
          </span>
        </div>
      </div>

      {/* <UserPostsFeed userId={id} server:defer>
    <UserPostsFeedPlaceholder slot="fallback" />
  </UserPostsFeed> */}
    </section>
  );
}
