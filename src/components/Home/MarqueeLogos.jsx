import Image from "next/image";
import Marquee from "react-fast-marquee";

const imageSources = [
  "/afa.jpg",
 "/v.jpg",
  "/y2.jpg",
 "/uni.jpg",
 "/tritantas.jpg",
  "/tractor.jpg",
  "/sukalp.jpg",
  "/kitab.jpg",
  "/gov.jpg",
];

export default function RotatingImageMarquee() {
  return (
    <div className="bg-white py-20 ">
      <Marquee gradient={false} speed={60} direction="left" loop={0}>
        {imageSources.map((src, i) => (
          <div key={i} className="mx-4">
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={200}
              height={200}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
