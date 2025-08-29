function OnlineCoachingSection() {
  return (
    <div className="online-coaching-section">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Online Pickleball Coaching Programs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your game with personalized online coaching designed to get you to 5.0+ in 1 year
          </p>
        </div>

        {/* Coaching Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Beginner Program */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beginner to 3.5</h3>
              <div className="text-3xl font-bold text-green-600">$99<span className="text-lg">/month</span></div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Weekly 1-on-1 video sessions
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Fundamental technique training
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Basic strategy introduction
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Practice drills and exercises
              </li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Intermediate Program */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 transform scale-105">
            <div className="text-center mb-4">
              <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3.5 to 4.5</h3>
              <div className="text-3xl font-bold text-blue-600">$149<span className="text-lg">/month</span></div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Bi-weekly 1-on-1 video sessions
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Advanced technique refinement
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Strategic game planning
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Tournament preparation
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Video analysis of your games
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Advanced Program */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4.5 to 5.0+</h3>
              <div className="text-3xl font-bold text-purple-600">$199<span className="text-lg">/month</span></div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Weekly 1-on-1 video sessions
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Elite technique mastery
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Advanced strategy development
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Mental game coaching
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Professional tournament prep
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What's Included in Every Program
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Training Resources</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Personalized training plans
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Video library of drills and techniques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Progress tracking tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Equipment recommendations
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Support & Community</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  24/7 chat support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Private coaching community
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Monthly group Q&A sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Progress reviews and feedback
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Game?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of players who have already reached their pickleball goals
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoachingSection;
