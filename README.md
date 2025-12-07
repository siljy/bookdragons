# BookDragons nettbutikk

Dette er en nettbutikk for den fiktive bruktbokhandelen BookDragons.

Her kan kunder utforske hvilke bøker BookDragons har, finne bøker innenfor en bestemt sjanger eller forfatter, legge de til i en handlekurv og bestille bøkene.

På admin-siden kan ansatte i BookDragons legge til bøker med forfatter, sjanger, omslag, lagerbeholdning og passende aldersgruppe, og dermed ha oversikt over hvilke forfattere og sjangre de tilbyr. Her får de også en oversikt over bestillinger som kommer inn, slik at de kan finne fram bøkene og gi beskjed til kunden om at de er klare til å hentes.

## Tekniske verktøy

- Rammeverk: React og Next
- Språk: TypeScript
- CMS: Payload
- Design: CSS-moduler
- Store: Zustand

## Hvordan kjøre programmet:
1. Klon repositoriet 
2. Kjør følgende kommandoer i terminalen

    ```bash
    npm install
    npm run dev
    ```

Åpne localhost/3000, eller den porten som foreslås.

## Hvordan programmet fungerer

### Mappestruktur
#### Viktig å merke seg: 
Under (frontend) er det delt opp i to mapper: with-cart og without-cart. Det er fordi noen sider skal ha en handlekurven tilgjengelig, og noen sider skal ikke det. Det er for å holde det ryddig visuelt for kunden når de skal se over bestillingen sin, og ikke rote til bestillingen som sendes inn ved at det plutselig gjøres endringer i handlekurven.


```bash
├── src
│   ├── app / routing og sider
│   │   ├── (frontend)
│   │   │   ├── (with-cart) / sider som har synlig handlekurv
│   │   │   │   ├── bok
│   │   │   │   │   └── [bookSlug] / spesifikk bok-side
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── forfatter
│   │   │   │   │   ├── [authorSlug]
│   │   │   │   │   │   └── page.tsx / spesifikk forfatterside
│   │   │   │   │   └── page.tsx / side med alle forfattere
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx / forside
│   │   │   │   ├── sjanger
│   │   │   │   │   ├── [genreSlug]
│   │   │   │   │   │   └── page.tsx / spesifikk sjangerside
│   │   │   │   │   └── page.tsx / side med alle sjangre
│   │   │   │   └── styles.css
│   │   │   ├── (without-cart) / sider uten handlekurv
│   │   │   │   ├── bekreftelse
│   │   │   │   │   └── page.tsx / ordrebekreftelse
│   │   │   │   ├── bestilling
│   │   │   │   │   └── page.tsx / bestillingsside
│   │   │   │   ├── layout.tsx
│   │   │   │   └── styles.css
│   │   │   ├── layout.tsx
│   │   │   └── styles.css
│   │   ├── api
│   │   │   └── orders
│   │   │       └── route.ts / route for å sende bestilling til payload
│   ├── collections
│   │   ├── Authors.ts / forfattere
│   │   ├── BookCovers.ts  / bokomslag (bilder)
│   │   ├── Books.ts / bøker
│   │   ├── Genres.ts / sjangre
│   │   ├── Media.ts / kommer fra template, ikke brukt
│   │   ├── Orders.ts / bokbestillinger
│   │   └── Users.ts / kommer fra template, ikke brukt
│   ├── components
│   │   ├── AddToCartButton
│   │   │   └── AddToCartButton.tsx
│   │   ├── BookCard
│   │   │   ├── BookCard.module.css
│   │   │   └── BookCard.tsx
│   │   ├── Button
│   │   │   ├── Button.module.css
│   │   │   └── Button.tsx
│   │   ├── Cart
│   │   │   ├── Cart.module.css
│   │   │   └── Cart.tsx
│   │   ├── CartItem
│   │   │   ├── CartItem.module.css
│   │   │   └── CartItem.tsx
│   │   ├── DecreaseButton
│   │   │   └── DecreaseButton.tsx
│   │   ├── ErrorMessage
│   │   │   ├── ErrorMessage.module.css
│   │   │   └── ErrorMessage.tsx
│   │   ├── FilterItem
│   │   │   ├── FilterItem.module.css
│   │   │   └── FilterItem.tsx
│   │   ├── FilterSection
│   │   │   ├── FilterSection.module.css
│   │   │   └── FilterSection.tsx
│   │   ├── IncreaseButton
│   │   │   └── IncreaseButton.tsx
│   │   ├── MinimalBookCard
│   │   │   ├── MinimalBookCard.module.css
│   │   │   └── MinimalBookCard.tsx
│   │   ├── NavBar
│   │   │   ├── NavBar.module.css
│   │   │   └── NavBar.tsx
│   │   ├── OrderForm
│   │   │   ├── OrderForm.module.css
│   │   │   └── OrderForm.tsx
│   │   ├── PresentationArticle
│   │   │   ├── PresentationArticle.module.css
│   │   │   └── PresentationArticle.tsx
│   │   └── RemoveFromCartButton
│   │       └── RemoveFromCartButton.tsx
│   ├── payload-types.ts
│   ├── payload.config.ts
│   ├── store
│   │   └── cartStore.ts / store for handlekurv (persistent lagring, justere antall, legge til og tømme handlekurv)
│   ├── types
│   │   ├── cart.ts / typer brukt i handlekurv
│   │   └── filter.ts / typer brukt til filter
│   └── utils
│       └── typeGuards.ts / typeguards for bilder, forfattere og sjangre

```

