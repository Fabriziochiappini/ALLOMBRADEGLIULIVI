import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Termini di Servizio
            </h1>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>1. Accettazione dei Termini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Utilizzando questo sito web e prenotando un soggiorno presso Villa all'Ombra degli Ulivi, 
                  accetti di essere vincolato dai presenti termini di servizio.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>2. Prenotazioni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Le prenotazioni sono confermate solo dopo il pagamento di un acconto del 30% del totale. 
                  Il saldo deve essere versato all'arrivo o secondo le modalità concordate.
                </p>
                <p>
                  <strong>Check-in:</strong> dalle 15:00<br />
                  <strong>Check-out:</strong> entro le 10:00
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>3. Cancellazioni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Politica di cancellazione:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancellazione gratuita fino a 30 giorni prima dell'arrivo</li>
                  <li>Cancellazione tra 30-15 giorni: rimborso del 50% dell'acconto</li>
                  <li>Cancellazione entro 15 giorni: nessun rimborso</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>4. Regole della Casa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vietato fumare all'interno della villa</li>
                  <li>Animali domestici ammessi previo accordo</li>
                  <li>Rispetto del vicinato e orari di silenzio (23:00 - 08:00)</li>
                  <li>Capacità massima: 8 ospiti</li>
                  <li>Feste o eventi non autorizzati non sono permessi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>5. Responsabilità</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Gli ospiti sono responsabili per eventuali danni alla proprietà durante il soggiorno. 
                  Potrebbe essere richiesto un deposito cauzionale rimborsabile.
                </p>
                <p>
                  Villa all'Ombra degli Ulivi non è responsabile per oggetti personali persi o rubati 
                  durante il soggiorno.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>6. Servizi Inclusi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>WiFi gratuito</li>
                  <li>Piscina privata</li>
                  <li>Parcheggio privato</li>
                  <li>Aria condizionata</li>
                  <li>Cucina completamente attrezzata</li>
                  <li>Biancheria e asciugamani</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>7. Modifiche ai Termini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con data di aggiornamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contatti</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Per domande sui termini di servizio, contattaci:<br />
                  <strong>Email:</strong> <a href="mailto:info@webproitalia.com" className="text-primary hover:underline">info@webproitalia.com</a><br />
                  <strong>Telefono:</strong> <a href="tel:+393773938627" className="text-primary hover:underline">+39 377 393 8627</a><br />
                  <strong>WhatsApp:</strong> +39 377 393 8627
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
