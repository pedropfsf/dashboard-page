import { useEffect, useState } from "react";

export function useMediaQueries(value: string) {
  const [isMatches, setIsMatches] = useState(false);
  const matchMedia = window.matchMedia(value);

  useEffect(() => {
    setIsMatches(matchMedia.matches);
    matchMedia.addEventListener("change", ({ matches }) => {
      setIsMatches(matches);
    });
  }, [matchMedia]);

  return { isMatches };
}
