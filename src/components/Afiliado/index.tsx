'use client';
import { useSearchParams } from 'next/navigation';

export function Afiliado() {
  const searchParams = useSearchParams();

  const afiliadoId = searchParams.get('afiliadoId');

  return <p>{afiliadoId}</p>;
}
