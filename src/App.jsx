import { Bitcoin, TrendingUp, Shield, Zap, Mail, Building2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bitcoin className="w-8 h-8 text-bitcoin" />
              <span className="text-xl font-bold">Phoenix Blockforge LLC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-bitcoin transition-colors">About</a>
              <a href="#strategy" className="hover:text-bitcoin transition-colors">Strategy</a>
              <a href="#contact" className="hover:text-bitcoin transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-bitcoin via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Strategic Bitcoin Mining
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Accumulating capital to acquire Bitcoin mining infrastructure and build long-term digital asset value
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-bitcoin hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a 
                href="#strategy" 
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <Bitcoin className="w-12 h-12 text-bitcoin mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-bitcoin mb-2">Bitcoin Focus</h3>
              <p className="text-gray-400">Dedicated to accumulating the world's premier digital asset</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-500 mb-2">Long-Term Growth</h3>
              <p className="text-gray-400">Strategic infrastructure investment for sustainable mining</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-500 mb-2">Secure Operations</h3>
              <p className="text-gray-400">Professional-grade mining operations and asset custody</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Phoenix Blockforge</h2>
            <div className="w-24 h-1 bg-bitcoin mx-auto"></div>
          </div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Phoenix Blockforge LLC is an early-stage investment company focused on strategic Bitcoin accumulation through mining infrastructure acquisition. Our mission is to build sustainable, long-term value by participating directly in the Bitcoin network's security and operations.
            </p>
            <p>
              We believe Bitcoin represents the future of sound money and digital value storage. By investing in state-of-the-art mining equipment, we position ourselves at the intersection of energy, technology, and finance while contributing to the decentralization and security of the Bitcoin network.
            </p>
            <p>
              Our approach combines careful capital allocation with technical expertise to maximize Bitcoin acquisition while maintaining operational efficiency and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Strategy</h2>
            <div className="w-24 h-1 bg-bitcoin mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-bitcoin transition-colors">
              <Zap className="w-10 h-10 text-bitcoin mb-4" />
              <h3 className="text-2xl font-bold mb-4">Capital Accumulation</h3>
              <p className="text-gray-300">
                Strategically raising capital to invest in high-performance Bitcoin mining infrastructure, focusing on the latest ASIC technology and optimal deployment locations.
              </p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-bitcoin transition-colors">
              <Building2 className="w-10 h-10 text-bitcoin mb-4" />
              <h3 className="text-2xl font-bold mb-4">Infrastructure Investment</h3>
              <p className="text-gray-300">
                Acquiring state-of-the-art mining equipment and establishing partnerships with energy-efficient hosting facilities to maximize operational uptime and profitability.
              </p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-bitcoin transition-colors">
              <Bitcoin className="w-10 h-10 text-bitcoin mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bitcoin Accumulation</h3>
              <p className="text-gray-300">
                Converting operational revenue directly into Bitcoin holdings, maintaining a long-term accumulation strategy aligned with Bitcoin's digital scarcity model.
              </p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-bitcoin transition-colors">
              <TrendingUp className="w-10 h-10 text-bitcoin mb-4" />
              <h3 className="text-2xl font-bold mb-4">Sustainable Growth</h3>
              <p className="text-gray-300">
                Building a scalable operation that can adapt to network difficulty changes while maintaining efficiency and maximizing long-term Bitcoin acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-bitcoin mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Interested in learning more about Phoenix Blockforge LLC? We'd love to hear from you.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-12 text-center">
            <Mail className="w-16 h-16 text-bitcoin mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-6">
              For investment inquiries, partnerships, or general questions, please reach out to us.
            </p>
            <a 
              href="mailto:contact@phoenixblockforge.com" 
              className="inline-block px-8 py-4 bg-bitcoin hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              contact@phoenixblockforge.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Bitcoin className="w-6 h-6 text-bitcoin" />
              <span className="font-semibold">Phoenix Blockforge LLC</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Phoenix Blockforge LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
