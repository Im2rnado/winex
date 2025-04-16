<script setup lang="ts">
import { nextTick } from "vue";
import AppFooter from "./components/layout/AppFooter.vue";
import AppHeader from "./components/layout/AppHeader.vue";

// Scroll to top after transition finishes
function handleAfterEnter() {
   window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
   <AppHeader />
   <RouterView v-slot="{ Component }">
      <Transition name="fade-leave" mode="out-in" @after-enter="handleAfterEnter">
         <component :is="Component"></component>
      </Transition>
   </RouterView>
   <AppFooter />
</template>