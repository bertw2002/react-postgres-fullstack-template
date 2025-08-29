function OnlineCoachingSection() {
  return (
    <div className="online-coaching-section">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Online Pickleball Coaching Programs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Transform your game with personalized online coaching designed to get you to 5.0+ in 1 year
          </p>
        </div>


        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 md:p-8 text-white mx-4 md:mx-0">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Transform Your Game?</h3>
          <p className="text-lg md:text-xl mb-4 md:mb-6 opacity-90">
            Join hundreds of players who have already reached their pickleball goals
          </p>
          <button className="bg-white text-blue-600 py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoachingSection;
