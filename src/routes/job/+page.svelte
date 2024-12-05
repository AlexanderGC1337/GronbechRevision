<script>
  import { CheckCircle, Phone, Mail, MapPin, Clock, DollarSign } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-28">
  <div class="max-w-4xl mx-auto">
    <!-- Quick Info Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div class="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
        <Clock class="w-5 h-5 text-amber-600 flex-shrink-0" />
        <span class="text-sm sm:text-base">15 timer/uge</span>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
        <MapPin class="w-5 h-5 text-amber-600 flex-shrink-0" />
        <span class="text-sm sm:text-base">Viborg, Toldboden</span>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
        <p class="text-amber-600">DKK</p>
        <span class="text-sm sm:text-base">30-35.000 kr./md. (37t)</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-lg shadow-lg">
      <!-- Title Section -->
      <div class="p-6 sm:p-8 border-b border-gray-200">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
          Bliv en del af min succeshistorie!
        </h1>
        <h2 class="text-lg sm:text-xl text-gray-700 text-center">
          Erfaren bogholder søges til spændende deltidsstilling
        </h2>
      </div>

      <!-- Content Sections -->
      <div class="p-6 sm:p-8 space-y-8">
        <!-- Introduction -->
        <section>
          <p class="text-lg text-gray-700 mb-6">
            Hej! Er du min nye bogholderstjerne, der vil være med til at gøre en forskel for virksomheder primært i Jylland?
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-4">Lidt om mig og min hverdag</h3>
          <p class="text-gray-700">
            I Grønbech Revision har jeg siden 2020 knoklet for at skabe en anderledes revisionsvirksomhed, hvor nærvær og faglig dygtighed går hånd i hånd. Jeg har hjemme i det summende kontorfællesskab på Toldboden i Viborg, hvor latter og faglig sparring er en naturlig del af hverdagen. Her nyder jeg både mine kollegers selskab og den daglige inspiration fra andre engagerede iværksættere.
          </p>
        </section>

        <!-- Why We Need You -->
        <section>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Derfor har jeg brug for dig</h3>
          <p class="text-gray-700">
            Jeg oplever en fantastisk opbakning fra mine kunder, og flere banker på min dør hver uge. For at kunne give alle den service, de fortjener, søger jeg en erfaren bogholder, der kan jonglere med forskellige økonomisystemer og har styr på debet og kredit.
          </p>
        </section>

        <!-- Daily Tasks -->
        <section>
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Din dagligdag bliver fyldt med:</h3>
          <ul class="space-y-4">
            {#each [
              'Selvstændig bogføring for dine egne kunder',
              'Kreativ problemløsning i forskellige økonomisystemer',
              'Tæt dialog med kunder, der sætter pris på din ekspertise',
              'Afstemninger, momsregnskaber og alt det andet, der får tallene til at danse',
              'Forberedelse af årsregnskaber, der får revisorerne til at smile'
            ] as task}
              <li class="flex items-start space-x-3">
                <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{task}</span>
              </li>
            {/each}
          </ul>
        </section>

        <!-- Requirements -->
        <section class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Du er helt sikkert den rette, hvis du:</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Har mindst 5 års erfaring med regnskab og bogføring</span>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div class="text-gray-700">
                <p>Er skarp i et eller flere af disse systemer:</p>
                <ul class="ml-8 mt-2 space-y-1 list-disc">
                  <li>Dinero</li>
                  <li>e-conomic</li>
                  <li>Business Central</li>
                  <li>Uniconta</li>
                </ul>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Trives med at have dine egne kunder og ansvar</span>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Kan lide at arbejde i dit eget tempo og samtidig være en del af et team</span>
            </li>
          </ul>
          <p class="mt-4 text-gray-700 italic">
            Bonus: Har du erfaring med årsregnskaber for selskaber, er det prikken over i'et!
          </p>
        </section>

        <!-- Benefits -->
        <section>
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Jeg tilbyder dig:</h3>
          <ul class="space-y-4">
            {#each [
              '15 timer om ugen med mulighed for at vokse med opgaverne',
              'En løn på 30.000-35.000 kr./md. (ved 37 timer) afhængig af dine kvalifikationer',
              'Fleksible arbejdstider der passer til dit liv',
              'En arbejdsplads hvor jeg hepper på dig',
              'Moderne, digitalt setup der gør arbejdet sjovere',
              'Opstart den 1. februar 2025 eller efter aftale'
            ] as benefit}
              <li class="flex items-start space-x-3">
                <CheckCircle class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{benefit}</span>
              </li>
            {/each}
          </ul>
        </section>

        <!-- Application -->
        <section>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Er du klar til at blive en del af min virksomhed?</h3>
          <p class="text-gray-700">
            Send mig en ansøgning og dit CV, hvor du fortæller, hvorfor du er det perfekte match. Jeg glæder mig til at høre din historie og måske byde dig velkommen i min voksende virksomhed.
          </p>
        </section>

        <!-- Contact -->
        <section class="bg-amber-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Nysgerrig efter at vide mere?</h3>
          <p class="text-gray-700 mb-6">
            Ring gerne til mig hvis du har spørgsmål til stillingen eller besøg min hjemmeside 
            <a href="https://gronbechrevision.dk" class="text-amber-700 hover:text-amber-800 underline">
              gronbechrevision.dk
            </a>
          </p>

          <div class="space-y-4">
            <p class="font-semibold text-gray-900">De varmeste hilsener</p>
            <p class="font-semibold text-gray-900">Berith Nanett Grønbech</p>
            <p class="text-gray-700">Grønbech Revision</p>
            
            <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
              <a href="tel:26367823" class="flex items-center space-x-2 text-amber-700 hover:text-amber-800">
                <Phone class="w-5 h-5" />
                <span>2636 7823</span>
              </a>
              <a href="mailto:kontor@gronbechrevision.dk" class="flex items-center space-x-2 text-amber-700 hover:text-amber-800 md:text-[1rem] text-xs">
                <Mail class="w-5 h-5" />
                <span>kontor@gronbechrevision.dk</span>
              </a>
            </div>
          </div>

          <p class="mt-6 text-sm text-gray-600">
            PS: Jeg holder løbende samtaler, så vent ikke for længe med at sende din ansøgning. 
            Den rette kandidat kan måske starte tidligere end 1. februar 2025.
          </p>
        </section>
      </div>
    </div>
  </div>
</div>