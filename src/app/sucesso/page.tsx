import Link from 'next/link';
import { Mensagem } from './ext/Mensagem';
import { Button } from '@/components/Button';
import { Home } from 'lucide-react';

export default function Sucesso() {
  return (
    <>
      <div
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/plano-default-background-1.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              'linear-gradient(to right, #3785b399 0%, #3785b399 50%)',
            backdropFilter: 'blur(4px)',
          }}
        />
        <div className="relative flex flex-col items-center gap-4">
          <Mensagem />
          <h1 className="text-4xl text-white font-extrabold mb-4">
            Pedido enviado com sucesso!
          </h1>
          <p className="bg-white bg-opacity-75 rounded-md p-8 text-center text-xl text-primary-600 opacity-80 font-bold w-full max-w-3xl mx-4">
            Recebemos o pedido e estamos aguardando a confirmação do pagamento.
            <br />
            <br />
            Você vai receber um e-mail assim que ele for aprovado, para que a
            gente acompanhe juntos os próximos passos.
          </p>
          <Link href="/">
            <Button color="primary">
              <Home size={16} /> Página inicial
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
