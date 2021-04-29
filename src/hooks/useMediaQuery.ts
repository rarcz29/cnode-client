import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

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
