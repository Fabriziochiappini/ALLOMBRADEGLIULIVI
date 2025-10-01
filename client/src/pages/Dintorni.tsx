import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  Landmark, 
  Wine, 
  Palmtree, 
  Utensils,
  Castle,
  Waves,
  Mountain,
  TreePine,
  Music,
  UtensilsCrossed,
  Car,
  Compass
} from "lucide-react";

import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.46_1759071455441.jpeg";
import latianoImg from "@assets/latiano borgo_1759309564405.jpg";
import mesagneImg from "@assets/mesagne_1759309564405.webp";
import francavillaImg from "@assets/francavilla fontana_1759309564404.jpg";
import oriaImg from "@assets/oria città medievale_1759309564402.jpg";
import torreGuacetoImg from "@assets/torre guaceto riserva naturale_1759310477442.jpg";
import carovignoImg from "@assets/marine carovigno_1759309564400.jpg";
import ostuniImg from "@assets/ostuni città bianca_1759309564398.jpg";
import alberobelloImg from "@assets/alberobello_1759309564397.jpg";
import locorotondoImg from "@assets/locorotondo_1759309564396.jpg";
import cisterninoImg from "@assets/cisternino_1759309564395.webp";
import laFeraImg from "@assets/la fera latiano_1759309564393.jpg";
import sagraStacchioddiImg from "@assets/Sagra-stacchioddi-latiano_1759309564392.jpg";
import festaInMasseriaImg from "@assets/image_1759310458303.png";
import prodottiTipiciImg from "@assets/Prodotti_tipici_della_Puglia_1759309564389.png";
import cantineFrantoiImg from "@assets/cantine e frantoi puglia_1759309564383.jpg";

