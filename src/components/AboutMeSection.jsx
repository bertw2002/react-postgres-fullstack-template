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
            I'm a certified pickleball coach with over 5 years of experience helping players 
            reach their full potential and achieve 5.0+ ratings.
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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
