import { handleStkPushCallback } from "@/contollers/stkCallbackHandler";
import { NextRequest, NextResponse } from "next/server";

// path to handle stkpush
export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const {
      data = {},
      success,
      message,
    } = handleStkPushCallback(requestBody);

    return NextResponse.json({ success, data, message });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
