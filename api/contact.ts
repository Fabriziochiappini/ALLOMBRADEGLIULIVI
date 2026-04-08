import sgMail from "@sendgrid/mail";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
};

function json(res: any, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function getBody(req: any): ContactBody {
  const body = req.body;
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body as ContactBody;
}

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  const { name, email, phone, checkIn, checkOut, guests, message } = getBody(req);

  if (!name || !email || !message) {
    json(res, 400, { error: "Nome, email e messaggio sono obbligatori" });
    return;
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    json(res, 500, { error: "Email service not configured" });
    return;
  }

  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "info@webproitalia.com";
  const ownerToEmail = process.env.CONTACT_OWNER_EMAIL || "antonelloprete10@gmail.com";

  sgMail.setApiKey(apiKey);

  const ownerEmail = {
    to: ownerToEmail,
    from: fromEmail,
    replyTo: email,
    subject: `Nuova Richiesta Informazioni - ${name}`,
    html: `
      <h2>Nuova Richiesta di Informazioni</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ""}
      ${checkIn ? `<p><strong>Check-in:</strong> ${checkIn}</p>` : ""}
      ${checkOut ? `<p><strong>Check-out:</strong> ${checkOut}</p>` : ""}
      ${guests ? `<p><strong>Numero Ospiti:</strong> ${guests}</p>` : ""}
      <p><strong>Messaggio:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>Puoi rispondere direttamente a questa email per contattare ${name}</em></p>
    `,
  };

  const customerEmail = {
    to: email,
    from: fromEmail,
    subject: "Richiesta Ricevuta - All'Ombra degli Ulivi",
    html: `
      <h2>Grazie per averci contattato!</h2>
      <p>Ciao ${name},</p>
      <p>Abbiamo ricevuto la tua richiesta di informazioni e ti risponderemo al più presto.</p>
      <p><strong>Riepilogo della tua richiesta:</strong></p>
      ${checkIn ? `<p><strong>Check-in:</strong> ${checkIn}</p>` : ""}
      ${checkOut ? `<p><strong>Check-out:</strong> ${checkOut}</p>` : ""}
      ${guests ? `<p><strong>Numero Ospiti:</strong> ${guests}</p>` : ""}
      <p><strong>Messaggio:</strong></p>
      <p>${message}</p>
      <hr>
      <p>Nel frattempo, puoi contattarci anche su WhatsApp al <strong>+39 377 393 8627</strong></p>
      <p>A presto!</p>
      <p><em>All'Ombra degli Ulivi</em></p>
    `,
  };

  try {
    await sgMail.send(ownerEmail);
    await sgMail.send(customerEmail);
    json(res, 200, { success: true, message: "Email inviate con successo" });
  } catch {
    json(res, 500, { error: "Errore nell'invio dell'email" });
  }
}

