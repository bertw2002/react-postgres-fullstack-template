function AboutMeSection() {
  return (
    <div className="about-me-section">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Pickleball Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm a certified pickleball coach with over 5 years of experience helping players 
            reach their full potential and achieve 5.0+ ratings.
          </p>
        </div>

        {/* Coach Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
              PB
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Pickleball Coach</h3>
              <p className="text-gray-600">Certified Instructor • Tournament Player • Strategy Expert</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Story</h4>
              <p className="text-gray-700 mb-4">
                I started playing pickleball in 2018 and quickly fell in love with the sport. 
                After achieving a 5.0 rating myself, I dedicated my career to helping others 
                reach their goals through personalized coaching and proven training methods.
              </p>
              <p className="text-gray-700">
                My approach combines technical skill development with strategic thinking, 
                ensuring you not only improve your game but also understand the mental aspects 
                that separate good players from great ones.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Offer</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Personalized training programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Advanced technique instruction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Game strategy and tactics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Mental game coaching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Tournament preparation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.5 → 4.5</div>
              <p className="text-gray-700">"Reached 4.5 in just 8 months with focused training"</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.0 → 5.0</div>
              <p className="text-gray-700">"Broke through to 5.0 after 1 year of coaching"</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Beginner → 4.0</div>
              <p className="text-gray-700">"Started from scratch, now competing at 4.0 level"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
