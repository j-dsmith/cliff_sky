import { transporter, mailOptions } from "@/utils/transporter";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  const { name, subject, message }: ContactFormData = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject,
      text: message,
      html: `<h1>Test</h1>`,
    });
    return new NextResponse("Message sent successfully", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }

  return new NextResponse("this is a journey");
}
