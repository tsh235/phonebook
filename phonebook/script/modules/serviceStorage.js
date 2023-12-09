export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (key, value) => {
  const data = getStorage(key);
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key, phone) => {
  const data = getStorage(key);

  const filteredData = data.filter(item => item.phone !== phone);
  localStorage.setItem(key, JSON.stringify(filteredData));
};
