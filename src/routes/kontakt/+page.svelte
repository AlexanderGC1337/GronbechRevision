<script lang="ts">
    import Contact from "$lib/Contact.svelte";
    import NoWorkResult from "postcss/lib/no-work-result";
    import {
        PhoneCallIcon,
        LocationAltIcon,
        MailboxIcon,
    } from "svelte-uicons/rounded/regular";

    let active = true;
</script>

<section class="pt-32 pb-96 bg-gray-50">
    <div class="max-w-screen-lg mx-auto">
        <div
            class="flex p-8 border border-primary rounded-md my-10 flex-col md:flex-row mx-4 md:mx-10"
        >
            <div
                class="flex gap-4 items-center border-0 md:border-r pr-4 w-full mb-2 md:mb-0"
            >
                <LocationAltIcon size="24" class="text-primary ml-4" />
                <div>
                    <h2 class="text-xl text-eerieblack font-semibold">
                        Adresse
                    </h2>
                    <p class="text-dimGray text-xs md:text-md">
                        Toldboden 3d, 1. 8800 Viborg
                    </p>
                </div>
            </div>
            <div
                class="flex gap-4 items-center border-0 md:border-r pr-4 w-full mb-2 md:mb-0"
            >
                <PhoneCallIcon size="24" class="text-primary ml-4" />
                <div>
                    <h2 class="text-xl text-eerieblack font-semibold">
                        Telefon
                    </h2>
                    <p class="text-dimGray text-xs md:text-md">
                        [45] 42 21 04 18
                    </p>
                </div>
            </div>
            <div class="flex gap-4 items-center pr-4 w-full">
                <MailboxIcon size="24" class="text-primary ml-4" />
                <div>
                    <h2 class="text-xl text-eerieblack font-semibold">Email</h2>
                    <p class="text-dimGray text-xs md:text-md">
                        kontor@gronbechrevision.dk
                    </p>
                </div>
            </div>
        </div>
    </div>

    <p class="text-2xl w-max mx-auto mb-4 px-4 text-center max-w-full">
        Udfyld min formular og jeg kontakter dig inden 48 timer.
    </p>
    <div class="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        <div class="w-full md:w-auto">
            <Contact />
        </div>
    
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2205.155498816233!2d9.398949577343846!3d56.44785227334945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be443688d45f3%3A0x646dadfb079dfffe!2sToldboden%203d%2C%208800%20Viborg!5e0!3m2!1sda!2sdk!4v1731964943856!5m2!1sda!2sdk"
            class="w-full md:w-[400px] h-[300px] md:h-[400px] rounded-lg"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</section>
