<template>
  <div>
    <div class="container my-5 md:my-0 w-full flex flex-col md:flex-row gap-5 md:gap-5 justify-between items-center">
      <div class="flex flex-col md:py-14 items-center">
        <nuxt-img
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329346/Cycled/cycledlogo_dlp1mh.png"
          alt="image"
          width="200"
          height="auto"
        />
        <div class="my-5 text-2xl font-medium font-primary">
          Turn your <span class="emphasis font-semibold">trash</span>, into
          <span class="emphasis font-semibold">Cash</span>
        </div>
      </div>
      <div class="text-center">
        <small class="font-semibold">Copyright © 2023 All rights reserved to Cycled</small>
        <div class="flex flex-wrap justify-center gap-1">
          <div v-for="creator in creators" class="flex">
            <nuxt-link :to="creator.linkedin">
              <small>{{ creator.name }} | </small>
            </nuxt-link>
          </div>
        </div>
        <lord-icon
          src="https://cdn.lordicon.com/fsihxwoq.json"
          trigger="hover"
          colors="primary:#f58543,secondary:#121331"
          style="width: 70px; height: 70px"
        >
        </lord-icon>
      </div>

      <nav class="social-nav flex gap-5">
        <nuxt-img
          v-for="nav in socialNav"
          :key="nav.icon"
          class=""
          :src="nav.icon"
          alt="image"
          width="40"
          height="auto"
        />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://cdn.lordicon.com/bhenfmcm.js",
    },
  ],
});

const socialNav = [
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/facebook_ots8uf.png",
  },
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329348/Cycled/insta_yjkezr.png",
  },
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/linkedin_etr33h.png",
  },
];

const creators = [
  { name: "Stav Schnarch", linkedin: "https://www.linkedin.com/in/stav-schnarch-13856a272" },
  { name: "Rom Elias" },
  { name: "Yehonatan Sabag", linkedin: "https://www.linkedin.com/in/yonatan-sabag-89a6411ba/" },
  { name: "Rotem Strauss" },
  { name: "Ilay Landes" },
];
</script>

<style scoped></style>
