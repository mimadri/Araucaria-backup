export const base64ToBlob = (
  base64,
  contentType = "image/png",
  chunkLength = 512
) => {
  const byteCharsArray = Array.from(
    atob(base64.substr(base64.indexOf(",") + 1))
  );
  const chunksIterator = new Array(
    Math.ceil(byteCharsArray.length / chunkLength)
  );
  const bytesArrays = [];

  for (let c = 0; c < chunksIterator.length; c += 1) {
    bytesArrays.push(
      new Uint8Array(
        byteCharsArray
          .slice(c * chunkLength, chunkLength * (c + 1))
          .map((s) => s.charCodeAt(0))
      )
    );
  }

  const blob = new Blob(bytesArrays, { type: contentType });

  return blob;
};
