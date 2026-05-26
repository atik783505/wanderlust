const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80 backdrop-blur-md text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-glow-cyan">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl text-gray-300">
            Your gateway to extraordinary travel experiences around the world. Explore, discover, and build everlasting memories.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider text-sm">NEWSLETTER</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Subscribe for exclusive travel deals and inspiration directly to your inbox.
            </p>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-cyan-500/50 transition-all duration-300">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-gray-200 placeholder-gray-500"
              />
              <button className="text-cyan-400 text-lg hover:text-cyan-300 hover:scale-110 transition-transform cursor-pointer">
                ↗
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-sm mb-4">QUICK LINKS</h3>
            <ul className="space-y-2.5">
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">Home</li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">Destinations</li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">My Bookings</li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-sm mb-4">SUPPORT</h3>
            <ul className="space-y-2.5">
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">Help Center</li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">
                Terms of Service
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-sm mb-4">CONTACT US</h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-gray-300 font-semibold">786 901 1622</li>
              <li className="text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer">info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Wanderlust. All rights reserved. Built with passion for travellers.
          </p>

          <div className="flex gap-6 text-gray-400 text-lg">
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">X</span>
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">in</span>
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;