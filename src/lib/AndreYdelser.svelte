<script>
    let activeTab = 'opstart';
  
    const services = {
      opstart: {
        title: "Opstart",
        price: "kr. 1.995,00",
        description: "som er et engangsbeløb. Det dækker:",
        items: [
          "En lovpligtig KYC kontrol jf. Hvidvaskloven § 7",
          "Gennemgang af nuværende e-conomic aftale eller",
          "Oprettelse af ny e-conomic aftale",
          "Tilpasning af kontoplan, varemodul, kundemodul, leverandørmodul så den passer din virksomhed",
          "Automatisering af forskellige processer f.eks bankintegration, evt. indberetning af moms mm.",
          "Adgang til Skattekonto, indberetning af moms, lønsum mv.",
          "Opsætning af rykkerprocedure",
          "Udarbejdelse af lovpligtig bogføringsprocedure"
        ]
      },
      lobende: {
        title: "Løbende bogføring",
        price: "kr. 455,00",
        description: "I denne timepris indgår:",
        items: [
          "Løbende bogføring, fakturering, og bankafstemning",
          "Momsafstemning, -opgørelse og indberetning",
          "Økonomisk sparring",
          "Diverse afstemninger",
          "Debitorstyring",
          "Kreditorstyring"
        ],
        notes: [
          "Du betaler altid for minimum 1 time. Forbrug herover faktureres pr. halve time.",
          "Hastetillæg er kr. 455,00 pr. time.",
          "Skal jeg sidde hos dig er timeprisen kr. 495,00.",
          "E-conomic abonnement er ikke med i denne pris. Hør nærmere om de abonnementer jeg kan tilbyde til særpris."
        ]
      },
      lonadministration: {
        title: "Lønadministration",
        price: "kr. 100,00",
        description: "Har du ansatte og ønsker min hjælp til din lønadministration kan jeg nævne, at jeg er lønpartner hos Dataløn og anbefaler, at du bruger dette program.",
        priceDescription: "pr. lønseddel og sørger for, at dine medarbejdere er sat rigtigt op og får deres korrekte løn til rette tid.",
        note: "Pris til Dataløn er ikke med i denne pris."
      },
      aarsregnskab: {
        title: "Årsregnskab",
        price: "kr. 3.500,00",
        description: "Jeg klargør dit bogholderi til årsregnskab hvis du ønsker at bruge en revisor til det.",
        priceDescription: "Jeg har et samarbejde med en revisor i Aarhus, som laver årsregnskabet. Han sender mig en liste over opgaver jeg skal lave klar til årsregnskabet. Din pris for dette aftaler I selv indbyrdes. Jeg formidler kontakten og når jeg har stået for din bogføring igennem året, afspejles det i din pris for årsregnskabet."
      },
      enkeltmandsvirksomheder: {
        title: "Enkeltmandsvirksomheder - ikke VSO",
        price: "kr. 6.900,00",
        description: "Jeg laver en årsrapport, et skattehæfte samt en oplysningsseddel til din private årsopgørelse.",
        priceDescription: "Jeg guider dig ved indberetning."
      }
    };
  
    function setActiveTab(tab) {
      activeTab = tab;
    }
  </script>
  
  <div class="min-h-screen p-4 sm:p-6 md:p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 text-center mb-6 sm:mb-8 md:mb-12">
        Når du bliver kunde hos mig
      </h1>
  
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="flex flex-wrap border-b">
          {#each Object.keys(services) as tab}
            <button
              class="flex-grow py-2 px-2 sm:px-3 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 focus:outline-none border-b-2 truncate"
              class:text-blue-600={activeTab === tab}
              class:border-blue-600={activeTab === tab}
              class:text-gray-500={activeTab !== tab}
              class:border-transparent={activeTab !== tab}
              on:click={() => setActiveTab(tab)}
            >
              {services[tab].title}
            </button>
          {/each}
        </div>
  
        <div class="p-4 sm:p-6 md:p-8">
          <div>
            <h2 class="text-2xl sm:text-3xl font-light mb-2 sm:mb-4 text-gray-800">{services[activeTab].title}</h2>
            <p class="text-xl sm:text-2xl font-semibold text-blue-600 mb-2 sm:mb-4">{services[activeTab].price}</p>
            <p class="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">{services[activeTab].description}</p>
  
            {#if services[activeTab].items}
              <ul class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {#each services[activeTab].items as item}
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2 mt-1 flex-shrink-0">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span class="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                {/each}
              </ul>
            {/if}
  
            {#if services[activeTab].notes}
              <div class="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2">
                {#each services[activeTab].notes as note}
                  <p class="text-xs sm:text-sm text-gray-600">{note}</p>
                {/each}
              </div>
            {/if}
  
            {#if services[activeTab].priceDescription}
              <p class="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">{services[activeTab].priceDescription}</p>
            {/if}
  
            {#if services[activeTab].note}
              <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">{services[activeTab].note}</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>