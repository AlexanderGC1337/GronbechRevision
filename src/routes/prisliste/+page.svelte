<!-- PriceList.svelte -->
<script>
    const pricingData = {
      bookkeeping: {
        title: "Bogføring",
        items: [
          { name: "Opstartsfee (engangsbeløb ved opstart som kunde)", price: "1.995,00" },
          { name: "Bogføring og administration mit kontor pr. time", price: "485,00" },
          { name: "Bogføring og administration hos kunde pr. time", price: "525,00" }
        ]
      },
      payroll: {
        title: "Lønbehandling",
        items: [
          { name: "1-5 medarbejdere pr. lønseddel", price: "100,00" },
          { name: "6-10 medarbejdere pr. lønseddel", price: "90,00" },
          { name: "Over 10 medarbejdere pr. lønseddel", price: "70,00" }
        ]
      },
      annualReport: {
        title: "Årsrapport/årsregnskab",
        items: [
          { name: "Klargøring til revisor", price: "3.600,00" },
          { name: "Enkeltmandsvirksomhed (ikke VSO)", price: "6.900,00" },
          { name: "Enkeltmandsvirksomhed VSO", price: "Ring for pris" },
          { name: "Foreninger", price: "Ring for pris" },
          { name: "Selskaber", price: "Ring for pris" }
        ]
      },
      misc: {
        title: "Diverse",
        items: [
          { name: "Møder (Teams/Fysisk) pr. time", price: "500,00" },
          { name: "Tillæg v/hasteopgaver pr. time", price: "485,00" },
          { name: "Årlig KYC-kontrol jf. Hvidvasklovens §7", price: "500,00" },
          { name: "Lovpligtig beskrivelse af bogføringsprocedure (engangsbeløb)", price: "750,00" },
          { name: "Kursus/undervisning 1:1 pr. time", price: "1.000,00" },
          { name: "Kørsel pr. km", price: "Statens takster" },
          { name: "Konvertering fra andet regnskabsprogram", price: "Ring for pris" }
        ]
      }
    };
  
    function formatPrice(price) {
      return typeof price === 'string' && price.includes(',') 
        ? `kr. ${price}` 
        : price;
    }
</script>

<div class="w-full min-h-screen bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div class="mb-8 sm:mb-12">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">Prisliste 2025</h1>
      <p class="text-center text-gray-600 text-sm sm:text-base">Alle priser er ex moms</p>
    </div>
        
    {#each Object.entries(pricingData) as [key, section]}
      <div class="mb-6 sm:mb-8 rounded-lg border bg-white shadow-sm overflow-hidden">
        <div class="bg-amber-800 text-white px-4 sm:px-6 py-3 sm:py-4">
          <h2 class="text-lg sm:text-xl font-semibold">{section.title}</h2>
        </div>
        <div class="p-4 sm:p-6">
          <div class="space-y-3 sm:space-y-4">
            {#each section.items as item}
              <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
                <span class="text-gray-700 text-sm sm:text-base">{item.name}</span>
                <span class="font-semibold text-sm sm:text-base whitespace-nowrap">{formatPrice(item.price)}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
    
    <div class="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600 space-y-2">
      <p>Priser reguleres en gang årligt pr. 1/1. - der tages forbehold for ændringer</p>
      <p>Pris for abonnementer hos Dataløn & e-conomic er ikke med.</p>
    </div>

    <div class="flex gap-2 items-center py-8 sm:py-12">
      <div class="w-6 sm:w-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-full h-full">
          <path d="M13 8H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M7 11L4 8L7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <a href="/" class="hover:text-orange-500 text-lg sm:text-xl transition-colors duration-200">Gå tilbage</a>
    </div>
  </div>
</div>