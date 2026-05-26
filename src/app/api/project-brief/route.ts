import { NextResponse } from "next/server";
import { formatBriefHtml, validateProjectBrief } from "@/lib/project-brief";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Please send a valid project brief." },
      { status: 400 },
    );
  }

  const validation = validateProjectBrief(body);

  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  if (validation.data.website) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    return NextResponse.json(
      { message: "Project brief routing is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: validation.data.email,
      subject: `Project brief from ${validation.data.name}`,
      html: formatBriefHtml(validation.data),
    });

    if (error) {
      return NextResponse.json(
        { message: "The brief could not be sent. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "The brief could not be sent. Please try again." },
      { status: 502 },
    );
  }
}
