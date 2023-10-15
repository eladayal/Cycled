<template>
  <div>
    <div
      class="relative z-0 h-[50vh] md:h-[70vh] bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/eladi/image/upload/v1687537540/recycling-concept-flat-lay-min_xs0jfh.jpg')] flex items-center justify-start"
    >
      <div
        class="z-0 opacity-50 absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-black/50 to-black"
      ></div>
      <!-- START -->
      <div class="text-shadow lg:w-2/5 w-3/4 text-2xl md:text-4xl text-white font-semibold z-10 ml-10 md:ml-20">
        <div>
          Unlock the power of recycling with our groundbreaking app: simply
          <span class="emphasis">scan the barcode</span> of any recycled product and effortlessly turn it into
          <span class="emphasis">cash rewards</span>, right at your fingertips!
        </div>
        <div class="my-5 md:my-10">
          Turn your <span class="emphasis font-primary">trash</span>, into <span class="emphasis">Cash</span>
        </div>
        <a href="mailto: cycledil@gmail.com">
          <button
            class="text-white text-sm md:text-xl bg-[#fcb01c] hover:bg-[#ffbb37] font-medium rounded-lg px-5 py-2.5 mr-2 mb-2"
          >
            Get Cycled
          </button></a
        >
      </div>
      <!-- End -->
    </div>
    <!-- How it Works -->
    <!-- style="background-image: url('/images/big-arrow.png')" -->
    <!-- bg-center bg-no-repeat bg-[length:80%_30%] bg-fixed -->
    <section class="container mt-10 mb-24">
      <h2 class="font-bold mx-5 md:mx-0 text-[40px] md:text-[60px] mb-20 font-primary">How the App works</h2>
      <div class="flex flex-col gap-20 mx-20">
        <div
          v-for="(how, idx) in howItWorks"
          :key="how.title"
          class="flex flex-col md:flex-row gap-10 md:even:flex-row-reverse"
        >
          <h2
            class="text-white font-bold text-5xl font-primary h-fit w-fit p-5 bg-[#b9db91] rounded-full"
            :class="idx % 2 ? 'self-end md:self-start' : ''"
          >
            {{ idx + 1 }}
          </h2>
          <div class="flex flex-col sm:flex-row gap-12" :class="idx % 2 ? 'sm:flex-row-reverse' : ''">
            <NuxtImg class="w-48 h-48" :src="how.image" alt="image" width="300" height="auto" />
            <div class="flex flex-col gap-2 w-full md:w-1/2">
              <h2 class="font-bold text-2xl font-primary">{{ how.title }}</h2>
              <p class="text-xl">{{ how.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Belive -->
    <section>
      <div class="container flex flex-col gap-5 md:gap-0 md:flex-row justify-evenly mb-24">
        <div class="md:w-2/5 flex flex-col gap-5">
          <h2 class="font-bold text-4xl font-primary">Our vision</h2>
          <p class="text-xl">
            We at <span class="font-bold">CYCLED</span> believe that it is possible to create change in any field and in
            the fields of sustainability in particular through creating value for all participants in the recycling
            operation and thus creating a real change in our environment and in our day to day lives.
          </p>
        </div>
        <nuxt-img
          class="rounded-3xl object-contain w-full md:w-auto"
          src="https://res.cloudinary.com/eladi/image/upload/v1687536559/trashmoney_j5g8cm.jpg"
          alt="image"
          width="500"
          height="auto"
        />
      </div>
    </section>
    <!-- Belive End -->

    <!-- Join Us -->
    <section>
      <div
        class="flex flex-col gap-5 justify-center items-center text-center bg-gradient-to-r from-[#f58543] to-[#f8b01d] px-6 py-24"
      >
        <h2 class="text-5xl font-bold font-primary">Join the initiative.</h2>
        <p class="text-lg">
          We have ambitious aspirations to transform the world. Get in touch to become a part of this expedition.
        </p>
        <a href="mailto: cycledil@gmail.com">
          <button
            class="text-white text-sm md:text-xl bg-[#fcb01c] hover:bg-[#ffbb37] font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 shadow-lg"
          >
            Join the Initiative
          </button></a
        >
      </div>
    </section>
    <!-- Join Us End -->
  </div>
</template>

<script setup lang="ts">
const howItWorks = [
  {
    title: "Effortlessly scan and organize packages from home",
    description:
      "Make recycling a breeze with Cycled: simply scan the barcode of plastic containers, milk cartons, metal cans, and more as you prepare for recycling",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how1_jrwsnr.png",
  },
  {
    title: "Make the most of your existing recycling spot.",
    description:
      "Continue your usual recycling routine. Easily add your bins or local recycling facility if they're not listed on the map.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how2_okva1w.png",
  },
  {
    title: "Turn recycling into rewards.",
    description:
      "Verify your location with the app and unlock a world of rewards. Earn points or cash to withdraw to your bank account, donate to charity, or enjoy discounts on future purchases.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how3_q6kkcv.png",
  },
];
</script>

<style scoped>
.text-shadow {
  text-shadow: -1px 2px 2px #1d1d1d;
}
</style>
