import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [valueInLocalStorage, setValueInLocalStorage] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Unable to get stored value key:'${key}' in localStorage`);
      return initialValue;
    }
  });
  const setLocalStorageValue = newValue => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(valueInLocalStorage) : newValue;
      setValueInLocalStorage(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(`Unable to store new value '${key}' to localStorage`);
    }
  };
  return [valueInLocalStorage, setLocalStorageValue];
}
