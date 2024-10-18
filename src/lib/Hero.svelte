<script lang="ts">
  import heroImage from "$lib/assets/images/herobg.jpg";
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  
  export let imageUrl = heroImage;

  $: backgroundStyle = `background-image: url('${imageUrl}');`;

  let visible = false;
  let scrollY: number;
  let innerHeight: number;
  let innerWidth: number;
  let heroElement: HTMLElement;
  
  const stopPoint = 80; // equivalent to pb-32 (8rem * 16px)
  
  $: scrollProgress = Math.min(scrollY / (heroElement?.offsetHeight || 1), 1);
  $: contentPosition = `translate(-50%, calc(-50% + ${Math.min(scrollProgress * (innerHeight / 2 - stopPoint), innerHeight / 2 - stopPoint)}px))`;

  onMount(() => {
      visible = true;
  });

  $: fontSize = innerWidth < 640 ? 'text-3xl' : 
                innerWidth < 768 ? 'text-4xl' : 
                innerWidth < 1024 ? 'text-5xl' : 'text-6xl';
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<div 
bind:this={heroElement}
class="hero min-h-screen bg-cover bg-center relative overflow-hidden" 
style={backgroundStyle}
>
{#if visible}
  <div 
    class="hero-overlay bg-opacity-60 absolute inset-0"
    transition:fly="{{ y: 50, duration: 1000 }}"
  ></div>
  <div 
    class="fade-out-overlay absolute inset-0"
    transition:fly="{{ y: 50, duration: 1000 }}"
  ></div>
  <div 
    class="hero-content text-neutral-content text-center absolute left-1/2 top-1/2 w-full max-w-none z-10 px-4 sm:px-6 lg:px-8"
    style="transform: {contentPosition}"
    transition:fly="{{ y: 50, duration: 1000, delay: 200 }}"
  >
    <div class="flex flex-col items-center">
      <h1 class="mb-5 font-bold leading-tight {fontSize}">Digital bogføring i øjenhøjde</h1>
      <div class="flex gap-2 md:flex-row flex-col">

        <a 
          href="tel:+45-42210418" 
          class="btn btn-wide uppercase tracking-wider  bg-orange-500 hover:bg-orange-400 text-base-100 border-none text-sm sm:text-base transition-all duration-300 ease-in-out"
        >
          Ring nu
        </a>
        <a 
          href="mailto:kontor@gronbechrevision.dk" 
          class="btn btn-wide uppercase tracking-wider  bg-orange-500 hover:bg-orange-400 text-base-100 border-none text-sm sm:text-base transition-all duration-300 ease-in-out "
        >
          Send email
        </a>
      </div>
    </div>
  </div>
{/if}
</div>

<style>
.fade-out-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  pointer-events: none;
}

@media (max-width: 640px) {
  .hero-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>