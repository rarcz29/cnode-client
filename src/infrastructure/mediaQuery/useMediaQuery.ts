import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleResize = () => {
      setMatches(media.matches);
    };

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    media.addEventListener('change', handleResize);
    return () => media.removeEventListener('change', handleResize);
  }, [matches, query]);

  return matches;
};
