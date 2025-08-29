function AboutMeSection() {
  return (
    <div className="about-me-section">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Your Pickleball Journey Starts Here
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            I went from a 3.3 to a 5.0 in less than 1 year, and you can too! 
          </p>
        </div>

        {/* Coach Profile */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 md:mr-6">
              PB
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Professional Pickleball Coach</h3>
              <p className="text-gray-600">Certified Instructor • Tournament Player • Strategy Expert</p>
            </div>
          </div>
          
          {/* Credentials */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">My Credentials</h4>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Top 150</div>
                <p className="text-gray-700 font-medium">PPA Men's Doubles Ranking</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5.377</div>
                <p className="text-gray-700 font-medium">DUPR Rating</p>
              </div>
            </div>
          </div>

          {/* Tournament Timeline */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Tournament Journey</h4>
            <div className="space-y-4">
              <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                <div>
                  <div className="font-semibold text-gray-900">September 2024</div>
                  <div className="text-gray-600">3.5 Tournament</div>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <div className="font-semibold text-gray-900">December 2024</div>
                  <div className="text-gray-600">4.5 Tournament</div>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <div className="font-semibold text-gray-900">December 2024</div>
                  <div className="text-gray-600">5.0 PPA Tournament</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Story</h4>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                I started playing pickleball in 2018 and quickly fell in love with the sport. 
                After achieving a 5.0 rating myself, I dedicated my career to helping others 
                reach their goals through personalized coaching and proven training methods.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                My approach combines technical skill development with strategic thinking, 
                ensuring you not only improve your game but also understand the mental aspects 
                that separate good players from great ones.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Offer</h4>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Personalized training programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Advanced technique instruction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Game strategy and tactics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Mental game coaching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Tournament preparation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
