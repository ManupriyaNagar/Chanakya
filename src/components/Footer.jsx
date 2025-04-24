// components/Footer.js
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          {/* <h2 className="text-2xl font-bold">Urban Chanakya</h2> */}
          <img src="/footer.png" alt="" />
          <p className="mt-2 text-sm text-gray-300">
            Strategic Political Consulting and Brand Management.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">Home</a></li>
            <li><a href="/careers" className="hover:text-white">Our Services</a></li>
            <li><a href="/blog" className="hover:text-white">Portfolio</a></li>
            <li><a href="/blog" className="hover:text-white">Impact</a></li>
            <li><a href="/blog" className="hover:text-white">Blogs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Branding & Strategies</li>
            <li>Election Management</li>
            <li>Digital & Social Media</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-12 h-12" />
              Address: 510, 5th Floor, Protech Centre, GS Rd, GMC Ward Number 44, Ganeshguri, Guwahati, Assam 781006

            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone: 0361 358 4834
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@urbanchanakya.in
            </li>
          </ul>

          <div className="flex gap-0 mt-4">
  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn" className=" p-4 rounded-sm">
    <Linkedin className="text-white w-6 h-6" />
  </a>

  {/* X (Twitter) */}
  <a href="#" aria-label="X (Twitter)" className=" p-4 rounded-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 1200 1227"
      className="text-white w-6 h-6"
    >
      <path d="M1159.59 0H1001.1L601.36 537.65L200.9 0H0l441.58 598.55L0 1227h158.54l433.01-567.39L1000.45 1227H1200L753.94 636.94 1159.59 0Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram" className="p-4 rounded-sm ">
    <Instagram className=" w-6 h-6 text-white" />
  </a>

  {/* Facebook */}
  <a href="#" aria-label="Facebook" className=" p-4 rounded-sm">
    <Facebook className="text-white w-6 h-6" />
  </a>
</div>


          
        </div>
      </div>

      {/* Bottom line */}
      
      <div className="mt-10 text-center text-lg text-gray-200 border-t border-gray-800 pt-6">
        <div className="flex flex-row justify-between">
<h1> POWERED BY <span className="text-orange-500"> RBSH STUDIO. </span></h1>
<h1> © {new Date().getFullYear()} Urban Chanakya. All rights reserved.</h1>
        </div>
       
      </div>
    </footer>
  );
}
