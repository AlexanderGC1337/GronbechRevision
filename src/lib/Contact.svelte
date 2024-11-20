<script lang="ts">
    import { onDestroy } from 'svelte';

    let formData = {
        name: "",
        cvr: "",
        tlf: "",
        email: "",
        message: "",
    };
    let status = "";
    let loading = false;
    let errors = {
        tlf: "",
        cvr: ""
    };
    let statusTimeout: NodeJS.Timeout;

    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let userAnswer = "";
    let captchaValid = false;

    onDestroy(() => {
        if (statusTimeout) clearTimeout(statusTimeout);
    });

    function setTemporaryStatus(message: string) {
        status = message;
        if (statusTimeout) clearTimeout(statusTimeout);
        statusTimeout = setTimeout(() => {
            status = "";
        }, 5000);
    }

    function validateCaptcha(): boolean {
        return parseInt(userAnswer) === num1 + num2;
    }

    function validateTlf(value: string): boolean {
        const regex = /^\d{1,8}$/;
        if (!regex.test(value)) {
            errors.tlf = "Telefonnummer skal være 1-8 tal";
            return false;
        }
        errors.tlf = "";
        return true;
    }

    function handleTlfInput(event: Event) {
        const input = event.target as HTMLInputElement;
        formData.tlf = input.value.replace(/\D/g, '').slice(0, 8);
        validateTlf(formData.tlf);
    }

    function validateCvr(value: string): boolean {
        const regex = /^\d{1,8}$/;
        if (!regex.test(value)) {
            errors.cvr = "CVR nummer skal være 1-8 tal";
            return false;
        }
        errors.cvr = "";
        return true;
    }

    function handleCvrInput(event: Event) {
        const input = event.target as HTMLInputElement;
        formData.cvr = input.value.replace(/\D/g, '').slice(0, 8);
        validateCvr(formData.cvr);
    }

    function resetForm() {
        formData = {
            name: "",
            cvr: "",
            tlf: "",
            email: "",
            message: "",
        };
        errors = {
            tlf: "",
            cvr: ""
        };
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        userAnswer = "";
        captchaValid = false;
    }

    async function handleSubmit() {
        const tlfValid = validateTlf(formData.tlf);
        const cvrValid = validateCvr(formData.cvr);
        
        if (!tlfValid || !cvrValid) {
            return;
        }

        if (!validateCaptcha()) {
            setTemporaryStatus("Forkert svar på regnestykket. Prøv igen.");
            return;
        }

        loading = true;
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                resetForm();
                setTemporaryStatus("Beskeden er blevet sendt.");
            } else {
                setTemporaryStatus("Der skete en fejl. Prøv igen senere.");
            }
        } catch (error) {
            setTemporaryStatus("Der skete en fejl. Prøv igen senere.");
        } finally {
            loading = false;
        }
    }
</script>

<form
    on:submit|preventDefault={handleSubmit}
    class="max-w-md mx-auto p-6 space-y-2"
>
    <div class="flex gap-4">
        <div>
            <label for="name" class="block text-sm font-medium mb-1">Navn</label>
            <input
                id="name"
                type="text"
                bind:value={formData.name}
                required
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
        </div>
    
        <div>
            <label for="email" class="block text-sm font-medium mb-1">E-mail</label>
            <input
                id="email"
                type="email"
                bind:value={formData.email}
                required
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
        </div>
    </div>

    <div class="flex gap-4">
        <div>
            <label for="tlf" class="block text-sm font-medium mb-1">Tlf nr.</label>
            <input
                id="tlf"
                type="text"
                bind:value={formData.tlf}
                on:input={handleTlfInput}
                required
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            {#if errors.tlf}
                <p class="text-red-500 text-sm mt-1">{errors.tlf}</p>
            {/if}
        </div>
        <div>
            <label for="cvr" class="block text-sm font-medium mb-1">Cvr nr.</label>
            <input
                id="cvr"
                type="text"
                bind:value={formData.cvr}
                on:input={handleCvrInput}
                required
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            {#if errors.cvr}
                <p class="text-red-500 text-sm mt-1">{errors.cvr}</p>
            {/if}
        </div>
    </div>

    <div>
        <label for="message" class="block text-sm font-medium mb-1">Din besked</label>
        <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="4"
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        ></textarea>
    </div>

    <div class="border p-4 rounded bg-gray-50">
        <label class="block text-sm font-medium mb-1">
            Bekræft at du ikke er en robot: Hvad er {num1} + {num2}?
        </label>
        <input
            type="number"
            bind:value={userAnswer}
            required
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Skriv dit svar her"
        />
    </div>

    <button
        type="submit"
        disabled={loading}
        class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
    >
        {loading ? "Sender..." : "Send besked"}
    </button>

    {#if status}
        <p
            class={status.includes("Beskeden er blevet sendt.")
                ? "text-green-600 text-center"
                : "text-red-600 text-center"}
        >
            {status}
        </p>
    {/if}
</form>