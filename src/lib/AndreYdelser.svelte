<!-- src/routes/services/+page.svelte -->
<script lang="ts">
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
      price: "kr. 485,00 pr. time",
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
        "Hastetillæg er kr. 485,00 pr. time.",
        "Skal jeg sidde hos dig er timeprisen kr. 525,00.",
        "E-conomic abonnement er ikke med i denne pris. Hør nærmere om de abonnementer jeg kan tilbyde til særpris."
      ]
    },
    lonadministration: {
      title: "Lønadministration",
      price: "kr. 100,00 pr. lønseddel",
      description: "Har du ansatte og ønsker min hjælp til din lønadministration kan jeg nævne, at jeg er lønpartner hos Dataløn og anbefaler, at du bruger dette program.",
      priceDescription: "Jeg sørger for, at dine medarbejdere er sat rigtigt op og får deres korrekte løn til rette tid.",
      note: "Pris til Dataløn er ikke med i denne pris."
    },
    aarsregnskab: {
      title: "Årsregnskab",
      price: "kr. 3.600,00",
      description: "Jeg klargør dit bogholderi til årsregnskab.",
      priceDescription: "Som jeg efterfølgende udarbejder. I nogle tilfælde sparrer jeg med en revisor så du kan være sikker på at dit årsregnskab er i orden og udarbejdet efter gældende lovgivning."
    },
    enkeltmandsvirksomheder: {
      title: "Enkeltmandsvirksomheder - ikke VSO",
      price: "kr. 6.900,00",
      description: "Jeg laver en årsrapport, et skattehæfte samt en oplysningsseddel til din private årsopgørelse, jeg guider dig ved indberetning.",
      priceDescription: "Anvender du virksomhedsordningen henvises til revisor."
    }
  };

  let activeTab = 'opstart';
  
  const setActiveTab = (tab: string) => {
    activeTab = tab;
  };
</script>

<div class="max-w-5xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-light text-gray-800 text-center mb-8">
    Når du bliver kunde hos mig
  </h1>

  <!-- Service Selection Tabs -->
  <div class="mb-6 flex flex-wrap gap-2 justify-center">
    {#each Object.entries(services) as [key, service]}
      <button
        class="px-4 py-2 rounded-lg transition-colors duration-200 text-sm
          {activeTab === key 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
        on:click={() => setActiveTab(key)}
      >
        {service.title}
      </button>
    {/each}
  </div>

  <!-- Service Content -->
  <div class="bg-white rounded-xl shadow-lg p-6">
    {#each Object.entries(services) as [key, service]}
      {#if activeTab === key}
        <div class="space-y-4">
          <div class="border-b pb-4">
            <h2 class="text-2xl font-light text-gray-800">{service.title}</h2>
            <!-- <p class="text-xl font-semibold text-blue-600 mt-2">{service.price}</p> -->
            <p class="text-gray-600 mt-2">{service.description}</p>
          </div>

          {#if service.items}
            <ul class="space-y-3">
              {#each service.items as item}
                <li class="flex gap-3">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">{item}</span>
                </li>
              {/each}
            </ul>
          {/if}

          {#if service.notes}
            <div class="bg-gray-50 rounded-lg p-4 space-y-2">
              {#each service.notes as note}
                <p class="text-sm text-gray-600">{note}</p>
              {/each}
            </div>
          {/if}

          {#if service.priceDescription}
            <p class="text-gray-700">{service.priceDescription}</p>
          {/if}

          {#if service.note}
            <p class="text-sm text-gray-600 italic">{service.note}</p>
          {/if}
        </div>
      {/if}
    {/each}
  </div>

  <p class="text-center mt-4 text-sm text-gray-400 italic">
    Alle priser er ex moms.
  </p>
</div>