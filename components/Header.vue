<template>
  <div
    class="w-full z-10 transition-all duration-300"
    :class="scrollPosition > 0 ? 'fixed bg-white drop-shadow-lg' : ''"
  >
    <a href="/">
      <div class="flex items-center gap-5 py-5 mx-20 transition-all duration-300 transition-height">
        <nuxt-img
          class=""
          :class="scrollPosition > 70 ? 'w-60 enlarge' : 'descale'"
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1689433369/Cycled/cycledlogo_tvrqqh.png"
          alt="image"
          width="200"
          height="40"
        />
        <nuxt-img
          class="hover:rotate-180 transition-all duration-300"
          :class="scrollPosition > 70 ? 'w-[50px] enlarge' : 'descale'"
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1689433369/Cycled/cycled_arrow_g0fotg.png"
          alt="image"
          width="45"
          height="40"
        />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const scrollPosition = ref(0);

function updateScroll() {
  scrollPosition.value = window.scrollY;
}
if (process.client) {
  window.addEventListener("scroll", updateScroll);
}
</script>

<style scoped>
.enlarge {
  @apply transform scale-110; /* Increase the image size by 25% */
  @apply transition-all duration-300; /* Add transition effect */
}
.descale {
  @apply transform scale-110; /* Increase the image size by 25% */
  @apply transition-all duration-300; /* Add transition effect */
}
</style>
