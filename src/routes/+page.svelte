<script lang="ts">
    import Hero from "$lib/Hero.svelte";

    import Tabs from "$lib/Tabs.svelte";

    let showTabs = false;

    function toggleTabs() {
        showTabs = !showTabs;
    }

    import Aboutme from "$lib/Aboutme.svelte";

    import Contact from "$lib/Contact.svelte";

    import AndreYdelser from "$lib/AndreYdelser.svelte";

    const title = "Bogføring & regnskab";
    const paragraphs = [
        "Jeg har specialiseret mig i at arbejde i <span class='font-semibold text-blue-600'>e-conomic</span> og jeg kender programmet indgående. Jeg <span class='font-semibold text-green-600'>automatiserer</span> så meget som muligt, hvilket gør min bogføring nemmere og din pris, billigere.",
        "Jeg håndterer hele <span class='font-semibold text-blue-600'>bogføringsprocessen</span>, herunder bogføring, afstemning, kreditor- og debitorstyring, hvilket frigør tid og ressourcer internt i din virksomhed. Med min dybdegående viden om e-conomic tilpasser jeg dit bogholderi efter dine krav, herunder opsætning af kontoplaner, momsregler og kunder, leverandører mv.",
        "Jeg sikrer <span class='font-semibold text-green-600'>korrekt og rettidig bogføring</span> ved at være opdateret med de seneste regnskabsstandarder og lovgivning. Min erfaring giver mulighed for <span class='font-semibold text-blue-600'>skræddersyede løsninger</span>, der støtter dine individuelle forretningsprocesser og mål. Jeg håndterer sikkerheds- og fortrolighedsaspekter i overensstemmelse med gældende databeskyttelsesregler.",
        "<span class='font-semibold text-green-600'>Optimer din bogføring</span> med min professionelle hjælp og udnyt e-conomics fulde potentiale. Jeg sikrer, at dit bogholderi er ajourført, så du kan koncentrere dig om at drive din virksomhed fremad.",
    ];

    const services = [
        "Bogføring",
        "Lønadministration",
        "Momsregnskab og indberetning",
        "Årsregnskab",
    ];

    const services2 = [
        {
            title: "Daglig bogføring",
            description:
                "Jeg håndterer den daglige bogføring af dine transaktioner, herunder indtastning af indgående og udgående fakturaer, banktransaktioner, kassebeholdning og andre relevante poster. Jeg sikrer, at alle poster er bogført korrekt så du får de rette fradrag.",
        },
        {
            title: "Kreditor- og debitorstyring",
            description:
                "Jeg administrerer dine leverandør- og kundekonti ved at oprette og vedligeholde en oversigt over betalinger, udestående fakturaer og gæld. Jeg sikrer, at betalinger håndteres rettidigt og korrekt, og at der opretholdes en nøjagtig og ajourført status for dine kreditorer og debitorer.",
        },
        {
            title: "Afstemninger og rapportering",
            description:
                "Jeg laver regelmæssige afstemninger af dine konti for at sikre overensstemmelse mellem dine regnskabsdata og dine bank- og kassekonti. Jeg genererer også rapporter som balanceopgørelser, resultatopgørelser, momsrapporter og andre nødvendige dokumenter for at give dig et klart overblik over din virksomheds økonomiske status.",
        },
        {
            title: "Momsafstemning, -opgørelse og -indberetning",
            description:
                "Jeg hjælper med at indberette din moms i henhold til Skats frister. Jeg sikrer, at dine momsforpligtelser laves korrekt og rettidigt, og at du undgår eventuelle problemer eller sanktioner fra myndighederne.",
        },
    ];

    const economicService = {
        title: "E-conomic",
        description:
            "Som <span class='font-semibold text-green-600'>specialist i e-conomic</span> kan jeg tilbyde eksperthjælp til at <span class='font-semibold text-blue-600'>optimere brugen af e-conomic</span>. Jeg kan tilpasse og konfigurere e-conomic efter dine specifikke behov, integrere det med andre systemer og udnytte <span class='font-semibold text-green-600'>automatiseringsfunktionerne</span> til at forenkle og effektivisere din bogføring og regnskabsprocesser.\n\nMit mål er at sikre, at din virksomheds bogføring og regnskab håndteres <span class='font-semibold text-blue-600'>professionelt, præcist og i overensstemmelse med gældende regler</span> og bestemmelser. Ved at outsource disse opgaver til mig kan du <span class='font-semibold text-green-600'>frigøre tid og ressourcer</span> internt i virksomheden og have tillid til, at dit bogholderi er i gode hænder.\n\nUanset om du har en lille virksomhed eller en større organisation, tilbyder jeg <span class='font-semibold text-blue-600'>skræddersyede løsninger</span>, der passer til dine unikke behov og budget. Jeg er dedikeret til at levere <span class='font-semibold text-green-600'>pålidelige og kvalitetsorienterede tjenester</span>, der hjælper din virksomhed med at trives på det økonomiske område.",
    };

    let testMode: Boolean = false;
    import Partnere from "$lib/Partnere.svelte";
