function OnlineCoachingSection() {
  return (
    <div className="online-coaching-section">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
            Contact Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://www.instagram.com/albertwan_pb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @albertwan_pb
            </a>
            <a 
              href="mailto:albertwanpickleball@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-90 rounded-xl p-8 md:p-10 mx-4 md:mx-0 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Rates
          </h3>
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium text-black">1 Minute</span>
              <span className="text-2xl md:text-3xl font-bold">$20</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium text-black">5 Minutes</span>
              <span className="text-2xl md:text-3xl font-bold">$40</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-medium text-black">Full Game</span>
              <span className="text-2xl md:text-3xl font-bold">$100</span>
            </div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mx-4 md:mx-0 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
            How to Pay
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Venmo Section */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Venmo</h4>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Send payment to: <span className="font-bold text-green-600">@albert-wan-2</span>
                </p>
              </div>
            </div>

            {/* Zelle Section */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Zelle</h4>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Zelle details will be provided through DM after you contact me.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Process */}
          <div className="mt-8 md:mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
              Payment Process
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">1</div>
                <h5 className="font-semibold text-gray-900 mb-2">Send Payment</h5>
                <p className="text-sm text-gray-600">Pay via Venmo or Zelle with your name in the note</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">2</div>
                <h5 className="font-semibold text-gray-900 mb-2">Send Screenshot</h5>
                <p className="text-sm text-gray-600">DM me a picture of your payment confirmation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">3</div>
                <h5 className="font-semibold text-gray-900 mb-2">Get Analysis</h5>
                <p className="text-sm text-gray-600">I'll confirm receipt and create your analysis document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoachingSection;
