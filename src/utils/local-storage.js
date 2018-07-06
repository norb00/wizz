export function getLocalStorageItem (targetKey) {
    const rawData = localStorage.getItem(`blockometer.${targetKey}`);
    try {
        return JSON.parse(rawData);
    } catch (e) {
        return rawData;
    }
};

export function setLocalStorage (variable, value) {
    localStorage.setItem(`blockometer.${variable}`, JSON.stringify(value));
};
