import { safaricomDarajaApi } from "mds-daraja-sdk";
import { NextRequest, NextResponse } from "next/server";

// path to handle stkpush
export async function POST(req: NextRequest) {
  try {
    const { phone, amount } = await req.json();

    const data = await safaricomDarajaApi.intiateC2bStkPush(phone, amount);

    return NextResponse.json({ sucess: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error }), { status: 500 };
  }
}
