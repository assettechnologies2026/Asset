"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919987120290"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
      {/* Free Consultation Button */}
      <a
        href="/contact"
        className="bg-[#001f3f] text-white px-5 py-3 rounded-full shadow-lg font-semibold hover:bg-blue-900 hover:scale-105 transition duration-300"
      >
        Get Free Consultation
      </a>

      
    </div>
  );
}