import imgChip from '@/assets/images/credit-card-chip.png';
import imgVisa from '@/assets/images/credit-card-type-visa.png';
import { format } from 'date-fns';
import Image from 'next/image';

interface CartaoProps {
  show?: 'front' | 'back';
  number?: string;
  brand?: string;
  holder?: string;
  expiresAt?: string;
  cvv?: string;
}

export function CartaoDeCredito({
  show = 'front',
  number,
  brand,
  holder,
  expiresAt,
  cvv,
}: CartaoProps) {
  return (
    <div className="card-container relative w-full max-w-[400px] h-[250px]">
      {/* Frente do cartão de crédito */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg py-4 px-7 flex flex-col justify-between"
        style={{
          backfaceVisibility: 'hidden',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.4s ease-out',
          transform:
            show === 'front'
              ? 'perspective(1000px) rotateY(0deg)'
              : 'perspective(1000px) rotateY(-180deg)',
          backgroundImage: 'linear-gradient(45deg, #48c6ef 0%, #6f86d6 100%)',
        }}
      >
        <div className="flex justify-end">
          <figure>
            <Image
              src={imgVisa}
              width={64}
              height={65}
              alt="Bandeira do cartão"
              className="brightness-0 invert"
            />
          </figure>
        </div>
        <div className="flex justify-start">
          <figure>
            <Image
              src={imgChip}
              width={42}
              height={42}
              alt="Bandeira do cartão"
            />
          </figure>
        </div>
        <div className="card-number text-white text-2xl font-semibold font-mono">
          {number || <span className="opacity-30">9999 9999 9999 9999</span>}
        </div>
        <div className="card-info flex items-center justify-between text-white">
          <div className="leading-tight text-lg font-semibold">
            <span className="block text-xs font-medium opacity-40">
              PORTADOR
            </span>
            {holder ? (
              holder.toUpperCase()
            ) : (
              <span className="opacity-30">JUSCELINO K OLIVEIRA</span>
            )}
          </div>
          <div className="leading-tight text-lg text-right font-semibold">
            <span className="block text-xs font-medium opacity-40">
              VALIDADE
            </span>
            {expiresAt || (
              <span className="opacity-30">{format(new Date(), 'LL/yy')}</span>
            )}
          </div>
        </div>
      </div>
      {/* Verso do cartão de crédito */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg py-5 bg-slate-400 flex flex-col justify-between"
        style={{
          backfaceVisibility: 'hidden',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.4s ease-out',
          transform:
            show === 'back'
              ? 'perspective(1000px) rotateY(0deg)'
              : 'perspective(1000px) rotateY(180deg)',
        }}
      >
        <div className="bg-black w-full h-16" />
        <div className="px-4">
          <span className="flex w-full justify-end text-white text-xs font-semibold px-4">
            CVV
          </span>
          <div className="flex items-center w-full bg-white rounded-md">
            <div className="flex-1"></div>
            <div className="h-12 flex items-center rounded-r-md p-4">
              {cvv || <span className="opacity-30">394</span>}
            </div>
          </div>
        </div>
        <div className="flex justify-end px-4">
          <figure>
            <Image
              src={imgVisa}
              width={42}
              height={42}
              alt="Bandeira do cartão"
              className="brightness-0 invert"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
