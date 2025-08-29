function OnlineCoachingSection() {
  return (
    <div className="online-coaching-section">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Send me a video of your gameplay! 
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            I'll send you a FULL analysis of your gameplay and give you a plan to improve to the next level. 
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 rounded-xl p-8 md:p-10 text-white mx-4 md:mx-0 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">My Rates</h3>
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium">1 Minute</span>
              <span className="text-2xl md:text-3xl font-bold">$20</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium">5 Minutes</span>
              <span className="text-2xl md:text-3xl font-bold">$40</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium">Full Game</span>
              <span className="text-2xl md:text-3xl font-bold">$100</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 py-3 md:py-4 px-8 md:px-10 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoachingSection;
