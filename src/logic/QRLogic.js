export const getQRCodeLink = (keys) => {
  const dataObject = {};
  keys.forEach((key) => {
    dataObject[key] = localStorage.getItem(key);
  });
  return `/load/${encodeURIComponent(JSON.stringify(dataObject))}`;
};

export const setDataFromLink = (dataObject) => {
  Object.keys(dataObject).forEach((key) => {
    localStorage.setItem(key, dataObject[key]);
  });
};
