'use client';
import { useSearchParams } from 'next/navigation';
import { planos } from '@/data';

export function Banner() {
  const searchParams = useSearchParams();

  const planoId = searchParams.get('plano_id');

  const plano = planos.find((item) => item.id === planoId);

  return (
    <div
      className="absolute top-0 left-0 w-full bg-primary-400 h-screen"
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
          backdropFilter: 'blur(8px)',
        }}
      />
    </div>
  );
}
