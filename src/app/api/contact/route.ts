import { transporter, mailOptions } from "@/utils/transporter";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  const { name, email, message }: ContactFormData = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Inquiry from ${name}`,
      text: message,
      html: `
      <div style={{display: flex, flexDirection: column, gap: 16px}}>
      <h1>Inquiry</h1>
      <p>From: ${name}</p>
      <p>Contact: ${email}</p>
      <p>Message: ${message}</p>
      </div>
      `,
    });
    return new NextResponse("Message sent successfully", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
