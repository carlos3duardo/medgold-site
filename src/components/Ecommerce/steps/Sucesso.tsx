'use client';
import Lottie from 'lottie-react';
import success from '@/assets/animations/success.json';

export function Sucesso() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <figure>
        <Lottie
          animationData={success}
          loop={true}
          style={{
            width: '220px',
            height: '220px',
          }}
        />
      </figure>
      <div>
        <h2 className="text-4xl text-secondary-600 font-extrabold">
          Pedido recebido com sucesso!
        </h2>
        <h3 className="text-xl text-slate-400 font-bold">
          Aguarde o processamento da sua compra.
          <br />
          Você receberá todas as informações por e-mail.
        </h3>
      </div>
    </div>
  );
}
