const loading = ref(false);

export const useLoading = () => {
  const toggleLoading = () => {
    loading.value = !loading.value;
  };
  return {
    loading,
    toggleLoading,
  };
};
