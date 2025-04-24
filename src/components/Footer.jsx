'use client';

import { Camera, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer >
      <div className="relative  mx-auto bg-white shadow-lg overflow-hidden">
        {/* Yellow stripe */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-500" />
        {/* Black curved block */}
        <div className="absolute bottom-0 left-0 w-32 h-16 bg-gray-900 rounded-tr-full" />

        <div className="relative z-10 px-6 py-8 flex flex-col lg:flex-row items-center lg:items-start">
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden bg-gray-100">
              <Camera className="w-8 h-8 text-gray-300" />
            </div>
          </div>

          {/* Name & contact */}
          <div className="mt-6 lg:mt-0 lg:ml-8 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="text-orange-500">Urabn Chanayak</span>
            </h2>
     

            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />+91 00000 00000
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />hello@urbanchanakya.in
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />Your Address Here
              </li>
            </ul>
          </div>

          {/* Brand info */}
          <div className="mt-8 lg:mt-0 lg:ml-auto text-center lg:text-right">
            <h3 className="text-xl font-semibold text-gray-800">Urban Chanakya</h3>
            <p className="text-gray-500 mt-1">We create the impact</p>
            <div className="flex justify-center lg:justify-end mt-3 space-x-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
