import { useCallback, useEffect, useRef, useState } from 'react';

export const useTimer = (
    totalTime: number,
    initialPaused: boolean = false,
    onComplete?: () => void) => {
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [isPaused, setIsPaused] = useState(initialPaused);

    const onCompleteRef = useRef(onComplete);


    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        if (timeLeft === 0 && onCompleteRef.current) {
            onCompleteRef.current();
        }
    }, [timeLeft]);
    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;

        if (!isPaused && timeLeft > 0) {
            timerId = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerId);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerId);
    }, [isPaused, timeLeft]);

    // Expose methods to control the timer easily
    const togglePause = useCallback(() => setIsPaused((prev) => !prev), []);
    const reset = useCallback(() => {
        setTimeLeft(totalTime);
        setIsPaused(initialPaused);
    }, [totalTime, initialPaused]);

    return { totalTime, timeLeft, isPaused, togglePause, reset, setIsPaused };
};