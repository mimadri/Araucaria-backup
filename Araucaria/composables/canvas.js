const strokeColor = ref('#000000');
const backgroundColor = ref('#FFFFFF');
const lineWidth = ref(15);
const canvasWidth = ref(768);
const canvasHeight = ref(512);
const backgroundImage = ref(null);
const image = ref(''); // base64 canvas state
const canvas = ref(null);

export const useCanvas = () => {
  const setBackgroundImage = (val) => (backgroundImage.value = val);
  const undo = () => canvas.value.undo();
  const redo = () => canvas.value.redo();
  const reset = () => {
    setBackgroundImage(null);
    canvas.value.redraw();
    canvas.value.reset();
  };
  const setCanvasImage = async (obj) => {
    await canvas.value.reset();
    setBackgroundImage(obj);
    await canvas.value.redraw();
  };
  const getCanvasImageBase64 = () => image.value.split(',')[1];

  return {
    strokeColor,
    backgroundColor,
    lineWidth,
    canvasWidth,
    canvasHeight,
    image,
    backgroundImage,
    setBackgroundImage,
    setCanvasImage,
    getCanvasImageBase64,
    canvas,
    undo,
    redo,
    reset,
  };
};
