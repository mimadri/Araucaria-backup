import { ref } from 'vue';

const prompt = ref('');

export const usePrompt = () => ({
  prompt,
});
