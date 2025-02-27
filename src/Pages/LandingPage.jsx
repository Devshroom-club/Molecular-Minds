import React, { useState, useEffect } from "react";
import { ChevronDown, Beaker, FlaskConical, Atom, Menu, X } from "lucide-react";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to handle body overflow when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Beaker className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">MolecularMinds</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              Members
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              Contact
            </a>
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full font-medium transition-colors">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white hover:text-green-400"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-6 py-4 flex flex-col space-y-6">
          <div className="flex items-center space-x-2 border-b border-gray-700 pb-6">
            <Beaker className="h-6 w-6 text-green-400" />
            <span className="text-lg font-bold">MolecularMinds</span>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors py-2"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors py-2"
            >
              Members
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors py-2"
            >
              Events
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors py-2"
            >
              Contact
            </a>
          </div>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-full font-medium transition-colors mt-4 w-full">
            Join Us
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Explore the <span className="text-green-400">Wonders</span> of
              Chemistry
            </h1>
            <p className="text-xl text-gray-300">
              Join our community of passionate scientists and enthusiasts as we
              discover the building blocks of our universe.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-colors text-lg">
                Join Our Club
              </button>
              <button className="border border-white hover:border-green-400 hover:text-green-400 px-6 py-3 rounded-full font-medium transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto flex justify-center">
            <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <Atom className="w-48 h-48 md:w-64 md:h-64 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Join Our Chemistry Club?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <Beaker className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Hands-on Experiments
            </h3>
            <p className="text-gray-300 text-center">
              Get your hands dirty with exciting laboratory experiments guided
              by experienced mentors.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <FlaskConical className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Research Opportunities
            </h3>
            <p className="text-gray-300 text-center">
              Collaborate on real research projects and build your scientific
              portfolio.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <Atom className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Network & Community
            </h3>
            <p className="text-gray-300 text-center">
              Connect with like-minded peers and professionals in the chemistry
              field.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-800 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to explore the molecular world?
              </h2>
              <p className="text-xl text-gray-300">
                Join our next meeting and discover what chemistry can do for
                you.
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:items-end">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-colors text-lg w-full md:w-auto">
                Register Now
              </button>
              <p className="text-gray-300 text-center md:text-right">
                Next meeting: Every Friday at 5 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Beaker className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold">MolecularMinds</span>
              </div>
              <p className="text-gray-400">
                Exploring the world of chemistry together since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Members
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Chemistry Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest events and discoveries.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevShroom. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  );
};

export default LandingPage;
