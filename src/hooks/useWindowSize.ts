import {useState, useEffect} from 'react';

interface Size {
    width: number | undefined;
}

function useWindowSize(): Size {

    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;
