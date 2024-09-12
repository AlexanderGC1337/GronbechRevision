<script lang="ts">
  let navn = '';
  let tlf = '';
  let mail = '';
  let cvr = '';
  let emne = '';
  let besked = '';
  let status = '';

  async function handleSubmit() {
    status = 'Sender...';
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ navn, tlf, mail, cvr, emne, besked }),
      });
      
      if (response.ok) {
        status = 'Besked sendt succesfuldt!';
        navn = tlf = mail = cvr = emne = besked = '';
      } else {
        status = 'Kunne ikke sende besked. Prøv venligst igen.';
      }
    } catch (error) {
      console.error('Fejl:', error);
      status = 'Der opstod en fejl. Prøv venligst igen senere.';
    }
  }

  function validateNumber(event: Event, field: 'tlf' | 'cvr') {
    const input = event.target as HTMLInputElement;
    const regex = /^[0-9]{0,8}$/;
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 8);
    }
  }
</script>

<div id="kontakt" class="mb-10">‎ </div>
<div class="px-2">
  <div class="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg mb-12">
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label for="navn" class="block text-sm font-medium text-gray-700 mb-1">Navn</label>
          <input id="navn" type="text" bind:value={navn} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
        </div>
        <div>
          <label for="tlf" class="block text-sm font-medium text-gray-700 mb-1">Telefon nr. (8 cifre)</label>
          <input id="tlf" type="tel" bind:value={tlf} on:input={(e) => validateNumber(e, 'tlf')} required pattern="[0-9]{8}" maxlength="8" class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
        </div>
        <div>
          <label for="mail" class="block text-sm font-medium text-gray-700 mb-1">Mail</label>
          <input id="mail" type="email" bind:value={mail} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
        </div>
        <div>
          <label for="cvr" class="block text-sm font-medium text-gray-700 mb-1">CVR (8 cifre)</label>
          <input id="cvr" type="text" bind:value={cvr} on:input={(e) => validateNumber(e, 'cvr')} required pattern="[0-9]{8}" maxlength="8" class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
        </div>
      </div>
      <div>
        <label for="emne" class="block text-sm font-medium text-gray-700 mb-1">Emne</label>
        <input id="emne" type="text" bind:value={emne} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
      </div>
      <div>
        <label for="besked" class="block text-sm font-medium text-gray-700 mb-1">Besked</label>
        <textarea id="besked" bind:value={besked} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" rows="5"></textarea>
      </div>
      <div>
        <button type="submit" class="btn glass bg-orange-500 hover:bg-orange-400 text-white border-none uppercase tracking-wider transition-all duration-300 ease-in-out text-sm w-full">
          Send
        </button>
      </div>
      {#if status}
        <p class="mt-2 text-lg text-center" class:text-green-600={status.includes('succesfuldt')} class:text-red-600={!status.includes('succesfuldt')}>
          {status}
        </p>
      {/if}
    </form>
  </div>
</div>