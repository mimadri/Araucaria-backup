const mailGallery = ref([]);
const backendIP = import.meta.env.VITE_WS_DIR;
const backendURL = `http://${backendIP}:8000/send_email/`;

export const useMailGallery = () => {
  const addImageToMailGallery = (img, base64) => {
    mailGallery.value.push({ img, base64 });
  };
  const deleteImageFromMailGallery = (n) => {
    mailGallery.value = mailGallery.value.filter((_, idx) => n !== idx);
  };

  const sendMailContent = async (email, encodedImages) => {
    const body = {
      email,
      encodedImages,
    };

    await fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(body),
    });
  };

  return {
    mailGallery,
    addImageToMailGallery,
    deleteImageFromMailGallery,
    sendMailContent,
  };
};