</script>

{#if testMode}
    <Partnere />
{:else if !testMode}
    <Hero />

    <div class="px-2">
        <div
            class="relative z-10 max-w-4xl mx-auto -mt-8 bg-[#eef2ef] text-black tracking-wide text-lg p-14 rounded-lg shadow-lg"
        >
            <div class="flex flex-col md:flex-row gap-8 md:gap-16">
                <div class="md:w-1/2">
                    <p class="mb-4">
                        Hos <span class="font-semibold text-gray-700"
                            >Grønbech Revision</span
                        >
                        kan du få hjælp til at styre din virksomheds bogholderi og
                        regnskab uanset om det drejer sig bogføring
                        <span class="font-semibold text-gray-700"
                            >ugentligt</span
                        >,
                        <span class="font-semibold text-gray-700"
                            >månedligt</span
                        >
                        eller
                        <span class="font-semibold text-gray-700"
                            >kvartalsvis</span
                        >.
                    </p>
                    <p class="mb-4">
                        Dette er helt op til <span
                            class="font-semibold text-gray-700">dig.</span
                        >
                    </p>
                    <p>
                        Jeg har specialiseret mig i kun at arbejde i <span
                            class="font-semibold text-gray-700">e-conomic</span
                        >. Jeg har kunder inden for mange brancher over hele
                        Danmark.
                    </p>
                </div>
                <div class="md:w-1/2">
                    <h3 class="font-semibold text-xl mb-4">
                        Jeg kan hjælpe med følgende
                    </h3>
                    <ul class="list-disc pl-6 mb-6">
                        {#each services as service}
                            <li>{service}</li>
                        {/each}
                    </ul>
                    <p>
                        Alt bogføring og regnskab foregår <span
                            class="font-semibold text-gray-700">digitalt</span
                        >, så afstand er ikke et problem. Send mig din besked
                        via min kontaktformular og fortæl mig hvad du ønsker
                        hjælp til. Så hører du fra mig snarest.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <section class="max-w-3xl mt-40 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-4xl font-bold text-gray-800 mb-8">
            {title}
        </h2>
        {#each paragraphs as paragraph}
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                {@html paragraph}
            </p>
        {/each}
    </section>
    <div id="ydelser" class="mb-10"></div>
    <section class=" py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-semibold text-gray-800 mb-12 text-center">
                Jeg tilbyder
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {#each services2 as service}
                    <div
                        class="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 shadow-md"
                    >
                        <div class="p-6">
                            <h3 class="text-xl font-medium text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                {@html service.description}
                            </p>
                        </div>
                    </div>
                {/each}
                <div
                    class="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 shadow-md lg:col-span-2"
                >
                    <div class="p-6">
                        <h3 class="text-xl font-medium text-gray-900 mb-4">
                            {economicService.title}
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed whitespace-pre-line"
                        >
                            {@html economicService.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="text-center">
        <button
            class="btn btn-wide btn-primary text-white text-center"
            on:click={toggleTabs}
        >
            {showTabs ? "Skjul andre ydelser" : "Vis andre ydelser"}
        </button>
    </div>
    {#if showTabs}
        <Tabs />
    {/if}
    <AndreYdelser />

    <Partnere />

    <Aboutme />

    <!-- <Contact /> -->
{/if}

<!-- <style>
    :global(body) {
        background-color: black;
        color: #1f2937;
        line-height: 1.6;
    }

    :global(.hero-parent-container) {
        position: relative;
    }
</style> -->
