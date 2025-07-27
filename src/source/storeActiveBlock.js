import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useActiveBlockStore = defineStore('activeBlock', () => {
  const activeBlock = ref('profile');

  const onActiveBlock = (value) => {
    activeBlock.value = value;
  };
  return { activeBlock, onActiveBlock };
});
