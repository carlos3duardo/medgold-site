import Ecommerce from '@/components/Ecommerce';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MedGold',
  description: 'MedGold - Saúde + benefícios',
};

export default function Contratar() {
  return <Ecommerce />;
}
