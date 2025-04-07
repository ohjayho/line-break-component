import { defineStore } from "pinia";
import { ref } from "vue";

export const useCheckMobileStore = defineStore("checkMobile", () => {
  const isMobile = ref(false);

  const onCheckMobile = () => {
    isMobile.value = window.matchMedia("(max-width:480px)").matches;
  };

  return { isMobile, onCheckMobile };
});
