import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useActiveBlockStore = defineStore('activeBlock', () => {
  const activeBlockProfile = ref('profile');
  const activeBlockHunt = ref('subscriptions');

  const onActiveBlock = (value) => {
    if (value === 'profile' || value === 'wallet') {
      activeBlockProfile.value = value;
    } else {
      activeBlockHunt.value = value;
    }
  };
  return { activeBlockProfile, activeBlockHunt, onActiveBlock };
});
