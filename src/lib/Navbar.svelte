<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import logo from "$lib/assets/images/logo.png";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import { pb, currentUser } from "$lib/pocketbase";

    let navbar: HTMLElement;
    let isScrolled = false;
    let isMobileMenuOpen = false;

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        isScrolled = currentScrollPos > 50;
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

    async function handleLogout() {
        try {
            pb.authStore.clear();
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    onMount(() => {
        handleScroll();
    });

    function scrollToSection(id: string) {
        closeMobileMenu();
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 100);
    }

    function openLinkAndClose(url) {
        window.open(url, "_blank");
        window.close();
    }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
    bind:this={navbar}
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white"
    class:shadow-md={isScrolled}
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-20">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        class="h-10 sm:h-12 md:h-16 transition-all duration-300 ease-in-out"
                        class:md:h-12={isScrolled}
                    />
                </a>
            </div>

            <!-- Desktop Links (hidden on mobile) -->
            {#if !$currentUser && $page.url.pathname !== "/job"}
                <div
                    class="hidden md:flex items-center space-x-1 lg:space-x-4 font-semibold tracking-wide"
                >
                    <a
                        href="/"
                        class="text-gray-800 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase"
                        >Forside</a
                    >
                    <a
                        href="#ydelser"
                        on:click|preventDefault={() =>
                            scrollToSection("ydelser")}
                        class="text-gray-800 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase"
                        >Ydelser</a
                    >
                    <a
                        href="#kunde"
                        on:click|preventDefault={() => scrollToSection("kunde")}
                        class="text-gray-800 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase"
                        >Priser</a
                    >
                    <a
                        href="#ommig"
                        on:click|preventDefault={() => scrollToSection("ommig")}
                        class="text-gray-800 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase"
                        >Om mig</a
                    >
                    <a
                        href="/job"
                        class="text-gray-800 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase"
                        >Job</a
                    >
                </div>
            {/if}

            <!-- Contact/Logout Button and Burger Menu -->
            {#if $page.url.pathname !== "/cafe"}
                <div class="flex items-center space-x-2">
                    {#if $currentUser}
                        <button
                            on:click={handleLogout}
                            class="btn glass bg-orange-500 hover:bg-orange-400 text-white border-none uppercase tracking-wider transition-all duration-300 ease-in-out text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                        >
                            Log ud
                        </button>
                    {:else}
                        <a
                            href="/kontakt"
                            class="btn glass bg-orange-500 hover:bg-orange-400 text-white border-none uppercase tracking-wider transition-all duration-300 ease-in-out text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                        >
                            Kontakt
                        </a>

                        <!-- Burger Menu Button (only show when not logged in) -->
                        <button
                            on:click={toggleMobileMenu}
                            type="button"
                            class="md:hidden text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    {/if}
                </div>
            {/if}
        </div>
    </div>

    <!-- Mobile menu (only show when not logged in) -->
    {#if isMobileMenuOpen && !$currentUser && $page.url.pathname !== "/job"}
        <div class="md:hidden" transition:fade={{ duration: 200 }}>
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
                <a
                    href="/"
                    on:click|preventDefault={() => scrollToSection("top")}
                    class="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >Forside</a
                >
                <a
                    href="#ydelser"
                    on:click|preventDefault={() => scrollToSection("ydelser")}
                    class="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >Ydelser</a
                >
                <a
                    href="#kunde"
                    on:click|preventDefault={() => scrollToSection("kunde")}
                    class="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >Priser</a
                >
                <a
                    href="#ommig"
                    on:click|preventDefault={() => scrollToSection("ommig")}
                    class="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >Om mig</a
                >
                <a
                    href="/job"
                    class="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >Job</a
                >
            </div>
        </div>
    {/if}
</nav>
