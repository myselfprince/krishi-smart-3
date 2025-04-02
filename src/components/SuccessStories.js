const SuccessStories = () => {
    const stories = [
      {
        image: "https://via.placeholder.com/150", // Placeholder image; replace with actual image URL
        quote:
          "With KrishiSmart’s AI Crop Planner, I optimized my crop cycles and increased my yield by 40%. Now, I sell my produce at the best market prices!",
        name: "Ramesh Kumar",
      },
      {
        image: "https://via.placeholder.com/150", // Placeholder image; replace with actual image URL
        quote:
          "I learned modern organic farming techniques through FarmerTube. Now, I use eco-friendly practices, improving my farm’s sustainability!",
        name: "Anjali Verma",
      },
    ];
  
    return (
      <div className="bg-green-700 py-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Heading and Subheading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white">Farming Success Stories</h1>
            <p className="text-lg text-green-100 mt-2">
              Discover how our innovations have helped farmers achieve bigger and better harvests.
            </p>
          </div>
  
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-green-600 rounded-lg p-6 shadow-md"
              >
                {/* Image */}
                <div className="w-32 h-32 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Quote and Name */}
                <div className="text-center md:text-left">
                  <p className="text-green-100 italic mb-4">{story.quote}</p>
                  <h3 className="text-lg font-semibold text-white">{story.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SuccessStories;