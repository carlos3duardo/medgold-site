import { ButtonCta } from '@/components/ButtonCta';

export function Welcome() {
  return (
    <section className="h-mix-screen flex items-end justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute bg-video object-cover -z-10 min-h-screen"
      >
        <source src="/videos/welcome-background-2.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo
      </video>
      <div
        className="absolute top-0 left-0 bottom-0 right-0"
        style={{
          background: 'linear-gradient(to right, #3785b3ff 0%, #3785b344 50%',
        }}
      />
      <div className="relative container">
        <div className="w-full max-w-[38rem] flex flex-col gap-4 px-4 pb-8">
          <h1 className="text-4xl lg:text-[3.25rem] leading-tight text-white font-extrabold">
            <span className="text-secondary-400">MedGold</span> oferece
            telemedicina 24h e descontos na rede de parceiros
          </h1>
          <h2 className="text-xl lg:text-[1.5rem] mt-4 text-white font-semibold">
            Seja atendido{' '}
            <span className="font-extrabold underline">sem sair de casa</span>,{' '}
            <span className="font-extrabold underline">
              sempre que precisar
            </span>
            , e ainda tenha descontos na nossa rede de parceiros.
          </h2>
          <a href="#contrate">
            <ButtonCta>Quero contratar agora</ButtonCta>
          </a>
        </div>
      </div>
    </section>
  );
}
