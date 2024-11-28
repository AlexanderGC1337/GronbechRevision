<script lang="ts">
    import PocketBase from "pocketbase";
    import { pb, currentUser } from "$lib/pocketbase";
    import AboutCms from "$lib/AboutCms.svelte";
    import { onMount } from "svelte";

    function logUd() {
        pb.authStore.clear();
        window.location.href = "/";
    }
</script>

{#if $currentUser}
    <section class="pt-20">
        <div>
            <AboutCms />
        </div>
    </section>
{:else}
    <div>Wrong path</div>
{/if}
