import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
    const handleClick = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
            document.removeEventListener('click', handleClick);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};
