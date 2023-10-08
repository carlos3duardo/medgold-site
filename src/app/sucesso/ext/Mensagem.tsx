'use client';
import Lottie from 'lottie-react';
import success from '@/assets/animations/success.json';

export function Mensagem() {
  return (
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
  );
}
