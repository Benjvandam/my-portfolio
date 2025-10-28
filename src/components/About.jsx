const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600">About</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-display font-semibold text-gray-900 mb-6">
              From Spreadsheets to Code & Everything in Between
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Hi there! I'm Benjamin, and I've had quite the journey from managing multi-million euro projects 
                across 9 countries to building web applications. Think of me as someone who accidentally fell in 
                love with coding while trying to automate my way out of repetitive financial tasks.
              </p>
              
              <p>
                These days, I'm the <strong className="text-orange-600">founder of ConnectClean</strong> and work on 
                various projects that combine my financial background with modern web development. I love turning 
                complex business problems into elegant code solutions, whether that's building platforms for 
                short-term rental management or creating tools that make financial processes more efficient.
              </p>
              
              <p>
                I'm naturally curious and love taking on challenges that others might 
                avoid. Whether it's figuring out why a financial model isn't working or debugging why my React 
                component won't render, I can't help but dive deep until I understand how everything works. 
                It's both a blessing and a curse! 😅
              </p>
            </div>

            {/* Key Traits */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What I'm Known For</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Stubbornly Persistent (in a good way!)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Getting Lost in New Countries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Turning Problems into Code</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Years of Learning</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">9</div>
                <div className="text-sm text-gray-600">Countries Explored</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Languages (Sort Of)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
