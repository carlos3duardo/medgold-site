import axios from 'axios';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const data = await request.json();

  const cookieStore = cookies();
  const cookieOfertaId = cookieStore.get('medgold:ofertaId');
  const cookieTitular = cookieStore.get('medgold:titular');
  const cookieDependentes = cookieStore.get('medgold:dependentes');
  const cookieAfiliadoId = cookieStore.get('medgold:afiliadoId');

  const ofertaId = cookieOfertaId ? cookieOfertaId.value : null;
  const titular = cookieTitular ? JSON.parse(cookieTitular.value) : null;
  const dependentes = cookieDependentes
    ? JSON.parse(cookieDependentes.value)
    : [];
  const afiliadoId = cookieAfiliadoId ? cookieAfiliadoId.value : null;

  const compra = {
    natureza: 'pf',
    ip: data.ip,
    oferta_id: ofertaId,
    afiliado_id: afiliadoId,
    titular,
    dependentes,
    compra: {
      cartao: data.cartao,
      dados_portador: data.portador,
    },
  };

  // Autenticando-se na API da MedGold.

  const responseAuth = await axios.post(
    `${process.env.MEDGOLD_API_URL}/oauth/token`,
    {
      grant_type: 'client_credentials',
      client_id: process.env.MEDGOLD_API_CLIENT_ID,
      client_secret: process.env.MEDGOLD_API_CLIENT_SECRET,
    },
  );

  const accessToken = responseAuth.data.access_token;

  await axios
    .post(`${process.env.MEDGOLD_API_URL}/ecommerce/pedido`, compra, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(() => {
      return NextResponse.json({
        message: 'Pedido recebido com sucesso.',
      });
    })
    .catch((err) => {
      console.error({ erro: err.response.data });

      return NextResponse.json({
        message: 'Erro ao registrar pedido.',
        error: err.response.data.message,
      });
    });

  return NextResponse.json(compra);
}
