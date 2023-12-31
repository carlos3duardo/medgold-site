import { Beneficios } from '@/components/home/Beneficios';
import { CartaoDigital } from '@/components/home/CartaoDigital';
import { ComoSeCadastrar } from '@/components/home/ComoSeCadastrar';
import { Planos } from '@/components/home/Planos';
import { PontosPositivos } from '@/components/home/PontosPositivos';
import { Telemedicina } from '@/components/home/Telemedicina';
import { Welcome } from '@/components/home/Welcome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MedGold',
  description: 'MedGold - Saúde + benefícios',
};

export default function Home() {
  return (
    <>
      <Welcome />
      <Telemedicina />
      <Beneficios />
      <PontosPositivos />
      <ComoSeCadastrar />
      <CartaoDigital />
      <Planos />
    </>
  );
}
