<script>
  let navn = '';
  let tlf = '';
  let mail = '';
  let cvr = '';
  let emne = '';
  let besked = '';
  let status = '';

  function handleInput(event, field) {
    let value = event.target.value.replace(/\D/g, '').slice(0, 8);
    if (field === 'tlf') {
      tlf = value;
    } else if (field === 'cvr') {
      cvr = value;
    }
  }

  function validateInput(value) {
    return value.length === 8;
  }

  async function handleSubmit() {
    if (!validateInput(tlf) || !validateInput(cvr)) {
      status = 'Tlf og CVR skal være præcis 8 cifre.';
      return;
    }

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
</script>

<div id="kontakt" class="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label for="navn" class="block text-sm font-medium text-gray-700 mb-1">Navn:</label>
        <input id="navn" type="text" bind:value={navn} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
      </div>
      <div>
        <label for="tlf" class="block text-sm font-medium text-gray-700 mb-1">Tlf:</label>
        <input 
          id="tlf" 
          type="text" 
          inputmode="numeric" 
          bind:value={tlf} 
          on:input={(e) => handleInput(e, 'tlf')}
          required 
          class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" 
        />
      </div>
      <div>
        <label for="mail" class="block text-sm font-medium text-gray-700 mb-1">Mail:</label>
        <input id="mail" type="email" bind:value={mail} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
      </div>
      <div>
        <label for="cvr" class="block text-sm font-medium text-gray-700 mb-1">CVR:</label>
        <input 
          id="cvr" 
          type="text" 
          inputmode="numeric" 
          bind:value={cvr} 
          on:input={(e) => handleInput(e, 'cvr')}
          required 
          class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" 
        />
      </div>
    </div>
    <div>
      <label for="emne" class="block text-sm font-medium text-gray-700 mb-1">Emne:</label>
      <input id="emne" type="text" bind:value={emne} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
    </div>
    <div>
      <label for="besked" class="block text-sm font-medium text-gray-700 mb-1">Besked:</label>
      <textarea id="besked" bind:value={besked} required class="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" rows="5"></textarea>
    </div>
    <div>
      <button type="submit" class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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