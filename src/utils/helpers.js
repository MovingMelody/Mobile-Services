export const generateId = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };