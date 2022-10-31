import {useEffect, useLayoutEffect} from "react";

export function useOutsideAlerter(ref, setIsVisible) {
    useEffect(() => {
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisible(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, setIsVisible]);
}

export function useOutsideAlerterAfter(ref, setIsVisible, counter, setCounter) {
    useLayoutEffect(() => {
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                if (counter !== 0)
                    setIsVisible(false);
                else
                    setCounter(counter + 1)
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, setIsVisible, counter, setCounter]);
}