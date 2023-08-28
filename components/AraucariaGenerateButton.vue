<script setup>
const { toggleLoading } = useLoading();
const { getCanvasImageBase64, canvas } = useCanvas();
const { data, sendImagePrompt } = useDiffusionSocket();
const { prompt } = usePrompt();
const { addImageToGallery, isGalleryEmpty } = useGallery();

const toggleButton = () => {
  toggleLoading();
  const base64Canvas = getCanvasImageBase64();
  if (isGalleryEmpty() || !canvas.value.isEmpty()) {
    addImageToGallery(base64Canvas);
  }
  sendImagePrompt(base64Canvas, prompt.value);
};

watch(data, (msg) => {
  const { msgType } = JSON.parse(msg);
  switch (msgType) {
    case "result": {
      toggleLoading();
      break;
    }
    default: {
      break;
    }
  }
});

function enter(event) {
  if (event.code === "Enter") toggleButton();
}

window.onkeydown = enter;
</script>

<template>
  <v-btn flat color="success" size="x-large" class="mx-2" @click="toggleButton">
    Generar
  </v-btn>
</template>
