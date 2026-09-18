import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const browserId = request.nextUrl.searchParams.get("browserId");
  if (!browserId) {
    return NextResponse.json({ error: "browserId is required" }, { status: 400 });
  }

  try {
    await fetch(
      `${process.env.API_URL}/m/uninstall?${new URLSearchParams({ uuid: browserId }).toString()}`,
      { method: "POST" }
    );
  } catch {
    // the visitor still gets their goodbye page
  }

  return NextResponse.json({ success: true });
}
