import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message || typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }
    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.json({ error: "Server not configured" }, { status: 503 });
    }
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim().slice(0, 500),
      email: email.trim().slice(0, 500),
      message: message.trim().slice(0, 5000),
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
