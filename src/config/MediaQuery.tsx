import { useEffect, useState } from "react"

export const MediaQuery = (query: string) => {
    const [matches, SetMatches] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        SetMatches(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => {
            SetMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handler)

        return() => {
            mediaQuery.removeEventListener('change', handler)
        }
    }, [query])

    return matches;
}

export const Mobile = () => {
    const isMobile = MediaQuery('(max-width: 767px)')
    const isTablet = MediaQuery('(min-width: 768px) and (max-width: 1023px)')
    const isDesktop = MediaQuery('(min-width: 1024px)')
    return {isMobile, isTablet, isDesktop};
}