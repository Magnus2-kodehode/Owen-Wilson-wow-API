export default function Documentation() {

  return (
    <div className="main">
      <div className="container-main">
        <p className="title">
          Dokumentasjon
        </p>
        <div className="container-text">
          <p className="text">
            Wow? Her er dokumentasjonen for prosjektet, inkludert oppgave-tekst, plan og egenvurdering.
          </p>
        </div>
        <hr />
        <div className="container-text">
          <p className="title2">Oppgave</p>
          <p className="title4">Hva er "Owen Wilson Wow"-APIet?</p>
          <p className="text">
            <a className="link" href="https://owen-wilson-wow-api.onrender.com/">
              "Owen Wilson Wow"-APIet
            </a> er et API som lar eksterne hente ut informasjon om film- og TV-seriescener 
            hvor <a className="link" href="https://www.imdb.com/name/nm0005562/">
              Owen Wilson
            </a> sier "Wow".
            <br />
            <a className="link" href="https://wow.readme.io/reference/random">
              Dokumentasjonen
            </a> gir raskt oversikt over hva som er mulig å få til.
          </p>
          <p className="title4">
            Hvorfor eksisterer "Owen Wilson Wow"-APIet?
          </p>
          <p className="text">
            Usikkert, men det er sikkert at en av faktorene er at Owen Wilson eksisterer.
          </p>
          <br />
          <p className="title3">
            Oppgave 1: Finn et bruksformål
          </p>
          <p className="text">
            Finn ut hva du kan bruke APIet til, dvs. hva kan du lage, produsere, ved hjelp av dette APIet?
            En enkel "vis et tilfeldig wow"-webside/webapp er flott, men ser du kanskje for deg noe mer? En kreativ spinn? Noe helt annerledes?
            Dokumenter idéen din på en måte effektivt formidler hva du tenker å produsere.
          </p>
          <br />
          <p className="title3">
            Oppgave 2: Planlegg
          </p>
          <p className="text">
            Planlegg prosjektet fra idé til produkt.
            <br /><br />
            <b>Beskriv:</b>
            <dl>
              <li>Hvilke verktøy du kommer til å bruke</li>
              <li>Hvilke komponenter (evt. moduler) som må lages</li>
              <li>Hvilken rekkefølge du tenker å utføre arbeidet, og hvorfor</li>
              <li>Estimer hvor lang tid du kommer til å bruke på de forskjellige delene av prosjektet</li>
              <li>Andre tanker og notater rundt prosjektet</li>
            </dl>
          </p>
          <br />
          <p className="title3">
            Oppgave 3: Utførelse
          </p>
          <p className="text">
            Start på den praktiske delen av prosjektet, i.e. produksjon.
            Hvis det er deler av prosjektet hvor du støter på utfordringer, eller hvis du må avvike fra planen din, ta notater!
            Dette vil forenkle neste oppgave.
          </p>
          <br />
          <p className="title3">
            Oppgave 4: Egenvurdering
          </p>
          <p className="text">
            Etter at du har ferdigstilt produktet, eller ser at du har for lite tid til å fullføre, skal du utføre en vurdering av:
            <br /><br />
            <b>Innsats:</b>
            <dl>
              <li>Var det deler din innsats under utførelsen du var mer fornøyd med enn andre?</li>
              <li>Hvorfor var du mer fornøyd med den/disse delene?</li>
              <li>Hva kan du gjøre for å bli like fornøyd med de andre delene, og er du motivert til dette?</li>
            </dl>
            <br />
            <b>Planlegging:</b>
            <dl>
              <li>Var det deler av planen du var mer fornøyd med enn andre?</li>
              <li>Hvorfor var du mer fornøyd med den/disse delene?</li>
              <li>Er det spesifikke deler av planleggingen du ville gjort annerledes nå? Hvis ja, forklar.</li>
            </dl>
            <br />
            <b>Til slutt:</b>
            <dl>
              <li>Ta deg tid til å planlegge godt. Planlegging er kanskje det viktigste ikke-teknologiske verktøyet innenfor utviklerfaget.</li>
              <li>Skulle du se at du ikke har tid til å fullføre alle oppgavene, prioriter å fullføre oppgave 4.</li>
              <li>Ettersom oppgaven i sin helhet handler om å lære ut ifra egne forventninger og erfaringer, skal egenvurderingen prioriteres.</li>
            </dl>
          </p>
        </div>
        <hr />
        <div className="container-text">
          <p className="title2">
            Planlegging
          </p>
          <p className="text">
            Wow! Jeg er ikke god på planlegging, så jeg starter først med å lage prosjektet og tenker på hva er det neste jeg trenger og hva som mangler.
            <br /><br />
            <b>Jeg vil at APIet skal:</b>
            <dl>
              <li>Vise en tilfeldig wow.</li>
              <li>Kunne bla igjennom alle wows i rekkefølge.</li>
              <li>Se wows fra en bestemt film.</li>
            </dl>
            <br />
            <b>Plan:</b>
            <dl>
              <li>NPMs: gh-pages, react-router-dom</li>
              <li>Komponenter: Header, Nav.</li>
              <li>Sider: Home med random wow, Browse for å se alle wows, BrowseByMovie for å se wows fra en bestemt film, Documentation hvor jeg dokumenterer oppgaven, Error for 404</li>
              <li>Rekkefølge: sette opp prosjektet med Vite + React, lage en struktur for nettsiden, dokumentering og planlegging, sette opp API.</li>
              <li>Estimert tidsbruk: en dag for planlegging/dokumentering, et par timer for å sette opp struktur for nettsiden, en dag for API, 2-3 dager for hele oppgaven.</li>
            </dl>
          </p>
        </div>
        <hr />
        <div className="container-text">
          <p className="title2">
            Egenvurdering
          </p>
          <p className="text">
            Wow!
          </p>
        </div>
      </div>
    </div>
  )
}