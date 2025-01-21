<script lang="ts">
    import Profile from "./assets/images/profile2.jpg";
    import Bogholder from "./assets/partnere/thumbnail_Bogholderforeningen.jpg";
    import { onMount } from "svelte";

    import PocketBase from "pocketbase";

    const pb = new PocketBase("http://127.0.0.1:8090");

    let aboutData;
    let isLoading = true;
    let error = null;

    onMount(async () => {
        try {
            // Assuming '6xv7mn1w36cimj6' is your RECORD_ID based on the data you showed
            aboutData = await pb.collection("about").getOne("6xv7mn1w36cimj6");
            isLoading = false;
        } catch (err) {
            error = err.message;
            isLoading = false;
        }
    });
</script>

<!-- <div id="ommig">‎</div> -->
<div
    class="relative w-full max-w-6xl rounded border overflow-hidden my-8 sm:my-12 bg-white shadow-lg mx-auto"
>
    <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2 order-2 lg:order-1 px-6 py-8 lg:px-12 lg:py-12">
            <div class="max-w-md mx-auto lg:mx-0">
                <h2 id="ommig"
                    class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
                >
                    Om mig
                </h2>
                <!--  {#if isLoading}
                    <div class="flex justify-center items-center min-h-screen">
                        <div
                            class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
                        ></div>
                    </div>
                {:else if error}
                    <div class="text-red-500 p-4">
                        Error: {error}
                    </div>
                {:else}
                    <section class="max-w-4xl mx-auto px-4 py-8">
                        

                        <div class="space-y-6">
                            <p class="text-lg">{aboutData.text1}</p>
                            <p class="text-lg">{aboutData.text2}</p>
                            <p class="text-lg">{aboutData.text3}</p>
                            <h1 class="text-3xl font-bold mb-8">
                                {aboutData.title}
                            </h1>
                            <p class="text-lg">{aboutData.text4}</p>
                            <p class="text-lg">{aboutData.text5}</p>
                        </div>
                    </section>
                {/if} -->
                <div class="space-y-3 text-sm sm:text-base text-gray-700">
                    <p>
                        Mit navn er Berith Nanett Grønbech, og jeg stiftede
                        Grønbech Revision i november 2020.
                    </p>
                    <p>
                        Med min erfaring indenfor bogføring og regnskab hjælper
                        jeg små enkeltmandsvirksomheder og mindre selskaber med
                        at gøre deres økonomistyring så smidig som muligt.
                    </p>
                    <p>
                        Min digitale tilgang gør det muligt at assistere dig,
                        uanset hvor du befinder dig. Tillid og troværdighed er
                        kerneværdier i mit arbejde. Med baggrund i lovgivning
                        sørger jeg for, at dit bogholderi er sat op korrekt og
                        følger loven. Du giver mig adgang til "hjertet" i din
                        virksomhed, hvorved jeg erfarer en viden om din
                        virksomhed og kan gøre opmærksom på eventuelle
                        faresignaler før de opstår, så vi sammen kan få din
                        økonomistyring tilbage på rette spor.
                    </p>
                    <h3
                        class="text-lg sm:text-xl font-semibold text-gray-900 pt-10 text-center"
                    >
                        Min baggrund
                    </h3>
                    <p class="">
                        Som uddannet kontorassistent og bogholder, har jeg over
                        25 års erfaring og er konstant opdateret med de nyeste
                        tendenser og regler i branchen. Min store erfaring
                        indenfor bogføring og regnskab har jeg opnået gennem
                        ansættelser både i det private og offentlige segment.
                        Grundfos og det forhenværende Århus Amt for at nævne
                        nogle.
                    </p>
                    <p>
                        Jeg ser frem til at hjælpe dig med din bogføring, så du
                        kan fokusere på at drive din virksomhed.
                    </p>
                </div>

                <div class="flex gap-2 pt-8 px-auto justify-center">
                    <p class=" text-xs font-bold select-none">Medlem af</p>
                    <img src={Bogholder} class="w-[125px]" alt="" />
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 order-1 lg:order-2 relative">
            <svg
                class="absolute left-0 inset-y-0 h-full w-24 text-white transform -translate-x-1/2 lg:block hidden"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div class="aspect-w-4 aspect-h-3 lg:aspect-none lg:h-full">
                <img
                    class="w-full h-full object-cover object-center bg-[#f5f4f44e]"
                    src={Profile}
                    alt="Berith Nanett Grønbech"
                />
            </div>
        </div>
    </div>
</div>

<!-- <div class="space-y-3 text-sm sm:text-base text-gray-700">
    <p>
        Mit navn er Berith Nanett Grønbech, og jeg stiftede
        Grønbech Revision i november 2020 under navnet
        OfficeBoost.
    </p>
    <p>
        Med min erfaring indenfor bogføring og regnskab hjælper
        jeg små enkeltmandsvirksomheder og mindre selskaber med
        at gøre deres økonomistyring så smidig som muligt.
    </p>
    <p>
        Min digitale tilgang gør det muligt at assistere dig,
        uanset hvor du befinder dig. Tillid og troværdighed er
        kerneværdier i mit arbejde. Med baggrund i lovgivning
        sørger jeg for, at dit bogholderi er sat op korrekt og
        følger loven. Du giver mig adgang til "hjertet" i din
        virksomhed, hvorved jeg erfarer en viden om din
        virksomhed og kan gøre opmærksom på eventuelle
        faresignaler før de opstår, så vi sammen kan få din
        økonomistyring tilbage på rette spor.
    </p>
    <h3
        class="text-lg sm:text-xl font-semibold text-gray-900 pt-10 text-center"
    >
        Min baggrund
    </h3>
    <p class="">
        Som uddannet kontorassistent og bogholder, har jeg over
        25 års erfaring og er konstant opdateret med de nyeste
        tendenser og regler i branchen. Min store erfaring
        indenfor bogføring og regnskab har jeg opnået gennem
        ansættelser både i det private og offentlige segment.
        Grundfos og det forhenværende Århus Amt for at nævne
        nogle.
    </p>
    <p>
        Jeg ser frem til at hjælpe dig med din bogføring, så du
        kan fokusere på at drive din virksomhed.
    </p> -->
