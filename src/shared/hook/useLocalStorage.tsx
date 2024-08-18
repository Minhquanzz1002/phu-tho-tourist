import React, {useCallback, useEffect, useState} from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
    const readValue = useCallback((): T => {
        const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValueToUse;
        } catch (error) {
            console.error(error);
            return initialValueToUse;
        }
    }, [initialValue, key])

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(error);
        }
    }, [key, storedValue])

    const removeValue = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue instanceof Function ? initialValue() : initialValue);
        } catch (error) {
            console.warn(error);
        }
    }, [initialValue, key]);

    useEffect(() => {
        setStoredValue(readValue());
    }, [key]);

    return [storedValue, setValue, removeValue];
}
