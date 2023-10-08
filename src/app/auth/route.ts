import axios from 'axios';
import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

export async function POST() {
  console.info('Autenticando-se na API da MedGold.');

  const responseAuth = await axios.post(
    `${process.env.MEDGOLD_API_URL}/oauth/token`,
    {
      grant_type: 'client_credentials',
      client_id: process.env.MEDGOLD_API_CLIENT_ID,
      client_secret: process.env.MEDGOLD_API_CLIENT_SECRET,
    },
  );

  const responseJson = responseAuth.data;

  return NextResponse.json(responseJson);
}
