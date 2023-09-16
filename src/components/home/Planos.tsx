import { ButtonCta } from '@/components/ButtonCta';

export function Planos() {
  return (
    <section className="pt-20 pb-20 bg-primary-600 text-white">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-[3.25rem] leading-tight font-extrabold text-center">
          Planos de assinatura MedGold Plus
        </h2>

        <div className="text-center">
          <ButtonCta href="#planos">Quero contratar agora</ButtonCta>
        </div>
      </div>
    </section>
  );
}
