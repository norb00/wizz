export function getLocalStorageItem (targetKey) {
    const stations = localStorage.getItem(`wizz.${targetKey}`);
    try {
        return JSON.parse(stations);
    } catch (e) {
        return stations;
    }
}

export function setLocalStorage (variable, value) {
    localStorage.setItem(`wizz.${variable}`, JSON.stringify(value));
}
