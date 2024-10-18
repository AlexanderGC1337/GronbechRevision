<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        (function(e,m) {
		if(e.getElementById(m))return;var s=document.createElement('script');s.id=m;
		s.src='https://secure.easyme.biz/connect/v3/client.js';s.async=true;
		var el = document.getElementsByTagName('script')[0];el.parentNode.insertBefore(s,el);
		})(document, 'easyme-connect-Gez7zYmsIYTLcUi7NPEH');
    })

    


    const events = [
        {
            title: "Bogførings cafe - Viborg",
            date: "5. nov 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CZqN",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "12. nov 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CQ6Z",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "19. nov 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CQDg",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "26. nov 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CZqz",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "3. dec 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CZqu",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "10. dec 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CZq3",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "17. dec 2024",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CZqO",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "7. jan 2025",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CTx6",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "21. jan 2025",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CTxE",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "28. jan 2025",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CVF2",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "4. feb 2025",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CVFP",
        },
        {
            title: "Bogførings cafe - Viborg",
            date: "11. feb 2025",
            time: "14-00-17:00",
            link: "https://ezme.io/c/XEO/CVFM",
        },
    ];
</script>

<section class="container mx-auto">
    <div class="mt-20 md:mt-40 px-4 md:px-0">
        <div class="my-6 md:my-10">
            <h1 class="text-2xl md:text-3xl text-center select-none">
                Har du lyst til at være <span class="font-bold">herre</span>
                over dit <span class="font-bold">eget</span> bogholderi?
            </h1>
            <p class="text-center select-none">____________</p>
        </div>
        <div class="max-w-4xl text-center mx-auto flex flex-col gap-4">
            <p class="select-none">
                Så kan du melde dig til min <span class="text-blue-600 font-semibold">bogføringscafé</span> og få hjælp til der der
                spænder ben. <br class="hidden md:inline" /> Bogføring <span class="font-bold">behøver</span>
                ikke være svært!
            </p>
            <p class="select-none">
                Mød op til en hyggelig eftermiddag, sammen med andre <span class="text-green-600 font-semibold">solo-selvstændige</span>, med det formål at komme i bund
                med din bogføring. <br class="hidden md:inline" /> Du sidder selv med dit bogholderi og jeg er der til at støtte dig og svare på dine spørgsmål. <br class="hidden md:inline" /> Når du tilmelder dig, har du allerede din første dato for at få lavet din bogføring.
            </p>
            <p class="select-none">
                Det eneste du skal have med, er din bærbare pc, adgang til dine bilag og et godt <span class=" text-blue-600 font-semibold">humør</span>, så klarer jeg resten.
            </p>
        </div>

        <div>
            <p class="font-bold text-center my-10 select-none">Caféen er for solo-sevlstændige som kun benytter sig af e-conomic. <br> Ved aflysning mindre end 48 timer før refunderes indbetalt beløb ikke.</p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 mt-20 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-center">Kommende Caféer</h1>
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"
        >
            {#each events as event}

                <a
                    href={event.link}
                    target="_blank"
                
                    class="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
                >
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h5
                                class="text-xl font-bold tracking-tight text-gray-900"
                            >
                                {event.title}
                            </h5>
                            <span
                                class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mt-[5px]"
                                >{event.time}</span
                            >
                        </div>
                        <p class="font-normal text-gray-700">
                            <svg
                                class="w-4 h-4 inline-block mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                            {event.date}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <div class="container mx-auto mb-24 px-4">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Det praktiske -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-blue-100 px-6 py-4">
              <h2 class="text-blue-800 text-2xl font-semibold text-center">Det praktiske</h2>
            </div>
            <div class="p-6">
              <div class="text-center">
                <p class="text-gray-600 mb-2">Vi mødes på</p>
                <p class="font-medium">Toldboden 1</p>
                <p class="font-medium">8800 Viborg</p>
              </div>
            </div>
          </div>
      
          <!-- Parkering -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-blue-100 px-6 py-4">
              <h2 class="text-blue-800 text-2xl font-semibold text-center">Parkering</h2>
            </div>
            <div class="p-6">
              <p class="text-center text-gray-600 mb-2">Parking i terræn (kun gæster):</p>
              <ul class="list-disc list-inside text-gray-700 text-center">
                <li>2 timers parkering ved at stille p-skiven</li>
                <li>Betalingsparking via app iht. skiltning på pladsen</li>
              </ul>
            </div>
          </div>
      
          <!-- Klippekort -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-blue-100 px-6 py-4 flex justify-center items-center gap-5">
              <h2 class="text-blue-800 text-2xl font-semibold text-center">Klippekort</h2>
              <a class="text-xs text-yellow-100 hover:underline px-2 py-[3px] bg-blue-500 rounded-full" href="https://ezme.io/c/XEO/CTXY" target="_blank">Køb her</a>
            </div>
            <div class="p-6">
              <div class="text-center">
                <p class="text-gray-600 mb-4">Du kan også købe klippekort til 3x bogføringscaféer.</p>
                <p class="text-gray-700">Normalpris: <span class="font-medium">2.700,- + moms</span></p>
                <p class="text-gray-700"><span class="font-bold">Din pris:</span> <span class="font-medium text-green-600">2.400,- + moms</span></p>
                <!-- <button class="btn btn-wide glass hover:bg-blue-500 bg-blue-100 mt-5">
                    <a class="text-blue-800" href="https://ezme.io/c/XEO/CTXY" target="_blank">Køb</a>
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
