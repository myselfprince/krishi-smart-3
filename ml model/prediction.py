# prediction.py
import pandas as pd
import pickle

# Load the trained model and label encoders
with open("crop_planner_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)

def predict_crop(state, district, soil_type, rainfall, temperature, irrigation, altitude,
                 water_availability, previous_crop, market_demand, pest_risk, land_size,
                 weather_forecast, farmer_experience, seed_variety):
    # Create a dictionary with the input data using the cleaned column names
    input_data = {
        "state": state,
        "district": district,
        "soil_type": soil_type,
        "rainfall": rainfall,
        "temperature": temperature,
        "irrigation": irrigation,
        "altitude": altitude,
        "water_availability": water_availability,
        "previous_crop": previous_crop,
        "market_demand": market_demand,
        "pest_risk": pest_risk,
        "land_size": land_size,
        "weather_forecast": weather_forecast,
        "farmer_experience": farmer_experience,
        "seed_variety": seed_variety
    }

    # Convert the input data to a DataFrame
    input_df = pd.DataFrame([input_data])

    # Encode the categorical inputs
    for col in label_encoders:
        if col != "crop_rotation_plan":
            if input_df[col].iloc[0] in label_encoders[col].classes_:
                input_df[col] = label_encoders[col].transform(input_df[col])
            else:
                # Handle unseen categories (e.g., assign a default value or raise an error)
                input_df[col] = label_encoders[col].transform([label_encoders[col].classes_[0]])[0]

    # Make prediction
    prediction = model.predict(input_df)[0]

    # Decode the prediction
    predicted_crop_plan = label_encoders["crop_rotation_plan"].inverse_transform([prediction])[0]

    return predicted_crop_plan

# Example usage
if __name__ == "__main__":
    result = predict_crop(
        state="Gujarat",
        district="Vadodara",
        soil_type="Laterite",
        rainfall=1502,
        temperature=21,
        irrigation="Canal",
        altitude=1222,
        water_availability=1017,
        previous_crop="Rice",
        market_demand="Low",
        pest_risk="Low",
        land_size=4.1,
        weather_forecast="Below Normal",
        farmer_experience="Intermediate",
        seed_variety="GM"
    )
    print(f"Recommended Crop Plan: {result}")