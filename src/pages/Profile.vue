<script setup>
import NavigationProfile from '../components/Profile/NavigationProfile.vue';
import DeadlineSheetProfile from '../components/Profile/DeadlineSheetProfile.vue';
import SubscriptionListProfile from '../components/Profile/SubscriptionListProfile.vue';
import Menu from '../components/Menu.vue';
</script>

<template>
  <section
    class="px-9 min-h-dvh max-[375px]:px-6 relative bg-linear-to-t from-blue-home to-black overflow-hidden"
  >
    <NavigationProfile></NavigationProfile>
    <div class="mt-3 w-full relative">
      <span class="block m-auto w-[89px] h-[89px] bg-white rounded-full"></span>
      <div class="absolute right-0 top-1">
        <img src="../components/Profile/img/info.png" alt="info" class="w-6" />
      </div>
      <div class="mt-1 flex justify-center gap-1">
        <a href="#" class="text-[10px] font-bold text-subtext"
          >https://t.me/m5bank_bot?star...</a
        ><img
          src="../components/Profile/img/copy.png"
          alt="copy"
          class="w-[14px] h-[14px]"
        />
      </div>
    </div>
    <DeadlineSheetProfile></DeadlineSheetProfile>
    <SubscriptionListProfile></SubscriptionListProfile>
    <div>
      <p class="pl-2 font-bold">Возможности</p>
      <div
        class="p-1 flex justify-center gap-10 items-center bg-blue-home rounded-full"
      >
        <img
          src="../components/Profile/img/possibilities.webp"
          alt="possibilities"
          class="w-11"
        />
        <span class="font-bold">Рефералы</span>
      </div>
    </div>

    <Menu></Menu>
  </section>
</template>

<style scoped></style>
