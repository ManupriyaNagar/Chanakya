import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

export default function MinimalFooter() {
  return (
    <footer className="bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center border-b border-gray-200">
        <h2 className="uppercase tracking-widest text-sm font-semibold">
          All Around The World
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200">
        {/* Social & Tag */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="uppercase font-light text-sm mb-2 md:mb-0">
            Follow <span className="font-semibold">#URBAN CHANAKYA</span>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/urbanchanakya"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebookF className="text-xl hover:text-gray-500" />
            </a>
            <a
              href="https://twitter.com/urbanchanakya"

              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter className="text-xl hover:text-gray-500" />
            </a>
            <a
              
              href="https://www.instagram.com/urbanchanakya/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram className="text-xl hover:text-gray-500" />
            </a>
            <a
              
              href="https://www.youtube.com/@urbanchanakya"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube className="text-xl hover:text-gray-500" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-sm text-left md:text-right">
          <h3 className="uppercase font-medium mb-2">Newsletter</h3>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Please enter your email address"
              className="px-4 py-2 w-full focus:outline-none text-sm"
            />
            <button className="bg-white text-black px-3 font-semibold text-xs border-l border-gray-300">
              OK
            </button>
          </div>
          <a href="#" className="text-xs text-gray-500 mt-1 inline-block underline">
            Read legal terms
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-sm">
        <button className="uppercase font-semibold text-xs mb-2 hover:underline">
          Back to Top
        </button>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-500 text-xs mt-2">
          <span>ADRESS:</span>
          <span>Guwahati, Assam</span>
          <span>Legal Terms</span>
          <span>Privacy Policy</span>
          <span>Contact:</span>
          <span>hello@urbanchanakya.in</span>
        </div>
      </div>
    </footer>
  );
}


// export default function Footer() {
//   return (
//     <footer className="bg-black text-white px-6 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo and Socials */}
//         <div>
//           <div className="text-4xl font-bold text-white mb-2">
//             <span className="text-red-500">R</span>
//             <span className="text-yellow-400">B</span>
//             <span className="text-green-500">S</span>
//             <span className="text-blue-500">H</span>
//             <span className="block text-white text-2xl mt-2">studio</span>
//           </div>
//           <div className="flex space-x-4 mt-4 text-gray-300 text-xl">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-linkedin-in"></i>
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-youtube"></i>
//           </div>
//         </div>

//         {/* Our Links */}
//         <div>
//           <h3 className="font-bold text-lg mb-3">ADRESS:</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline"></a></li>
//             <li><a href="#" className="hover:underline">FAQ</a></li>
//             <li><a href="#" className="hover:underline">Blogs</a></li>
//           </ul>
//         </div>

//         {/* Find It Fast */}
//         <div>
//           <h3 className="font-bold text-lg mb-3">Find It Fast</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">About Us</a></li>
//             <li><a href="#" className="hover:underline">Services</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Address and Contact */}
//         <div>
//           <p className="mb-2">T3-236, Golden-I, Techzone IV,</p>
//           <p className="mb-2">Greater Noida West, UP - 201306</p>
//           <p className="mb-2">info@rbshstudio.com</p>
//           <p className="mb-2">+91 92043 09173</p>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center border-t border-gray-700 mt-12 pt-6 text-gray-400">
//         © 2025 Copyright rbshstudio. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }
