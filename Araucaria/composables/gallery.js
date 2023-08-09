import { ref } from 'vue';
import { base64ToBlob } from '@/utils/imageManipulation';

const gallery = ref([]);
const backendIP = import.meta.env.VITE_WS_DIR;
const backendURL = `http://${backendIP}:8000/send_email/`;

export const useGallery = () => {
  const isGalleryEmpty = () => gallery.value.length === 0;
  const addImageToGallery = (base64) => {
    const blob = base64ToBlob(base64);
    const url = URL.createObjectURL(blob);
    gallery.value.push({
      img: url,
      base64,
    });
  };
  const addBlobToGallery = (img, base64) => gallery.value.push({ img, base64 });
  const deleteImageFromGallery = (n) => {
    gallery.value = gallery.value.filter((_, idx) => n !== idx);
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
    addBlobToGallery,
    addImageToGallery,
    deleteImageFromGallery,
    gallery,
    isGalleryEmpty,
    sendMailContent,
  };
};
