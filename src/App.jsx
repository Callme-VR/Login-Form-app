function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4">
      {/* Centered h1 Tag */}
      <h1 className="text-5xl font-bold text-white text-center mb-8 animate-bounce">
        Webinar.gg
      </h1>

      {/* Age Verification Card */}
      <div className="p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Verify Your Age</h2>

        {/* Description */}
        <p className="text-gray-200 text-center mb-6">
          Please confirm your birth year. This data will not be stored.
        </p>

        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="birthYear">
            Your Birth Year
          </label>
          <input
            type="number"
            id="birthYear"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your birth year"
          />
        </div>

        {/* Continue Button */}
        <button className="bg-blue-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer">
          Continue
        </button>
      </div>
      <div className="p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Let Get Started</h2>

        {/* Description */}
        <p className="text-gray-200 text-center mb-6">
        </p>

        <div className="mb-6">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="birthYear">
            Your Email.id
          </label>
          <input
            type="text"
            id="birthYear"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Email id"
          />
        </div>

        <button className="bg-yellow-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;