'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import valid from 'card-validator';

import imgChip from './images/chip.png';
import brandUnkown from './images/brand-unkown.png';
import brandAmex from './images/brand-amex.png';
import brandDiners from './images/brand-dinersclub.png';
import brandDiscover from './images/brand-discover.png';
import brandElo from './images/brand-elo.png';
import brandHiper from './images/brand-hiper.png';
import brandHipercard from './images/brand-hipercard.png';
import brandJcb from './images/brand-jcb.png';
import brandMaestro from './images/brand-maestro.png';
import brandMastercard from './images/brand-mastercard.png';
import brandUnionPay from './images/brand-unionpay.png';
import brandVisa from './images/brand-visa.png';

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
  holder,
  expiresAt,
  cvv,
}: CartaoProps) {
  const [brandImage, setBrandImage] = useState(brandUnkown);

  useEffect(() => {
    const card = valid.number(number);

    if (card.card && card.card.type === 'visa') {
      setBrandImage(brandVisa);
    } else if (card.card && card.card.type === 'mastercard') {
      setBrandImage(brandMastercard);
    } else if (card.card && card.card.type === 'american-express') {
      setBrandImage(brandAmex);
    } else if (card.card && card.card.type === 'diners-club') {
      setBrandImage(brandDiners);
    } else if (card.card && card.card.type === 'discover') {
      setBrandImage(brandDiscover);
    } else if (card.card && card.card.type === 'jcb') {
      setBrandImage(brandJcb);
    } else if (card.card && card.card.type === 'unionpay') {
      setBrandImage(brandUnionPay);
    } else if (card.card && card.card.type === 'maestro') {
      setBrandImage(brandMaestro);
    } else if (card.card && card.card.type === 'elo') {
      setBrandImage(brandElo);
    } else if (card.card && card.card.type === 'hiper') {
      setBrandImage(brandHiper);
    } else if (card.card && card.card.type === 'hipercard') {
      setBrandImage(brandHipercard);
    } else {
      setBrandImage(brandUnkown);
    }
  }, [number]);

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
              src={brandImage}
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
              src={brandImage}
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
