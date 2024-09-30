<script lang="ts">
    import { onMount } from 'svelte';
    import digitalRevisor from "$lib/assets/partnere/digital_revisor.svg" 
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
    let carouselContainer: HTMLDivElement;
    let isHovered = false;
    onMount(() => {
        const animate = () => {
            if (!isHovered && carouselContainer) {
                if (carouselContainer.scrollLeft >= carouselContainer.scrollWidth / 2) {
                    carouselContainer.scrollLeft = 0;
                } else {
                    carouselContainer.scrollLeft += 1;
                }
            }
            requestAnimationFrame(animate);
        };
        animate();
    });
</script>
<section class="container mx-auto py-12 overflow-hidden rounded-full">
    <h2 class="text-3xl font-bold text-center mb-8">Mine Partnere</h2>
    <div 
        class="flex overflow-hidden"
        bind:this={carouselContainer}
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
    >
        {#each extendedPartners as partner, i (i)}
            <div class="w-[200px] h-24 flex-shrink-0 flex items-center justify-center mx-10">
                <img src={partner.src} alt={partner.alt} class="max-w-full max-h-full object-contain">
            </div>
        {/each}
    </div>
</section>
<style>
    .flex {
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .flex::-webkit-scrollbar {
        display: none;
    }
</style>