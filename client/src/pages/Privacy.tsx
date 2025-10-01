import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>1. Informazioni Raccolte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Villa all'Ombra degli Ulivi raccoglie informazioni quando ci contatti per una prenotazione 
                  o richiesta di informazioni. Le informazioni raccolte includono:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Date di soggiorno desiderate</li>
                  <li>Numero di ospiti</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>2. Utilizzo delle Informazioni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Le informazioni raccolte vengono utilizzate per:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Gestire le prenotazioni e rispondere alle richieste</li>
                  <li>Comunicare informazioni relative al soggiorno</li>
                  <li>Migliorare i nostri servizi</li>
                  <li>Inviare comunicazioni promozionali (solo con tuo consenso)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>3. Cookie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Il nostro sito utilizza cookie tecnici necessari per il funzionamento del sito. 
                  Non utilizziamo cookie di profilazione o di terze parti per scopi pubblicitari.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>4. Condivisione dei Dati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Non vendiamo, scambiamo o trasferiamo a terzi le tue informazioni personali, 
                  eccetto quando necessario per fornire i servizi richiesti o quando richiesto dalla legge.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>5. Sicurezza dei Dati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni 
                  personali dall'accesso non autorizzato, alterazione o distruzione.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>6. I Tuoi Diritti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Ai sensi del GDPR, hai diritto a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti</li>
                  <li>Richiedere la cancellazione dei tuoi dati</li>
                  <li>Opporti al trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contatti</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy, 
                  contattaci a: <a href="mailto:info@webproitalia.com" className="text-primary hover:underline">info@webproitalia.com</a>
                </p>
                <p className="mt-4">
                  <strong>Ultimo aggiornamento:</strong> 1 Gennaio 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
