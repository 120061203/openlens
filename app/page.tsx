import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            OpenLens
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Capturing moments, telling stories through the lens
          </p>
          <Link 
            href="#gallery" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            View Portfolio
          </Link>
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images - you can replace these with your actual photos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg aspect-square bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Photo {item}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-4 py-2 rounded-full font-semibold">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Passionate photographer dedicated to capturing authentic moments and creating 
            visual narratives that resonate with viewers. Specializing in portrait, 
            landscape, and commercial photography.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to capture your story? Get in touch for photography services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@openlens.com" 
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#gallery" 
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
