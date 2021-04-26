import { useEffect, useState } from 'react';

const useMediaQuery = (size: number, type: 'min' | 'max'): boolean => {
    const [matches, setMatches] = useState(false);

    const query = `(${type}-width: ${size}px)`;

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const handleResize = () => {
            setMatches(media.matches);
        };
        media.addEventListener('change', handleResize);
        return () => media.removeEventListener('change', handleResize);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;
