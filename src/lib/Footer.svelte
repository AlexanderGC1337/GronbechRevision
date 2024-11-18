<script lang="ts">
    import logo from "$lib/assets/images/logo.png";
    import cookiePdf from "$lib/assets/policies/cookies.pdf";
    import handelPdf from "$lib/assets/policies/handelsbetingelser.pdf";
    import hvidvaskPdf from "$lib/assets/policies/hvidvask.pdf";
    import prisPdf from "$lib/assets/policies/prisliste.pdf";
</script>

<footer
    class="footer footer-center text-primary p-10 bg-[whitesmoke] border-primary"
>
    <aside>
        <!-- <img src={logo} alt="Logo" class="h-20 w-auto" /> -->
        <p class="font-bold">
            Toldboden 3D, 1. 8800 Viborg
            <br />
            CVR: 33450087
        </p>
        <p class="text-secondary">
            Copyright © {new Date().getFullYear()} - All right reserved
        </p>
    </aside>
    <nav>
        <div class="grid grid-flow-col gap-4 place-items-center">
            <a href="https://www.facebook.com/gronbechrevision" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                >
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    ></path>
                </svg>
            </a>

            <a href="https://wa.me/4526367823" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    class="fill-current"
                >
                    <path
                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    ></path>
                </svg>
            </a>

            <a
                href="https://www.instagram.com/gronbechrevision/"
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="30px"
                    height="30px"
                    ><rect
                        width="50"
                        height="50"
                        x="7"
                        y="7"
                        fill="#ed7899"
                        rx="6"
                        ry="6"
                        transform="rotate(180 32 32)"
                    /><rect
                        width="50"
                        height="50"
                        x="7"
                        y="7"
                        fill="#3a69ed"
                        rx="6"
                        ry="6"
                    /><path
                        fill="#8f34bf"
                        d="M57,51V19.34A54.29,54.29,0,0,0,43.85,7H13a6,6,0,0,0-6,6V51a6,6,0,0,0,6,6H51A6,6,0,0,0,57,51Z"
                    /><path
                        fill="#bb52ce"
                        d="M57,51V28.49A49.19,49.19,0,0,0,33.4,7H13a6,6,0,0,0-6,6V51a6,6,0,0,0,6,6H51A6,6,0,0,0,57,51Z"
                    /><path
                        fill="#e0678f"
                        d="M57,51V42.67A44,44,0,0,0,14,8a44.49,44.49,0,0,0-4.65.25A6,6,0,0,0,7,13V51a6,6,0,0,0,6,6H51A6,6,0,0,0,57,51Z"
                    /><path
                        fill="#ff9800"
                        d="M14,14a38.17,38.17,0,0,0-7,.65V51a6,6,0,0,0,6,6H51a6,6,0,0,0,.67,0A38.3,38.3,0,0,0,52,52,38,38,0,0,0,14,14Z"
                    /><path
                        fill="#f4b998"
                        d="M14,20a32.08,32.08,0,0,0-7,.78V51a6,6,0,0,0,6,6H45.61A32.23,32.23,0,0,0,46,52,32,32,0,0,0,14,20Z"
                    /><path
                        fill="#f6d397"
                        d="M14,26a26,26,0,0,0-7,1V51a6,6,0,0,0,6,6H39.51A26,26,0,0,0,14,26Z"
                    /><path
                        fill="#f9e3ae"
                        d="M14,32a19.91,19.91,0,0,0-7,1.28V51a6,6,0,0,0,6,6H33.34A19.93,19.93,0,0,0,14,32Z"
                    /><path
                        fill="#faefde"
                        d="M14,38a13.92,13.92,0,0,0-7,1.89V51a6,6,0,0,0,6,6H27.06A14,14,0,0,0,14,38Z"
                    /><path
                        fill="#f9e3ae"
                        d="M32 19A13 13 0 1 0 32 45A13 13 0 1 0 32 19Z"
                    /><path
                        fill="#bbdef9"
                        d="M32 23A9 9 0 1 0 32 41A9 9 0 1 0 32 23Z"
                    /><path
                        fill="#d2edff"
                        d="M32 27A5 5 0 1 0 32 37A5 5 0 1 0 32 27Z"
                    /><path
                        fill="#f3f3f3"
                        d="M30 27A3 3 0 1 0 30 33 3 3 0 1 0 30 27zM35.5 34A1.5 1.5 0 1 0 35.5 37 1.5 1.5 0 1 0 35.5 34z"
                    /><path
                        fill="#85cbf8"
                        d="M48 14A2 2 0 1 0 48 18A2 2 0 1 0 48 14Z"
                    /><path
                        fill="#8d6c9f"
                        d="M32,46A14,14,0,1,0,18,32,14,14,0,0,0,32,46Zm0-26A12,12,0,1,1,20,32,12,12,0,0,1,32,20Z"
                    /><path
                        fill="#8d6c9f"
                        d="M32,42A10,10,0,1,0,22,32,10,10,0,0,0,32,42Zm0-18a8,8,0,1,1-8,8A8,8,0,0,1,32,24Z"
                    /><path
                        fill="#f9e3ae"
                        d="M48,13a3,3,0,1,0,3,3A3,3,0,0,0,48,13Zm0,4.47A1.47,1.47,0,1,1,49.47,16,1.47,1.47,0,0,1,48,17.47Z"
                    /><path
                        fill="#8d6c9f"
                        d="M51,6H13a7,7,0,0,0-7,7V51a7,7,0,0,0,7,7H51a7,7,0,0,0,7-7V13A7,7,0,0,0,51,6Zm5,45a5,5,0,0,1-5,5H13a5,5,0,0,1-5-5V13a5,5,0,0,1,5-5H51a5,5,0,0,1,5,5Z"
                    /><path
                        fill="#8d6c9f"
                        d="M17 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 17 49zM12 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 12 49zM32 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 32 49zM37 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 37 49zM42 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 42 49zM47 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 47 49zM52 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 52 49zM22 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 22 49zM27 49a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V50A1 1 0 0 0 27 49z"
                    /></svg
                >
            </a>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start flex-wrap py-4 px-2">
            <a href={cookiePdf} target="_blank" class="text-sm md:text-base hover:underline">Cookie- og privatlivspolitik</a>
            <a href={hvidvaskPdf} target="_blank" class="text-sm md:text-base hover:underline">Hvidvask politik</a>
            <a href={handelPdf} target="_blank" class="text-sm md:text-base hover:underline">Handelsbetingelser</a>
            <a href={prisPdf} target="_blank" class="text-sm md:text-base hover:underline">Prisliste</a>
        </div>
    </nav>
</footer>
