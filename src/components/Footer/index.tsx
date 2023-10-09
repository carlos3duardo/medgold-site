import Image from 'next/image';
import logo from '@/assets/images/header-logo-medgold.png';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="disclaimer py-8">
        <div className="container mx-auto">
          <p className="w-full max-w-7xl mx-auto text-center text-slate-600">
            O serviço de telemedicina é prestado pela BusCare. A MedGold não é
            um plano de saúde, não garante e não se responsabiliza pelos
            serviços oferecidos e pelo paamento das despesas nem assegura
            desconto em todos os serviços obrigatoriamente garantidos por plano
            de saúde. Tudo o que o cliente usar ou comprar será por ele pago
            diretamente ao prestador. Confira sempre o valor de desconto nas
            consultas e benefícios.
          </p>
        </div>
      </div>
      <div className="about py-8">
        <div className="container mx-auto flex items-center justify-between">
          <figure>
            <Image src={logo} width={184} height={54} alt="Logotipo MedGold" />
          </figure>
          <div className="text-sm font-medium opacity-40">
            {new Date().getFullYear()} &copy; MedGold. Todos os direitos
            reservados.
          </div>
          <div className="text-sm font-medium">
            <Link
              href="/termos"
              className="text-primary-600 hover:text-primary-800"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
