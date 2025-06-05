import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

type CarouselProps = {
  images: string[];
};

export function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-contain mx-auto transition-all duration-700 ease-in-out"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow transition duration-300"
      >
        <CaretLeft size={24} className="text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow transition duration-300"
      >
        <CaretRight size={24} className="text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}