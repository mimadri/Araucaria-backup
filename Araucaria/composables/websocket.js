const socketIP = import.meta.env.VITE_WS_DIR;
const socketID = Math.random().toString().substring(10, 15);
const socketURL = `ws://${socketIP}:8000/diffuse/${socketID}`;

const { send, data } = useWebSocket(socketURL, {
  autoReconnect: {
    retries: 3,
    delay: 3000,
    onFailed() {
      alert("Failed to connect WebSocket after 3 retries");
    },
  },
});

export const useDiffusionSocket = () => {
  const sendImagePrompt = (img, prompt) => {
    const content = {
      prompt,
      encoded_img: img,
      translate: true,
    };

    send(JSON.stringify(content), true);
  };

  return { sendImagePrompt, data };
};
