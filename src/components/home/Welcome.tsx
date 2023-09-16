import { ButtonCta } from '@/components/ButtonCta';

export function Welcome() {
  return (
    <section
      className="h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(images/welcome-background.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
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
          <ButtonCta href="#contrate">Quero contratar agora</ButtonCta>
        </div>
      </div>
    </section>
  );
}
