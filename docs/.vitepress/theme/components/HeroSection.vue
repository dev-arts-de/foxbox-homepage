<template>
  <section class="w-full foxfolio-background relative">
    <video autoplay loop muted playsinline class="video-bg hidden md:block dark:hidden">
      <source src="/bg-light.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
      <!-- Logo -->
      <div class="mb-6 hidden md:block">
        <!-- Logo for Light Mode -->
        <a href="/">
          <img src="/logo-dark.png" alt="Foxfolio Logo Dark" class="mb-10 mx-auto w-32 h-auto dark:hidden">
          <!-- Logo for Dark Mode -->
          <img src="/logo.png" alt="Foxfolio Logo" class="mb-10 mx-auto w-32 h-auto hidden dark:block">
        </a>
      </div>
      <h1 class="mb-20 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Intelligente Dateiverwaltung. Einfach gemacht.
      </h1>
      <p>
        Nie wieder Zeit verschwenden mit dem Suchen von Dateien. Unsere KI ordnet, optimiert und schützt deine Daten, damit du dich auf das Wichtige konzentrieren kannst.
      </p>
      <div class="flex flex-col mb-8 mt-10 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
            href="#"
            class="inline-flex justify-center items-center hover:!text-gray-300 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Jetzt Kostenlos Registrieren
          <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a 1 1 0 01-1.414-1.414L14.586 11H3a 1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
            href="#"
            class="inline-flex justify-center items-center dark:!text-white hover:!text-gray-500 !text-black py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-800"
        >
          Erfahre mehr
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.foxfolio-background {
  position: relative;
  overflow: hidden;
}
</style>