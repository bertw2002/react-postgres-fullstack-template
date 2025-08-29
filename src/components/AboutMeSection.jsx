function AboutMeSection() {
  return (
    <div className="about-me-section bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Coach Profile */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8 mx-4 md:mx-0">
          {/* Credentials */}
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">My Credentials</h4>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Top 150</div>
                <p className="text-gray-700 font-medium">PPA Men's Doubles Ranking</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5.377</div>
                <p className="text-gray-700 font-medium">DUPR Rating</p>
              </div>
            </div>
          </div>

          {/* Tournament Timeline */}
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">My Improvement Timeline</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">September 2024</div>
                  <div className="text-gray-600">3.5 Local Tournament (went 2-2)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 3.3</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">December 2024</div>
                  <div className="text-gray-600">4.5 Local Tournament (went undefeated)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 4.0</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">December 2024</div>
                  <div className="text-gray-600">5.0 PPA San Clemente (went 2-2)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 4.0</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">January 2025</div>
                  <div className="text-gray-600">PPA Masters Pro Qualifiers (qualified, lost to Emmrich / De la Rosa)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 4.3</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">Feburary 2025</div>
                  <div className="text-gray-600">PPA Tucson Pro Qualifiers (qualified, lost to Trinh / Cincola)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 4.6</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">March 2025</div>
                  <div className="text-gray-600">First open level local tournament (Silver)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 4.8</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">April 2025</div>
                  <div className="text-gray-600">First open level mixed local tournament (Silver)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 5.0</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">May 2025</div>
                  <div className="text-gray-600">PPA Idaho Challenger (7th place)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 5.1</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">June 2025</div>
                  <div className="text-gray-600">PPA San Clemente Pro Qualifiers (qualified, lost to Hovenier / Koller)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 5.2</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">August 2025</div>
                  <div className="text-gray-600">PPA Las Vegas Pro Qualifiers (qualified for men's and mixed doubles)</div>
                </div>
                <div className="bg-blue-800 text-white px-4 py-2 rounded-lg inline-block font-bold text-lg">DUPR 5.3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