### Komponenter

- #### AddToCartButton

  Denne komponenten bruker Button-komponentet, men sender med funksjonen addToCart fra cartStore for å ikke blande klient- og serverkomponenter.

- #### BookCard

  BookCard rendrer et detaljert kort for bøkene, og brukes på forsiden i nettbutikken.

- #### Button

  Button brukes som en standardknapp. Ved å legge inn variant kan man bestemme om det er en primær, sekundær eller disabled knapp. Prosjektet har ikke brukt sekundærknapp, men det er lagt til for framtidig bruk.

- #### Cart

  Cart er handlekurven og rendrer CartItem, samt annen informasjon som totalsum.

- #### CartItem
  CartItem rendrer en bok med informasjon om tittel, antall og pris. I tillegg er det knapper som lar brukeren endre antall (øke og minke, samt fjerne boka helt fra handlekurven)

- #### DecreaseButton
  Knapp som bruker decreaseCart fra cartStore til å minke antall i handlekurv

- #### ErrorMessage
  Komponent som kan brukes til å vise feilmeldinger om en side ikke finnes, eller ordren ikke gikk i gjennom. Den har med en lenke til alle bøkene for å henvise kunden dit.

- #### FilterItem
  FilterItem har label og input som brukes til filtrering av sjanger og forfatter.

- #### FilterSection
  FilterSection lager URL basert på input-feltet som er blitt valgt, og redirecter siden til denne URLen slik at kun bøker med valgt filter vises.

- #### IncreaseButton
  Knapp som bruker increaseCart fra cartStore til å øke antall i handlekurv

- #### MinimalBookCard
  Et enklere bok-kort enn BookCard for å vise fram bøkene som tilhører en bestemt sjanger eller forfatter. Komponentet lenker også videre til selve siden for boka med dynamisk routing.

- #### NavBar
  En veldig enkel navigasjonsmeny det ikke er gjort så veldig mye utav. Den lenker til hovedsiden (alle bøker), og siden med alle forfattere og siden med alle sjangre.

- #### OrderForm
  OrderForm henter det som ligger i handlekurven og samler det i et objekt med kundeinformasjon. Kundeinformasjonen kommer fra input-feltene, hvor verdien lagres. Dette sendes til Payload med POST.

- #### PresentationArticle
  PresentationArticle brukes både til å vise en enkel forfatter og en enkel sjanger. Den tar imot navnet på forfatteren/sjangeren, presentasjonen, og bøker som tilhører. Bøkene sendes som props til MinimalBookCard.

- #### RemoveFromCartButton
  Knapp som bruker removeFromCart fra cartStore, og tømmer hele handlekurven. 

### Innholdssamlinger

- #### Authors

  Authors er forfattere admin kan legge inn. Her legges det inn navn, en kort presentasjon og slug (brukes til dynamisk routing)

- #### BookCovers

  BookCovers er bilder som admin kan laste opp og vise tilstanden av omslaget til boken, samt alt-tekst. Den genererer tre størrelser ut fra sharp, i tillegg til den som lastes opp, slik at man kan velge mellom thumbnail, mobil og desktop størrelser. Prosjektet har enda ikke brukt desktop-størrelsen, da mobil-størrelsen viste seg å være passelig for nå. Skal desktop-størrelsene brukes må det settes opp en typeguard for dette i utils/typeGuards.ts.

  På grunn av opphavsrett er det brukt et generisk bilde av en bok hentet fra unsplash.com, for å ha noe å jobbe med. Når admin-brukeren tar bilder av omslaget er det fortsatt lett å legge dette inn her og koble det opp mot bøker.

- #### Books

  Books er bøker som admin legger til. Denne innholdssamlingen har relasjoner til Authors, BookCovers og Genres, slik at det er enkelt for admin å koble opp bok mot forfatter, sjanger og omslag som hører til.

- #### Genres

  Genres er sjangre admin kan legge inn. Her legges det inn navn på sjanger, en kort presentasjon og slug (brukes til dynamisk routing)

- #### Orders

  I Orders lagres bestillingene som kunder sender inn. En bestilling består av informasjon om bøker (tittel og antall), og kundeinformasjon (navn og epost). Kundeinformasjonen kommer fra bestillingsskjemaet kunden fyller ut før bestillingen sendes.

- #### Media og Users
  Disse kommer fra Payload sin template og er ikke blitt brukt i dette prosjektet. De er beholdt for framtidig bruk (om flere brukere skal legges til utenom admin, eller om de trenger en mediemappe)

## Annen informasjon
### styles.css og CSS-moduler
Det er brukt CSS-moduler for å style komponenter, mens sidene er stylet med styles.css. Disse "globale" CSS-filene er importert i layout.tsx, så de gjelder for alle sidene som er i samme mappe. Noen ganger har det vært mer fornuftig å bruke klassenavn i styles.css istedet for å lage en egen CSS-modul for et spesifikt komponent (hvis det f.eks. er veldig lite kode som hadde havnet i den modulen uansett). 

## Kilder
### Typeguarding
Brukt litt av framgangsmåten fra MinGA: https://lms.gokstadakademiet.no/course/view.php?id=349#module-16132 (Under Bildebehandling med Payload og Sharp/Hente frem bilder i Frontend)

For å gjøre det enda med typesikkert har jeg brukt en in-operator istedet for any: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in  


### Tekstinnhold
For å ha litt data å jobbe med har jeg brukt KI til å lage tekstene om sjangre og forfattere for meg, slik at jeg kunne bruke tid på programmering isetedet