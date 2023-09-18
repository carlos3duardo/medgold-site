'use client';
import { useSearchParams } from 'next/navigation';
import { planos } from '@/data';

export function Banner() {
  const searchParams = useSearchParams();

  const planoId = searchParams.get('plano_id');

  const plano = planos.find((item) => item.id === planoId);

  return (
    <div
      className="relative w-full h-[560px] flex items-end justify-center"
      style={{
        backgroundImage: plano
          ? `url('${plano.thumbnail}')`
          : `url('/images/plano-default-background-1.jpg')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(to right, #3785b399 0%, #3785b399 50%)',
          backdropFilter: 'blur(4px)',
        }}
      />
      <div className="relative header mb-6 pb-6 text-center">
        <h1 className="text-4xl text-white font-extrabold mb-4">
          A telemedicina está a um clique de distância
        </h1>
        <h2 className="text-2xl text-secondary-400 font-semibold">
          Preencha seus dados pessoais e finalize a sua compra!
        </h2>
      </div>
    </div>
  );
}
