<script lang="ts">
    import PocketBase from "pocketbase";
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';

    let data = {
        text1: "",
        text2: "",
        text3: "",
        title: "",
        text4: "",
        text5: "",
    };

    let isSubmitting = false;
    let showSuccessMessage = false;

    const RECORD_ID = '6xv7mn1w36cimj6';

    async function handleSubmit() {
        isSubmitting = true;
        try {
            const pb = new PocketBase("http://127.0.0.1:8090");
            await pb.collection('about').update(RECORD_ID, data);
            showSuccessMessage = true;
            setTimeout(() => {
                showSuccessMessage = false;
            }, 3000);
        } catch (error) {
            console.error("Error updating record:", error);
        } finally {
            isSubmitting = false;
        }
    }

    onMount(async () => {
        try {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const record = await pb.collection("about").getOne(RECORD_ID);
            data = { 
                text1: record.text1 || "",
                text2: record.text2 || "",
                text3: record.text3 || "",
                title: record.title || "",
                text4: record.text4 || "",
                text5: record.text5 || "",
            };
        } catch (error) {
            console.error("Error fetching record:", error);
        }
    });
</script>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative w-[1000px] px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-6xl mx-auto">
                <div>
                    <h1 class="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>
                </div>
                <form on:submit|preventDefault={handleSubmit} class="">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {#each [1, 2, 3, 4, 5] as i}
                            <div>
                                <label for="text{i}" class="block text-lg font-medium text-gray-700 mb-2">Text {i}</label>
                                <textarea
                                    id="text{i}"
                                    rows="10"

                                    bind:value={data[`text${i}`]}
                                    class="w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                ></textarea>
                            </div>
                        {/each}
                    </div>
                    <div class="flex items-center justify-end">
                        <button
                            type="submit"
                            class="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 text-lg font-medium text-white shadow-sm hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-200 ease-in-out w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Saving...' : 'Gem'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {#if showSuccessMessage}
        <div transition:fade="{{ duration: 300 }}" class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            Changes saved successfully!
        </div>
    {/if}
</div>