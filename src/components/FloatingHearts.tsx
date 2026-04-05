import { useEffect, useState } from "react";

const hearts = ["💗", "💕", "💖", "💘", "🩷", "✨"];

interface FloatingHeart {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [heartList, setHeartList] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const initial: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: hearts[Math.floor(Math.random() * hearts.length)],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      size: 14 + Math.random() * 20,
    }));
    setHeartList(initial);

    let count = initial.length;
    const interval = setInterval(() => {
      setHeartList((prev) => [
        ...prev.slice(-20),
        {
          id: count++,
          emoji: hearts[Math.floor(Math.random() * hearts.length)],
          left: Math.random() * 100,
          duration: 6 + Math.random() * 8,
          delay: 0,
          size: 14 + Math.random() * 20,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {heartList.map((h) => (
        <span
          key={h.id}
          className="absolute opacity-0"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `float-heart ${h.duration}s ease-in ${h.delay}s forwards`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
