<script setup>
import { watch } from 'vue';
import VueDrawingCanvas from 'vue-drawing-canvas';
import { useCanvas } from '@/composables/canvas';
import { useDiffusionSocket } from '@/composables/websocket';
import { base64ToBlob } from '@/utils/imageManipulation';
import { useGallery } from '@/composables/gallery';

const { addBlobToGallery } = useGallery();

const {
  strokeColor,
  backgroundColor,
  lineWidth,
  canvasWidth,
  canvasHeight,
  image,
  canvas,
  undo,
  redo,
  backgroundImage,
  setCanvasImage,
} = useCanvas();

const { data } = useDiffusionSocket();

watch(data, async (msg) => {
  const { msgType, content } = JSON.parse(msg);
  switch (msgType) {
    case 'result': {
      const blob = base64ToBlob(`data:image/png;base64,${content.result}`);
      const url = URL.createObjectURL(blob);
      addBlobToGallery(url, content.result);
      setCanvasImage(url);
      break;
    }
    default: {
      break;
    }
  }
});

// https://stackoverflow.com/questions/16006583/capturing-ctrlz-key-combination-in-javascript
function keyPress(event) {
  if (event.keyCode === 90 && event.ctrlKey && !event.shiftKey) undo();
  if (event.keyCode === 90 && event.ctrlKey && event.shiftKey) redo();
}

const goFullScreen = (event) => {
  if (event.keyCode === 70 && event.ctrlKey && event.shiftKey) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

window.onkeydown = keyPress;
document.onkeydown = goFullScreen;
</script>

<template>
  <v-main class="pr-0">
    <v-card
      :width="canvasWidth"
      :height="canvasHeight"
    >
      <vue-drawing-canvas
        ref="canvas"
        v-model:image="image"
        :background-color="backgroundColor"
        :color="strokeColor"
        :width="canvasWidth"
        :height="canvasHeight"
        :background-image="backgroundImage"
        :line-width="lineWidth"
      />
    </v-card>
  </v-main>
</template>
