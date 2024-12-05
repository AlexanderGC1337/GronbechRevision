<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

 
   
</script>

<div class="flex flex-col min-h-screen">
    <header class="">
        <Navbar />
    </header>

    <main class="">
        <slot />
    </main>

    <footer>
        <Footer />
    </footer>
</div>

<style>
    /* This ensures that the page takes up at least the full viewport height */
    :global(body, html) {
        height: 100%;
    }
</style>
