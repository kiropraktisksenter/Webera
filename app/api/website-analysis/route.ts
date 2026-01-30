import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email, websiteUrl } = await request.json();

    // Validering
    if (!email || !websiteUrl) {
      return NextResponse.json(
        { error: 'E-post og nettside-URL må fylles ut' },
        { status: 400 }
      );
    }

    // Enkel epost-validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      );
    }

    // Enkel URL-validering
    try {
      new URL(websiteUrl);
    } catch {
      return NextResponse.json(
        { error: 'Ugyldig nettside-URL. Husk å inkludere https://' },
        { status: 400 }
      );
    }

    // Send epost til Webera
    const msg = {
      to: 'post@webera.no',
      from: {
        email: 'post@webera.no',
        name: 'Webera Nettside-analyse'
      },
      replyTo: {
        email: email,
        name: email
      },
      subject: `Ny analyseforespørsel: ${websiteUrl}`,
      text: `
Ny forespørsel om gratis nettside-analyse

E-post: ${email}
Nettside: ${websiteUrl}

---
Husk å kjøre analyse og sende rapport til kunden!
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06B6D4;">Ny forespørsel om nettside-analyse</h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>E-post:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Nettside:</strong> <a href="${websiteUrl}" target="_blank">${websiteUrl}</a></p>
          </div>

          <div style="background: #e0f7fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06B6D4;">
            <h3 style="margin-top: 0; color: #0891b2;">Neste steg:</h3>
            <ol style="margin: 0; padding-left: 20px;">
              <li>Kjør analyse av nettsiden</li>
              <li>Generer rapport</li>
              <li>Send rapport til ${email}</li>
            </ol>
          </div>

          <hr style="border: 1px solid #e5e5e5; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Denne forespørselen ble sendt via "Gratis nettside-analyse"-skjemaet på webera.no
          </p>
        </div>
      `
    };

    console.log('Sender analyse-forespørsel til:', msg.to);
    const response = await sgMail.send(msg);
    console.log('SendGrid response:', response);

    return NextResponse.json({
      success: true,
      message: 'Forespørsel mottatt!'
    });

  } catch (error: any) {
    console.error('SendGrid error:', error);
    console.error('SendGrid response:', error?.response?.body);

    return NextResponse.json(
      {
        error: 'Kunne ikke sende forespørsel',
        details: error?.response?.body?.errors?.[0]?.message || error.message,
        debugInfo: process.env.NODE_ENV === 'development' ? error?.response?.body : undefined
      },
      { status: 500 }
    );
  }
}
