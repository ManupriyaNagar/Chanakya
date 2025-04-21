import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Calendar, CheckCircle, BarChart } from "lucide-react";

export default function TestimonialComponent() {
  return (
    <div className="relative w-full h-[70vh] bg-gray-100 overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0">
        <Image
          src="/third.png"
          alt="Abstract Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Left side icons */}
      <div className="absolute bottom-6 left-6 z-10 flex space-x-4">
      <div className="flex items-center justify-center bg-[#e5e5e5] rounded-full w-10 h-10">
          <CheckCircle className="w-6 h-6 text-black/80" />
        </div>
        <div className="flex items-center justify-center bg-[#e5e5e5] rounded-full w-10 h-10">
      <Calendar className="w-5 h-5 text-black" />
    </div>
    <div className="flex items-center justify-center bg-[#e5e5e5] rounded-full w-10 h-10">
          <BarChart className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Client count card */}
      <Card className="absolute top-10 right-76 w-50 shadow-xl z-10 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl">
        <CardContent className="flex flex-col items-center text-center py-4">
          <Share2 className="w-5 h-5 text-black mb-2" />
          <p className="text-xl font-semibold text-black">34k</p>
          <p className="text-sm text-black/40">Of Happy Clients<br />Since 2018</p>
          <div className="flex -space-x-2 mt-2">
            <Image src="/hero.png" alt="User 1" width={24} height={24} className="rounded-full border border-white" />
            <Image src="/hero.png" alt="User 2" width={24} height={24} className="rounded-full border border-white" />
          </div>
        </CardContent>
      </Card>

      {/* Testimonial card */}
      <Card className="absolute bottom-10 right-10 w-60 shadow-xl z-10 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl">
        <CardContent className="flex flex-col items-start py-4 px-4">
          <Image src="/hero.png" alt="Emily Bennett" width={48} height={48} className="rounded-full mb-3" />
          <p className="text-md font-medium text-black">Powering Change</p>
          <p className="text-sm text-black/80 mb-3">Strategy. Design. Tech.</p>
          <Button variant="outline" className="text-sm w-full border-white text-black hover:bg-white/10">Read Interview</Button>
        </CardContent>
      </Card>
    </div>
  );
}
