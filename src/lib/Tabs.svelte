<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import { writable } from 'svelte/store';

    let activeTab = "loenadministration";
    const currentPage = writable(1);
    const isMobile = writable(false);

    const tabs = [
        { id: "loenadministration", label: "Lønadministration" },
        { id: "loensumsafgift", label: "Lønsumsafgift" },
        { id: "aarsregnskab", label: "Årsregnskab" },
    ];

    function setActiveTab(tabId: string) {
        activeTab = tabId;
        currentPage.set(1);
    }

    function nextPage() {
        currentPage.update(n => n < 2 ? n + 1 : n);
    }

    function prevPage() {
        currentPage.update(n => n > 1 ? n - 1 : n);
    }

    function checkMobile() {
        isMobile.set(window.innerWidth < 640);
    }

    onMount(() => {
        setActiveTab(activeTab);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    });
</script>

<div class="container mx-auto p-4 max-w-4xl my-20">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Andre ydelser</h1>

    <div class="flex flex-wrap justify-start -mx-1">
        {#each tabs as tab}
            <button
                class={`px-2 py-1 mx-1 text-sm sm:text-base sm:px-3 sm:py-2 rounded-t-lg font-medium transition-colors duration-200 flex-grow sm:flex-grow-0 ${
                    activeTab === tab.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                on:click={() => setActiveTab(tab.id)}
            >
                {tab.label}
            </button>
        {/each}
    </div>

    <div class="bg-white shadow-md rounded-b-lg border p-4 sm:p-6 relative overflow-hidden">
        <div class="pb-16 sm:pb-0">
            {#if activeTab === "loensumsafgift"}
                <div in:fade="{{ duration: 300, delay: 300 }}">
                    {#if !$isMobile || $currentPage === 1}
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4">Lønsumsafgift</h2>
                        <p class="mb-4 text-sm sm:text-base">
                            Lønsumsafgift er en afgift, der pålægges virksomheder, der
                            sælger momsfrie varer eller ydelser og er kort sagt en afgift,
                            som virksomheden betaler af fortjenesten af det momsfrie salg.
                            Det betyder, at lønsumsafgiften er en anden type afgift, som
                            nogle virksomheder skal betale til SKAT i stedet for at betale
                            moms.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Den beregnes som en procentdel af den samlede lønsum og betales
                            af arbejdsgiveren. Hvis virksomheden har et momsfrit
                            afgiftsgrundlag på over 80.000 kr. om året, skal den registreres
                            for lønsumsafgift.
                        </p>
                    {/if}
                    {#if !$isMobile || $currentPage === 2}
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">Virksomhed uden ansatte</h3>
                        <p class="mb-4 text-sm sm:text-base">
                            Hvis du ikke har ansatte, skal lønsumsafgiften angives og
                            betales 1 gang om året. Hvis din virksomhed har kalenderåret som
                            regnskabsår, er fristen for at angive og betale lønsumsafgift
                            den 15. august året efter.
                        </p>
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">Virksomhed med ansatte</h3>
                        <p class="mb-4 text-sm sm:text-base">
                            Hvis du har ansatte, skal du angive lønsumsafgift 5 gange om
                            året. Først skal der angives 4 kvartalsangivelser. De bliver
                            kaldt a conto-angivelser. Lønsumsafgiften skal beregnes på
                            grundlag af lønningerne.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Den 5. angivelse er årsangivelsen. Her skal den endelige
                            lønsumsafgift vedrørende lønningerne og overskuddet angives.
                            Hvis virksomheden har kalenderåret som regnskabsår er fristen
                            den 15. august året efter.
                        </p>
                        <p class="mt-4 font-medium text-sm sm:text-base">
                            Jeg hjælper med udregning og indberetning.
                        </p>
                    {/if}
                </div>
            {:else if activeTab === "aarsregnskab"}
                <div in:fade="{{ duration: 300, delay: 300 }}">
                    {#if !$isMobile || $currentPage === 1}
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4">Årsregnskab</h2>
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg tilbyder enkeltmandsvirksomheder en professionel og
                            pålidelig udarbejdelse af årsregnskab. Jeg forstår små
                            virksomheders unikke behov og ressourcemæssige begrænsninger,
                            med målet om at lette byrden og sikre overholdelse af
                            regnskabsforpligtelser.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg følger klasse A regler og standarder, sikrer overholdelse af
                            lovgivning, og gennemgår nøje finansielle oplysninger. Ved at
                            overlade årsregnskabet til mig garanteres korrekt og rettidig
                            udarbejdelse, inklusive justeringer for nøjagtighed og
                            overensstemmelse.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg tilbyder også assistance med din private årsopgørelse.
                        </p>
                    {/if}
                    {#if !$isMobile || $currentPage === 2}
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">
                            Til større virksomheder som hører under klasse B, C og D regler
                        </h3>
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg har et nært samarbejde med eksterne revisorer for at sikre
                            høj kvalitet og professionalisme i regnskabs- og
                            revisionsprocesser. Jeg anerkender vigtigheden af uafhængig
                            gennemgang af kunderegnskaber for nøjagtighed, pålidelighed og
                            overholdelse af regnskabsstandarder.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Samarbejdet med eksterne revisorer giver mig adgang til deres
                            ekspertise, viden og erfaring inden for revision. Deres
                            objektive vurdering sikrer kundernes tillid i økonomisk
                            rapportering. Vi gennemgår sammen interne kontrolprocedurer og
                            regnskabsprocesser for at identificere forbedringsmuligheder
                            eller potentielle risici.
                        </p>
                        <p class="text-sm sm:text-base">
                            Vores samarbejde med eksterne revisorer er integreret i vores
                            tilgang til omfattende og pålidelige regnskabs- og
                            revisionsydelser. Det sikrer, at kundernes økonomiske behov
                            opfyldes professionelt og effektivt, samtidig med at der opnås
                            tillid og troværdighed i økonomisk rapportering.
                        </p>
                    {/if}
                </div>
            {:else if activeTab === "loenadministration"}
                <div in:fade="{{ duration: 300, delay: 300 }}">
                    {#if !$isMobile || $currentPage === 1}
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4">Lønadministration</h2>
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg tilbyder også lønadministration som en del af mine ydelser.
                            Korrekt håndtering af lønadministration er afgørende for enhver
                            virksomhed, da det involverer komplekse processer og juridiske
                            krav.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Mine lønadministrationstjenester omfatter en bred vifte af
                            opgaver, der sikrer, at dine medarbejdere får korrekt og
                            rettidig betaling, samtidig med at du overholder alle gældende
                            love og regler. Jeg håndterer alt fra beregning af løn,
                            fraværshåndtering og indberetning af skatter og afgifter til
                            udarbejdelse af lønsedler og rapportering.
                        </p>
                    {/if}
                    {#if !$isMobile || $currentPage === 2}
                        <p class="mb-4 text-sm sm:text-base">
                            Jeg har et solidt kendskab til lovgivningen og reglerne på
                            området. Jeg sørger for at holde mig opdateret med de seneste
                            ændringer og sikrer, at dine lønadministration er i
                            overensstemmelse med de gældende krav.
                        </p>
                        <p class="mb-4 text-sm sm:text-base">
                            Ved at overlade din lønadministration til mig kan du spare tid
                            og ressourcer, samtidig med at du får sikkerhed for nøjagtighed
                            og overholdelse af reglerne. Jeg er dedikeret til at levere
                            pålidelig og professionel lønadministration, der opfylder dine
                            specifikke behov og krav.
                        </p>
                        <p class="text-sm sm:text-base">
                            Kontakt mig i dag for at høre mere om hvordan jeg kan hjælpe dig
                            og lad os sammen finde den bedste løsning til din virksomhed.
                            Jeg er her for at lette byrden og sikre, at din
                            lønadministration er i gode hænder, så du kan fokusere på at
                            drive din virksomhed fremad.
                        </p>
                    {/if}
                </div>
            {/if}
        </div>
        
        {#if $isMobile}
            <div class="absolute bottom-4 right-4 flex space-x-2">
                <button
                    class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    on:click={prevPage}
                    disabled={$currentPage === 1}
                    aria-label="Previous page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    on:click={nextPage}
                    disabled={$currentPage === 2}
                    aria-label="Next page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        {/if}
    </div>
</div>