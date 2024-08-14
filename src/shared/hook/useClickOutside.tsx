import React, {useCallback, useEffect} from "react";
type Event =  MouseEvent | TouchEvent;

const useClickOutside = <T extends  HTMLElement> (ref: React.RefObject<T>, onClickOutside: (e: Event) => void) => {
    const handleClickOutside = useCallback(
        (event: Event) => {
            if (event && ref.current && !ref.current.contains(event.target as Node)) {
                console.log("event");
                onClickOutside(event);
            }
        },
        [ref, onClickOutside]
    )

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return  () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        }
    }, [handleClickOutside]);
}

export default useClickOutside;