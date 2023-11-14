export const fetchData = (key: string) => {
    const dataString = localStorage.getItem(key);
  
    if (dataString === null) {
      // Handle the case when the key is not found in localStorage
      return null; // Or any other appropriate value or action
    }
  
    return JSON.parse(dataString);
  };
  