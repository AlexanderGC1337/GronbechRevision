<script>
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    
</script>

<div class="flex flex-col min-h-screen ">
    <header class="">
        <Navbar />
    </header>

    <main class="flex-grow bg-[#f5f4f44e]">
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
        background-color: #f5f4f44e;
    }
</style>
