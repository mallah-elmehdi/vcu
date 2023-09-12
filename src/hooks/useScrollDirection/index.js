import { useEffect, useState, useRef } from 'react';

const useScrollDirection = () => {
    const threshold = 100;
    const [scrollDirection, setScrollDirection] = useState('up');
    const prevScrollY = useRef(0);

    const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - prevScrollY.current) >= threshold) {
            const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';
            setScrollDirection(newScrollDirection);
            prevScrollY.current = scrollY > 0 ? scrollY : 0;
        }
    };

    useEffect(() => {
        prevScrollY.current = window.pageYOffset;
        window.addEventListener('scroll', updateScrollDirection);
        return () => window.removeEventListener('scroll', updateScrollDirection);
    }, [scrollDirection]);

    return scrollDirection;
};

export default useScrollDirection;
