<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-hero-bg relative">
    <div class="container pt-40 pb-60 xs:pb-80 sm:pb-96 md:pb-[600px] lg:py-40 2xl:py-64">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white z-20">
          <h1 v-html="heroSectionContent.heading" class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold"></h1>
          <h3 class="text-2xl lg:text-2xl 2xl:text-4.5xl py-4 lg:pt-3 lg:pb-8 font-bold">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-end justify-center">
          <img class="hidden" :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0">
      <img class="block w-11/12 sm:w-3/4 lg:w-7/12 xl:w-8/12 2xl:w-9/12 mx-auto lg:ml-auto lg:mr-0" :src="heroSectionContent.image" :alt="heroSectionContent.alt">
    </div>
  </section>
</template>