const Dintorni = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={heroImage} 
          alt="Benvenuti nel cuore della Puglia" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Benvenuti nel Cuore della Puglia Autentica
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Una posizione strategica per scoprire borghi medievali, spiagge cristalline e tradizioni millenarie
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              La villa si trova in Contrada Specchia a Latiano, una posizione strategica nel cuore del Brindisino 
              che offre accesso privilegiato alle meraviglie della Puglia centrale. Da qui potrete scoprire borghi 
              medievali, spiagge cristalline, tradizioni millenarie e sapori autentici.
            </p>
          </div>
        </div>
      </section>

      {/* Attrazioni Storiche e Culturali */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Landmark className="w-4 h-4 mr-2" />
                Storia e Cultura
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Attrazioni Storiche e Culturali
              </h2>
            </div>

            {/* Latiano */}
            <Card className="mb-8 hover-elevate">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Castle className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Latiano - Il Borgo degli Imperiali</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-base">
                    <MapPin className="w-4 h-4 mr-1" />
                    Centro città 5 km
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={latianoImg} 
                  alt="Latiano borgo degli Imperiali" 
                  className="rounded-md h-64 w-full object-cover"
                />
                
                <p className="text-muted-foreground leading-relaxed">
                  Il paese ospita il magnifico <strong>Palazzo Imperiali (XII secolo)</strong>, oggi sede di tre importanti musei:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Museo delle Arti e Tradizioni di Puglia</strong> - collezione di oggetti del mondo contadino</li>
                  <li><strong>Museo Ribezzi-Petrosillo</strong> - casa-museo con arredi d'epoca</li>
                  <li><strong>Museo del Sottosuolo "Piero Parenzan"</strong> - percorsi sotterranei urbani</li>
                </ul>

                <div className="pt-4">
                  <p className="font-semibold mb-2 text-foreground">Da non perdere:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Santuario Maria SS. di Cotrino (1627)</Badge>
                    <Badge variant="secondary">Cripta di San Giovanni</Badge>
                    <Badge variant="secondary">Collegiata Santa Maria della Neve</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grid per altre città */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Mesagne */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="flex items-center gap-2">
                      <Castle className="w-6 h-6 text-primary" />
                      Mesagne
                    </CardTitle>
                    <Badge variant="outline">12 km</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Il Castello del Cuore</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={mesagneImg} 
                    alt="Mesagne castello del cuore" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm">
                    Mesagne sorprende con il suo centro storico a forma di cuore e il maestoso Castello medievale 
                    con il caratteristico torrione del XV secolo voluto da Giannantonio Balzo Orsini.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-foreground">Imperdibili:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Centro Storico a cuore</li>
                      <li>Museo del Territorio "Ugo Granafei"</li>
                      <li>Chiesa di Sant'Anna</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Francavilla Fontana */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="flex items-center gap-2">
                      <Castle className="w-6 h-6 text-primary" />
                      Francavilla Fontana
                    </CardTitle>
                    <Badge variant="outline">15 km</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">La Città degli Imperiali</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={francavillaImg} 
                    alt="Francavilla Fontana" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm">
                    Francavilla Fontana custodisce il magnifico Castello Imperiali, fortezza medievale simbolo della città.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-foreground">Da visitare:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Basilica del Santissimo Rosario</li>
                      <li>Balconi barocchi</li>
                      <li>Torre dell'Orologio</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Oria */}
              <Card className="hover-elevate md:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="flex items-center gap-2">
                      <Castle className="w-6 h-6 text-primary" />
                      Oria - La Città Medievale
                    </CardTitle>
                    <Badge variant="outline">18 km</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={oriaImg} 
                    alt="Oria città medievale" 
                    className="rounded-md h-64 w-full object-cover"
                  />
                  <p className="text-muted-foreground">
                    Oria conserva intatto il fascino medievale con il castello svevo e la celebre Cripta delle Mummie 
                    sotto la Basilica Cattedrale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Centro storico arroccato</Badge>
                    <Badge variant="secondary">Castello Svevo</Badge>
                    <Badge variant="secondary">Cripta dell'Arciconfraternita (XVI sec)</Badge>
                    <Badge variant="secondary">Basilica Cattedrale</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mare e Natura */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Waves className="w-4 h-4 mr-2" />
                Mare e Natura
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Mare e Natura
              </h2>
            </div>

            {/* Torre Guaceto */}
            <Card className="mb-6 hover-elevate">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Waves className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-2xl">Torre Guaceto - Riserva Naturale</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Una delle 10 spiagge più belle d'Europa</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-base">25 km</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={torreGuacetoImg} 
                  alt="Torre Guaceto riserva naturale" 
                  className="rounded-md h-72 w-full object-cover"
                />
                <p className="text-muted-foreground leading-relaxed">
                  Area Marina Protetta con 2.200 ettari di natura incontaminata.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Caratteristiche:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Sabbia bianca e dorata finissima</li>
                      <li>Acque cristalline turchesi</li>
                      <li>3 km di spiagge naturali libere</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Servizi:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Praterie di posidonia</li>
                      <li>Servizio trenino</li>
                      <li>Noleggio biciclette</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carovigno Marine */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <Palmtree className="w-6 h-6 text-primary" />
                    Carovigno e le Sue Marine
                  </CardTitle>
                  <Badge variant="outline">20 km</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={carovignoImg} 
                  alt="Marine di Carovigno" 
                  className="rounded-md h-56 w-full object-cover"
                />
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-card/50 rounded-md">
                    <p className="font-semibold text-foreground">Lido Specchiolla</p>
                    <p className="text-sm text-muted-foreground">Sabbia bianca, servizi completi</p>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-md">
                    <p className="font-semibold text-foreground">Pantanagianni</p>
                    <p className="text-sm text-muted-foreground">Ambiente naturale</p>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-md">
                    <p className="font-semibold text-foreground">Sabbia d'Oro</p>
                    <p className="text-sm text-muted-foreground">Ideale per famiglie</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  <strong>Bonus:</strong> Castello Dentice di Frasso - fortificazione del XII secolo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ostuni */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover-elevate">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Mountain className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-3xl">Ostuni - La Città Bianca</CardTitle>
                      <p className="text-muted-foreground mt-1">La perla bianca della Puglia</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-base">27 km</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={ostuniImg} 
                  alt="Ostuni la città bianca" 
                  className="rounded-md h-80 w-full object-cover"
                />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ostuni domina la valle degli ulivi dalla sua collina a 200m sul mare. Il centro storico medievale 
                  tutto bianco è un labirinto incantevole di vicoli, scalinate e piazzette.
                </p>
                <div>
                  <p className="font-semibold mb-3 text-foreground text-lg">Imperdibili:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Centro storico medievale</Badge>
                    <Badge variant="secondary">Cattedrale di Santa Maria Assunta (XV sec)</Badge>
                    <Badge variant="secondary">Piazza della Libertà</Badge>
                    <Badge variant="secondary">Colonna di Sant'Oronzo</Badge>
                    <Badge variant="secondary">Museo delle Civiltà Preclassiche</Badge>
                    <Badge variant="secondary">Porta San Demetrio</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valle d'Itria */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <TreePine className="w-4 h-4 mr-2" />
                Valle d'Itria
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Valle d'Itria - La Valle dei Trulli
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                La magica Valle d'Itria con i suoi borghi patrimonio dell'umanità (35-45 km)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Alberobello */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="w-6 h-6 text-primary" />
                      Alberobello
                    </CardTitle>
                    <Badge variant="outline">45 km</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={alberobelloImg} 
                    alt="Alberobello trulli UNESCO" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                  <Badge variant="default" className="w-full justify-center">UNESCO Patrimonio dell'Umanità</Badge>
                  <p className="text-muted-foreground text-sm">
                    I Trulli UNESCO dal 1996. Un'esperienza unica tra le iconiche costruzioni coniche in pietra.
                  </p>
                  <div className="space-y-1 text-sm">
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Rioni Monti e Aia Piccola</li>
                      <li>Trullo Sovrano</li>
                      <li>Casa Pezzolla</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Locorotondo */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="w-6 h-6 text-primary" />
                      Locorotondo
                    </CardTitle>
                    <Badge variant="outline">40 km</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={locorotondoImg} 
                    alt="Locorotondo borgo più bello d'Italia" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                  <Badge variant="default" className="w-full justify-center">Borghi più belli d'Italia</Badge>
                  <p className="text-muted-foreground text-sm">
                    Centro storico circolare con l'architettura tradizionale delle "cummerse" (tetti spioventi).
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Celebre per i vini bianchi DOC e le atmosfere suggestive delle sue vie.
                  </p>
                </CardContent>
              </Card>

              {/* Cisternino */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="w-6 h-6 text-primary" />
                      Cisternino
                    </CardTitle>
                    <Badge variant="outline">35 km</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={cisterninoImg} 
                    alt="Cisternino borgo medievale" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                  <Badge variant="default" className="w-full justify-center">Borgo Medievale Autentico</Badge>
                  <p className="text-muted-foreground text-sm">
                    Famoso per le macellerie-bracerie tradizionali dove scegliere la carne e gustarla alla brace.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Centro storico perfettamente conservato, tra i più autentici della valle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Eventi e Tradizioni */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Eventi e Tradizioni
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Eventi Annuali e Tradizioni
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* La Fera */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Music className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>La Fera</CardTitle>
                      <p className="text-sm text-muted-foreground">Settembre/Ottobre</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={laFeraImg} 
                    alt="La Fera di Latiano" 
                    className="rounded-md h-40 w-full object-cover"
                  />
                  <Badge variant="outline">Dal 1866</Badge>
                  <p className="text-muted-foreground">
                    La tradizionale fiera di Latiano che celebra "Suoni, Sapori e Tradizioni" con mercatini, 
                    spettacoli musicali e degustazioni enogastronomiche.
                  </p>
                </CardContent>
              </Card>

              {/* Sagra Stacchioddi */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Sagra ti li Stacchioddi</CardTitle>
                      <p className="text-sm text-muted-foreground">Ottobre</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={sagraStacchioddiImg} 
                    alt="Sagra degli Stacchioddi Latiano" 
                    className="rounded-md h-40 w-full object-cover"
                  />
                  <Badge variant="outline">47ª edizione</Badge>
                  <p className="text-muted-foreground">
                    La sagra più attesa dell'anno in Piazza Umberto I, ristorante a cielo aperto dedicato 
                    agli iconici stacchioddi (orecchiette locali).
                  </p>
                </CardContent>
              </Card>

              {/* Festa in Masseria */}
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Music className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Festa in Masseria</CardTitle>
                      <p className="text-sm text-muted-foreground">Agosto</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={festaInMasseriaImg} 
                    alt="Festa in Masseria evento tradizionale" 
                    className="rounded-md h-40 w-full object-cover"
                  />
                  <Badge variant="outline">32ª edizione</Badge>
                  <p className="text-muted-foreground">
                    Evento unico presso Masseria Marangiosa con canti e balli tradizionali, musiche popolari 
                    pugliesi e atmosfera autentica di masseria.
                  </p>
                </CardContent>
              </Card>

              {/* Mani in Pasta & Cinema */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UtensilsCrossed className="w-6 h-6 text-primary" />
                    Altri Eventi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground">Mani in Pasta</p>
                      <p className="text-sm text-muted-foreground">
                        Laboratorio dedicato alla preparazione degli stacchioddi fatti a mano, 
                        per imparare l'arte della pasta tradizionale pugliese.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Cinema al Chiaro di Luna</p>
                      <p className="text-sm text-muted-foreground">
                        Estate - Proiezioni cinematografiche nel suggestivo Chiostro del Polo Museale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enogastronomia */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Wine className="w-4 h-4 mr-2" />
                Enogastronomia
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Tradizioni Enogastronomiche
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wine className="w-6 h-6 text-primary" />
                    Prodotti Tipici Locali
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={prodottiTipiciImg} 
                    alt="Prodotti tipici pugliesi" 
                    className="rounded-md h-48 w-full object-cover mb-4"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">DOP</Badge>
                      <span className="text-muted-foreground">Olio extravergine d'oliva dalle secolari masserie del territorio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">DOC</Badge>
                      <span className="text-muted-foreground">Vini: Primitivo, Negroamaro, Verdeca</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">IGP</Badge>
                      <span className="text-muted-foreground">Stacchioddi - orecchiette tradizionali di Latiano</span>
                    </li>
                    <li className="text-muted-foreground">• Focaccia barese e prodotti da forno artigianali</li>
                    <li className="text-muted-foreground">• Formaggi: burrata, stracciatella, ricotta forte</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wine className="w-6 h-6 text-primary" />
                    Cantine e Frantoi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={cantineFrantoiImg} 
                    alt="Cantine e frantoi della Puglia" 
                    className="rounded-md h-48 w-full object-cover mb-4"
                  />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Il territorio di Latiano è punteggiato da masserie storiche che producono olio e vino 
                    secondo antiche tradizioni.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Molte di queste offrono <strong>visite guidate e degustazioni</strong>, permettendo di scoprire 
                    i segreti della produzione artigianale pugliese.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Posizione Strategica */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Car className="w-4 h-4 mr-2" />
                Posizione
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Posizione Strategica
              </h2>
              <p className="text-muted-foreground mt-4">
                La villa in Contrada Specchia gode di una posizione privilegiata
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Distanze Principali
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-foreground">Latiano centro</span>
                      <Badge variant="secondary">5 km</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-foreground">Brindisi</span>
                      <Badge variant="secondary">25 km</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-foreground">Aeroporto del Salento</span>
                      <Badge variant="secondary">30 km</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-foreground">Lecce</span>
                      <Badge variant="secondary">45 km</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-foreground">Bari</span>
                      <Badge variant="secondary">100 km</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Matera</span>
                      <Badge variant="secondary">90 km</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-6 h-6 text-primary" />
                    Collegamenti
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Strade Principali</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>SS 7 Via Appia</strong> - collegamento diretto con Brindisi e Lecce</li>
                        <li>• <strong>SS 379</strong> - accesso veloce alle marine adriatiche</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Trasporti Pubblici</p>
                      <p className="text-muted-foreground">
                        Stazione ferroviaria di Latiano sulla linea Bari-Lecce
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-md">
                      <p className="text-sm text-foreground">
                        <strong>Aeroporto del Salento (Brindisi):</strong> 30 km - Collegamenti con tutta Europa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Esperienze Uniche */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Compass className="w-4 h-4 mr-2" />
                Esperienze
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Esperienze Uniche
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="w-6 h-6 text-primary" />
                    Natura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sentieri della Riserva di Torre Guaceto</li>
                    <li>• Percorsi ciclabili tra uliveti secolari</li>
                    <li>• Birdwatching nelle zone umide costiere</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="w-6 h-6 text-primary" />
                    Archeologia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Parco Archeologico di Muro Tenente - città messapica</li>
                    <li>• Specchia Miano - tumulo funerario messapico</li>
                    <li>• Torre di età ellenistica in contrada Asciulo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="w-6 h-6 text-primary" />
                    Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Terme di Torre Canne (30 km)</li>
                    <li>• Spa e centri benessere nelle masserie di lusso</li>
                    <li>• Spiagge attrezzate con servizi wellness</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Utili */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Informazioni Utili</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Stagionalità
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li><strong>Primavera/Estate:</strong> ideale per mare e eventi all'aperto</li>
                    <li><strong>Autunno:</strong> perfetto per sagre, raccolta olive e temperature miti</li>
                    <li><strong>Inverno:</strong> scoperta dei borghi e tradizioni natalizie</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Pro Loco Latiano
                  </h3>
                  <p className="text-muted-foreground ml-7">
                    Organizza visite guidate ed eventi culturali<br />
                    Website: <a href="http://www.prolocolatiano.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.prolocolatiano.it</a>
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-md text-center">
                  <p className="text-foreground leading-relaxed">
                    <strong className="text-lg">La villa in Contrada Specchia</strong> rappresenta il punto di partenza perfetto 
                    per scoprire l'autentica Puglia, dove storia millenaria, natura incontaminata e tradizioni viventi 
                    si fondono in un'esperienza indimenticabile.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dintorni;
