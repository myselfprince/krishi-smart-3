# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from prediction import predict_crop

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    try:
        # Validate required fields
        required_fields = [
            "state", "district", "soil_type", "rainfall", "temperature", "irrigation",
            "altitude", "water_availability", "previous_crop", "market_demand",
            "pest_risk", "land_size", "weather_forecast", "farmer_experience", "seed_variety"
        ]
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({"error": f"Missing required fields: {', '.join(missing_fields)}"}), 400

        result = predict_crop(
            state=data["state"],
            district=data["district"],
            soil_type=data["soil_type"],
            rainfall=float(data["rainfall"]),
            temperature=float(data["temperature"]),
            irrigation=data["irrigation"],
            altitude=float(data["altitude"]),
            water_availability=float(data["water_availability"]),
            previous_crop=data["previous_crop"],
            market_demand=data["market_demand"],
            pest_risk=data["pest_risk"],
            land_size=float(data["land_size"]),
            weather_forecast=data["weather_forecast"],
            farmer_experience=data["farmer_experience"],
            seed_variety=data["seed_variety"]
        )
        return jsonify({"crop_plan": result})
    except ValueError as ve:
        return jsonify({"error": f"Invalid input value: {str(ve)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)