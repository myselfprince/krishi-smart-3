"use client";
import { useState, useEffect, useRef } from "react";

export default function CropPlanner() {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    soil_type: "",
    rainfall: "",
    temperature: "",
    irrigation: "",
    altitude: "",
    water_availability: "",
    previous_crop: "",
    market_demand: "",
    pest_risk: "",
    land_size: "",
    weather_forecast: "",
    farmer_experience: "",
    seed_variety: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Define options for each field
  const options = {
    state: [
      "Gujarat",
      "Haryana",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Punjab",
      "Rajasthan",
      "Tamil Nadu",
      "Uttar Pradesh",
      "West Bengal",
    ],
    soil_type: ["Alluvial", "Black", "Laterite", "Red", "Sandy"],
    irrigation: ["Canal", "Drip", "Rain-fed", "Tube-well"],
    previous_crop: [
      "Coconut",
      "Cotton",
      "Jute",
      "Millet",
      "Pulses",
      "Rice",
      "Soybean",
      "Wheat",
    ],
    market_demand: ["High", "Low", "Medium"],
    pest_risk: ["High", "Low", "Medium"],
    weather_forecast: ["Above Normal", "Below Normal", "Normal"],
    farmer_experience: ["Expert", "Intermediate", "Novice"],
    seed_variety: ["GM", "Hybrid", "Traditional"],
  };

  // Define state-to-district mapping
  const stateToDistricts = {
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Faridabad", "Gurgaon", "Karnal"],
    Kerala: ["Kochi", "Thrissur", "Trivandrum"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
    Maharashtra: ["Mumbai", "Nagpur", "Pune"],
    Punjab: ["Amritsar", "Ludhiana", "Patiala"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Uttar Pradesh": ["Kanpur", "Lucknow", "Varanasi"],
    "West Bengal": ["Durgapur", "Kolkata", "Nadia"],
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: value };
      // Clear district if state changes
      if (name === "state") {
        newFormData.district = "";
      }
      return newFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsLoading(true);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data.crop_plan);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  // AutocompleteInput Component
  const AutocompleteInput = ({ label, name, options, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleInputChange = (e) => {
      const val = e.target.value;
      setInputValue(val);

      // Filter suggestions based on input
      if (val) {
        const filtered = options.filter((option) =>
          option.toLowerCase().startsWith(val.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        // Show all options if input is empty
        setSuggestions(options);
      }
    };

    const handleSelect = (selectedValue) => {
      setInputValue(selectedValue);
      onChange({ target: { name, value: selectedValue } });
      setSuggestions([]);
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
      // Show all options when the input is focused, if no input value
      if (!inputValue) {
        setSuggestions(options);
      } else {
        const filtered = options.filter((option) =>
          option.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        setSuggestions(filtered);
      }
    };

    const handleBlur = () => {
      setTimeout(() => {
        // Check if the input value matches any option
        const matchedOption = options.find(
          (option) => option.toLowerCase() === inputValue.toLowerCase()
        );
        if (matchedOption) {
          setInputValue(matchedOption);
          onChange({ target: { name, value: matchedOption } });
        } else {
          setInputValue("");
          onChange({ target: { name, value: "" } });
        }
        setSuggestions([]);
        setIsFocused(false);
      }, 200);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter" && suggestions.length > 0) {
        e.preventDefault();
        handleSelect(suggestions[0]);
      }
    };

    return (
      <div className="relative h-24">
        <label className="block text-sm font-medium">{label}</label>
        <input
          type="text"
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="border p-2 w-full"
          required
          ref={inputRef}
          autoComplete="off"
        />
        {isFocused && (
          <ul className="absolute z-50 w-full bg-white border border-gray-300 max-h-40 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSelect(suggestion)} // Use onMouseDown to handle click before blur
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))
            ) : inputValue ? (
              <li className="p-2 text-gray-500">No matches found</li>
            ) : null}
          </ul>
        )}
      </div>
    );
  };

  // Get available districts based on selected state
  const availableDistricts =
    formData.state && stateToDistricts[formData.state]
      ? stateToDistricts[formData.state]
      : [];

  return (
    <div className="max-w-4xl my-3 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Seasonal Crop Planner</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Split the form into two columns on large screens */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-4">
            {/* State */}
            <div className="h-24">
              <AutocompleteInput
                label="State"
                name="state"
                options={options.state}
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            {/* District */}
            <div className="h-24">
              <AutocompleteInput
                label="District"
                name="district"
                options={availableDistricts}
                value={formData.district}
                onChange={handleChange}
              />
            </div>

            {/* Soil Type */}
            <div className="h-24">
              <AutocompleteInput
                label="Soil Type"
                name="soil_type"
                options={options.soil_type}
                value={formData.soil_type}
                onChange={handleChange}
              />
            </div>

            {/* Rainfall */}
            <div className="h-24">
              <label className="block text-sm font-medium">Rainfall (mm)</label>
              <input
                type="number"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                className="border p-2 w-full"
                min="0"
                max="5000"
                required
              />
              <p className="text-sm text-gray-500">Range: 0 to 5000 mm</p>
            </div>

            {/* Temperature */}
            <div className="h-24">
              <label className="block text-sm font-medium">Temperature (°C)</label>
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="border p-2 w-full"
                min="-10"
                max="50"
                required
              />
              <p className="text-sm text-gray-500">Range: -10°C to 50°C</p>
            </div>

            {/* Irrigation */}
            <div className="h-24">
              <AutocompleteInput
                label="Irrigation"
                name="irrigation"
                options={options.irrigation}
                value={formData.irrigation}
                onChange={handleChange}
              />
            </div>

            {/* Altitude */}
            <div className="h-24">
              <label className="block text-sm font-medium">Altitude (m)</label>
              <input
                type="number"
                name="altitude"
                value={formData.altitude}
                onChange={handleChange}
                className="border p-2 w-full"
                min="0"
                max="5000"
                required
              />
              <p className="text-sm text-gray-500">Range: 0 to 5000 m</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-4">
            {/* Water Availability */}
            <div className="h-24">
              <label className="block text-sm font-medium">Water Availability (cubic meters)</label>
              <select
                name="water_availability"
                value={formData.water_availability}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              >
                <option value="">Select Water Availability</option>
                <option value="750">Low (500-1000) cubic meters</option>
                <option value="1250">Medium (1000-1500) cubic meters</option>
                <option value="2000">High (1500-2500) cubic meters</option>
              </select>
            </div>

            {/* Previous Crop */}
            <div className="h-24">
              <AutocompleteInput
                label="Previous Crop"
                name="previous_crop"
                options={options.previous_crop}
                value={formData.previous_crop}
                onChange={handleChange}
              />
            </div>

            {/* Market Demand */}
            <div className="h-24">
              <AutocompleteInput
                label="Market Demand"
                name="market_demand"
                options={options.market_demand}
                value={formData.market_demand}
                onChange={handleChange}
              />
            </div>

            {/* Pest Risk */}
            <div className="h-24">
              <AutocompleteInput
                label="Pest Risk"
                name="pest_risk"
                options={options.pest_risk}
                value={formData.pest_risk}
                onChange={handleChange}
              />
            </div>

            {/* Land Size */}
            <div className="h-24">
              <label className="block text-sm font-medium">Land Size (ha)</label>
              <select
                name="land_size"
                value={formData.land_size}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              >
                <option value="">Select Land Size</option>
                <option value="0.5">0-1 ha</option>
                <option value="3">1-5 ha</option>
                <option value="7.5">5-10 ha</option>
              </select>
            </div>

            {/* Weather Forecast */}
            <div className="h-24">
              <AutocompleteInput
                label="Weather Forecast"
                name="weather_forecast"
                options={options.weather_forecast}
                value={formData.weather_forecast}
                onChange={handleChange}
              />
            </div>

            {/* Farmer Experience */}
            <div className="h-24">
              <AutocompleteInput
                label="Farmer Experience"
                name="farmer_experience"
                options={options.farmer_experience}
                value={formData.farmer_experience}
                onChange={handleChange}
              />
            </div>
            </div>
        </div>


            {/* Seed Variety */}
            <div className="h-24">
              <AutocompleteInput
                label="Seed Variety"
                name="seed_variety"
                options={options.seed_variety}
                value={formData.seed_variety}
                onChange={handleChange}
              />
            </div>
   
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          {isLoading ? "Predicting..." : "Predict Crop Plan"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Recommended Crop Plan</h2>
            <ul className="list-disc pl-5">
              {result.split(";").map((crop, index) => {
                const [name, details] = crop.split("(");
                if (!details) return null;
                const detailList = details.replace(")", "").split(",");
                return (
                  <li key={index} className="mt-2">
                    <strong>{name.trim()}</strong>
                    <ul className="list-circle pl-5">
                      {detailList.map((detail, idx) => (
                        <li key={idx}>{detail.trim()}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-center">
            {(() => {
              const [firstCrop] = result.split(";")[0].split("(");
              const cropName = firstCrop.trim().replace("Kharif: ", "").replace("Rabi: ", "");
              const season = firstCrop.includes("Kharif") ? "Kharif" : "Rabi";

              let imageUrl = "";
              if (cropName === "Jute" && season === "Kharif") {
                imageUrl = "/crops/1.jpeg";
              } else if (cropName === "Chickpea" && season === "Rabi") {
                imageUrl = "/crops/2.jpg";
              } else {
                imageUrl = "/crops/3.jpg"; // Default placeholder
              }

              return (
                <img
                  src={imageUrl}
                  alt={`${cropName} ${season} Image`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              );
            })()}
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg">
          <h2 className="text-xl font-bold">Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}