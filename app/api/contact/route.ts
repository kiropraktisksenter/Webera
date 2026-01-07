import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validering
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, epost og melding må fylles ut' },
        { status: 400 }
      );
    }

    // Enkel epost-validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig epostadresse' },
        { status: 400 }
      );
    }

    // Send epost
    await sgMail.send({
      to: process.env.CONTACT_EMAIL || 'holthekiropraktikk@gmail.com',
      from: 'noreply@webera.no', // Dette må være verifisert i SendGrid
      replyTo: email,
      subject: `Ny henvendelse fra ${name} via Webera`,
      text: `
Navn: ${name}
Epost: ${email}
Telefon: ${phone || 'Ikke oppgitt'}

Melding:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06B6D4;">Ny henvendelse fra Webera</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Navn:</strong> ${name}</p>
            <p><strong>Epost:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon:</strong> ${phone || 'Ikke oppgitt'}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Melding:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 1px solid #e5e5e5; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Denne meldingen ble sendt via kontaktskjema på webera-eta.vercel.app</p>
        </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: 'Melding sendt!'
    });

  } catch (error: any) {
    console.error('SendGrid error:', error);

    // Mer detaljert feilmelding for debugging
    return NextResponse.json(
      {
        error: 'Kunne ikke sende melding',
        details: error?.response?.body?.errors?.[0]?.message || error.message
      },
      { status: 500 }
    );
  }
}
