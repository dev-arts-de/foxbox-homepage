<template>
  <section class="relative create-portfolio-section">
    <!-- Video Background, only visible in dark mode and on larger screens -->
    <video autoplay loop muted playsinline class="video-bg hidden md:hidden dark:md:block">
      <source src="/bg2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative z-10">
      <div class="mx-auto max-w-screen-sm text-center pb-10">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
          Erstelle dein kostenloses Online-Portfolio
        </h2>
        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Nutze Foxfolio, um dein professionelles Portfolio zu erstellen – einfach, schnell und völlig kostenlos.
        </p>
        <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 hover:!text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          Portfolio kostenlos erstellen
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreatePortfolioSection'
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
  z-index: -1; /* Ensures the video stays in the background */
}

.create-portfolio-section {
  position: relative;
  overflow: hidden;
}
</style>