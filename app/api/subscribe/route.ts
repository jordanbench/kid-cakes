import { NextRequest, NextResponse } from "next/server";
import { appendContact } from "../../../lib/contacts";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, plan } = body as {
    name?: string;
    email?: string;
    plan?: string;
  };

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const contact = appendContact({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    plan: plan ?? "general",
  });

  return NextResponse.json({ success: true, id: contact.id });
}
