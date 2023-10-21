import { ButtonCta } from '@/components/ButtonCta';

export function Welcome() {
  return (
    <section className="h-screen relative flex items-end pb-20 justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 min-w-full min-h-full"
      >
        <source src="/videos/welcome-background-2.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo
      </video>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(to right, #3785b3ff 0%, #3785b344 50%',
        }}
      />
      <div className="relative container">
        <div className="w-full max-w-[38rem] flex flex-col gap-4">
          <h1 className="text-[3.25rem] leading-tight text-white font-extrabold">
            <span className="text-secondary-400">MedGold</span> oferece
            telemedicina 24h e descontos na rede de parceiros
          </h1>
          <h2 className="text-[1.5rem] mt-4 text-white font-medium">
            Seja atendido{' '}
            <span className="text-secondary-400 font-extrabold">
              sem sair de casa
            </span>
            ,{' '}
            <span className="text-secondary-400 font-extrabold">
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
