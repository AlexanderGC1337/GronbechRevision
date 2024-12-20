<!-- src/routes/jobs/+page.svelte -->
<script lang="ts">
  // Sample job data - replace with your actual data source
  const jobs = [
    {
      id: 1,
      title: 'Erfaren bogholder',
      department: 'Bogføring',
      location: 'Viborg',
      type: 'Del-tid',
      slug: 'erfarenbogholder',
      isActive: false,
      postedDate: '2024-12-01',
      closingDate: '2024-12-20'
    }
  ];

  const activeJobs = jobs.filter(job => job.isActive);
  const pastJobs = jobs.filter(job => !job.isActive);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="max-w-4xl mx-auto px-4 pt-28 pb-20">
  <!-- Active Jobs Section -->
  <section>
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Aktuelle job opslag</h1>
    
    <div class="space-y-4 mb-16">
      {#if activeJobs.length > 0}
        {#each activeJobs as job (job.id)}
          <a 
            href="/jobs/{job.slug}" 
            class="block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
              <div class="flex flex-wrap gap-4 text-gray-600 mb-3">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.department}
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </div>
              </div>
              <div class="text-sm text-gray-500">
                Opslået: {formatDate(job.postedDate)}
              </div>
            </div>
          </a>
        {/each}
      {:else}
        <div class="text-center py-12 bg-gray-50 rounded-lg">
          <p class="text-gray-600">Der er i øjeblikket ingen ledige stillinger.</p>
        </div>
      {/if}
    </div>
  </section>

  <!-- Past Jobs Section -->
  <section>
    <h2 class="text-3xl font-bold text-gray-700 mb-6">Tidligere stillinger</h2>
    
    <div class="space-y-4">
      {#each pastJobs as job (job.id)}
      <a href={"/job/" + job.slug}>
        <div class="block hover:shadow-md bg-gray-50 rounded-lg border border-gray-200 p-6">
          <h3 class="text-xl font-semibold text-gray-700 mb-2">{job.title}</h3>
          <div class="flex flex-wrap gap-4 text-gray-600 mb-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.department}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {job.type}
            </div>
          </div>
          <div class="text-sm text-gray-500">
            <div>Opslået: {formatDate(job.postedDate)}</div>
            <div>Lukket: {formatDate(job.closingDate)}</div>
          </div>
        </div>
      </a>
      {/each}
    </div>
  </section>
</div>