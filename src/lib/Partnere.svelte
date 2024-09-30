<script lang="ts">
    import { onMount } from 'svelte';
    import digitalRevisor from "$lib/assets/partnere/Digital Revisor.png" 
    import budgetoneTwothree from "$lib/assets/partnere/budget123.png" 
    import danlon from "$lib/assets/partnere/danlon.png" 
    import creditro from "$lib/assets/partnere/creditro.png" 
    import kontolink from "$lib/assets/partnere/kontolink.png" 
    import economic from "$lib/assets/partnere/economic.png" 
    import datalon from "$lib/assets/partnere/datalon.png" 

    const partners = [
        { src: digitalRevisor, alt: "Digital Revisor" },
        { src: budgetoneTwothree, alt: "Budget 123" },
        { src: danlon, alt: "Danlon" },
        { src: creditro, alt: "Creditro" },
        { src: kontolink, alt: "Kontolink" },
        { src: economic, alt: "Economic" },
        { src: datalon, alt: "Datalon" },
    ];

    // Duplicate the partners array to create a seamless loop
    const extendedPartners = [...partners, ...partners];

    let carouselTrack: HTMLDivElement;

    onMount(() => {
        if (carouselTrack) {
            const trackWidth = carouselTrack.offsetWidth;
            const animationDuration = trackWidth / 50; // Adjust 50 to change speed
            carouselTrack.style.setProperty('--animation-duration', `${animationDuration}s`);
        }
    });
</script>

<section class="container mx-auto overflow-hidden">
    <h2 class="text-3xl font-bold text-center mb-8">Mine Partnere</h2>
    <div class="carousel-container">
        <div class="carousel-track" bind:this={carouselTrack}>
            {#each extendedPartners as partner, i (i)}
                <div class="carousel-item">
                    <img src={partner.src} alt={partner.alt} class="max-w-full max-h-full object-contain">
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .carousel-container {
        overflow: hidden;
        width: 100%;
        position: relative;
    }

    .carousel-track {
        display: flex;
        width: fit-content;
        animation: scroll var(--animation-duration, 60s) linear infinite;
    }

    .carousel-item {
        flex: 0 0 auto;
        width: 200px;
        height: 96px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 40px;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    /* Pause animation when browser tab is not visible */
    @media (prefers-reduced-motion: reduce) {
        .carousel-track {
            animation-play-state: paused;
        }
    }
</style>