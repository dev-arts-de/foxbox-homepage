<template>
  <footer class="rounded-2xl bg-white dark:bg-gray-900 sm:p-6">
    <div class="md:pt-20 p-10 md:pb-40 mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center">
            <!-- Logo for Light Mode -->
            <img src="/logo-dark.png" alt="Foxfolio Logo Light" class="logo-light block dark:hidden h-8 mr-3" />
            <!-- Logo for Dark Mode -->
            <img src="/logo.png" alt="Foxfolio Logo Dark" class="logo-dark hidden dark:block h-8 mr-3" />
            <span class="self-center dark:!text-gray-300 text-2xl font-semibold whitespace-nowrap !text-black">Foxfolio</span>
          </a>
          <span class="mt-10 text-sm">eine App von <a href="https://shopitech.de" class="!text-black dark:!text-gray-300 hover:!text-fuchsia-600 dark:hover:text-fuchsia-600"> Shopitech</a></span>
        </div>
        <!-- Adjust grid classes for mobile layout -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ressourcen</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline dark:!text-gray-300 !text-black dark:hover:text-gray-300">Support</a>
              </li>
              <li>
                <a href="#" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">Dokumentation</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline dark:!text-gray-300 !text-black dark:hover:text-gray-300">Preise</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Folge uns</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://github.com/foxfolio" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">GitHub</a>
              </li>
              <li class="mb-4">
                <a href="https://linkedin.com/company/foxfolio" class="hover:underline dark:!text-gray-300 !text-black dark:hover:text-gray-300">LinkedIn</a>
              </li>
              <li >
                <a href="https://github.com/foxfolio" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtliches</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">Datenschutzerklärung</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">Nutzungsbedingungen</a>
              </li>
              <li>
                <a href="#" class="hover:underline !text-black dark:!text-gray-300 dark:hover:text-gray-300">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="/" class="dark:!text-gray-300 !text-black hover:underline">Foxfolio™</a>. Alle Rechte vorbehalten.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.869 8.166 6.84 9.488.5.092.68-.218.68-.484 0-.24-.008-.868-.013-1.703-2.782.605-3.37-1.344-3.37-1.344-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.113-4.555-4.951 0-1.094.39-1.986 1.03-2.688-.104-.253-.447-1.273.097-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.852.004 1.705.115 2.504.337 1.908-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.702 1.03 1.595 1.03 2.688 0 3.847-2.339 4.694-4.566 4.943.36.309.68.92.68 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.69.481A10.017 10.017 0 0022 12c0-5.52-4.48-10-10-10z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.75 18.5H4.75V9H7.75v9.5zM6.25 7.75C5.56 7.75 5 7.19 5 6.5S5.56 5.25 6.25 5.25 7.5 5.81 7.5 6.5 6.94 7.75 6.25 7.75zM19 18.5h-3v-4.5c0-1.08-.86-2-2-2s-2 .92-2 2V18.5h-3V9h3v1.48c.61-.97 1.86-1.48 3-1.48 2.21 0 4 1.79 4 4V18.5z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>