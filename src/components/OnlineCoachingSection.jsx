function OnlineCoachingSection() {
  return (
    <div className="online-coaching-section">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">
            Send me a video of your gameplay!
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 md:mb-8">
            I'll send you a FULL analysis of your gameplay and give you a plan to improve to the next level.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 rounded-xl p-8 md:p-10 text-white mx-4 md:mx-0 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">My Rates</h3>
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-0 px-3 py-1 rounded-full text-sm md:text-base font-medium">1 Minute</span>
              <span className="text-2xl md:text-3xl font-bold">$20</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-0 px-3 py-1 rounded-full text-sm md:text-base font-medium">5 Minutes</span>
              <span className="text-2xl md:text-3xl font-bold">$40</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-white bg-opacity-0 px-3 py-1 rounded-full text-sm md:text-base font-medium">Full Game</span>
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

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-3">
              Questions about payment? Contact me directly on Instagram{' '}
              <a 
                href="https://www.instagram.com/albertwan_pb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-semibold"
              >
                @albertwan_pb
              </a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoachingSection;
