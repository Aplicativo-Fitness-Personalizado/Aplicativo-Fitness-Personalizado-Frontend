import type { ReactNode } from "react";
import { Carousel } from "./Carousel";
type CarouselSectionProps = {
  text: ReactNode;
  images: string[];
  reverse?: boolean;
};

export function CarouselSection({ text, images, reverse = false }: CarouselSectionProps) {
  return (
     <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
      {reverse ? (
        <>
          
          <div className="text-text pt-15 text-base space-y-6">{text}</div>
          <Carousel images={images} />
        </>
      ) : (
        <>
          <Carousel images={images} />
          <div className="text-text pt-15 text-base space-y-6">{text}</div>
         
        </>
      )}
    </div>
  );
}