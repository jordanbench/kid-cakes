import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD ?? "kidcakes2025";

  if (!auth || !auth.startsWith("Basic ")) {
    return new NextResponse(null, {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Kid Cakes Admin"' },
    });
  }

  const decoded = atob(auth.slice(6));
  const colonIdx = decoded.indexOf(":");
  const username = decoded.slice(0, colonIdx);
  const password = decoded.slice(colonIdx + 1);

  if (username !== "admin" || password !== adminPassword) {
    return new NextResponse(null, {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Kid Cakes Admin"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
