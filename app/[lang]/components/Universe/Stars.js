'use client';
import { useEffect, useState } from 'react';

export default function Stars() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starCount = window.innerWidth < 640 ? 50 : 300;
        
        const newStars = Array.from({ length: starCount }).map((_, index) => ({
            id: index,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            size: Math.random() * 1.5 + 0.5
        }));
        
        setStars(newStars);
    }, []);

    if (stars.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-black/70 rounded-full animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}
        </div>
    );
}