import { Twitter, Facebook, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">CryptoApp</h2>
            <p className="text-gray-400 mt-3">
              Your trusted platform for secure crypto trading, tracking, and
              insights.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://twitter.com" className="hover:text-white">
                <Twitter />
              </a>
              <a href="https://facebook.com" className="hover:text-white">
                <Facebook />
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/markets" className="text-gray-400 hover:text-white">
                  Market Trends
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white">
                  My Portfolio
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  Crypto News
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="mt-4 text-gray-400">
              <p>
                <Mail className="inline-block mr-2" /> support@cryptoapp.com
              </p>
              <p>
                <Phone className="inline-block mr-2" /> +1 (234) 567-8901
              </p>
              <p>
                <Globe className="inline-block mr-2" /> www.cryptoapp.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 CryptoApp. All rights reserved.
          </p>
          <p className="text-sm mt-4 text-gray-500">
            Design and Developed By{" "}
            <a
              href="https://www.linkedin.com/in/chand-kaurati-669082256/"
              target="_blank"
              className="hover:text-white cursor-pointer"
            >
              Chand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
