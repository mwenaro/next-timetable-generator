import { handleStkPushCallback } from "@/contollers/stkCallbackHandler";
import { NextRequest, NextResponse } from "next/server";

// path to handle stkpush
export async function POST(req: NextRequest) {
  try {
 const requestBody = await req.json()
 const data = handleStkPushCallback(requestBody)

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ sucess:false, error: error.message }), { status: 500 };
  }
}
