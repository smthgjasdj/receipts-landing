import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const browserId = request.nextUrl.searchParams.get("browserId");
  const version = request.nextUrl.searchParams.get("version");
  const from = request.nextUrl.searchParams.get("from");

  if (!browserId || !version || !from) {
    return NextResponse.json({ error: "browserId, version and from are required" }, { status: 400 });
  }

  const backend = await fetch(
    `${process.env.API_URL}/m/update?${new URLSearchParams({ uuid: browserId }).toString()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ new_version: version, previous_version: from }),
    }
  );

  if (!backend.ok) {
    return NextResponse.json({ error: "Browser signal failed" }, { status: 500 });
  }

  const result = await backend.json();
  if (result.error) {
    return NextResponse.json({ error: "Browser signal failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
