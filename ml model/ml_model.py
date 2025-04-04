import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load the dataset
df = pd.read_csv("crop_rotation_dataset.csv")  # Replace with your CSV file path

# Clean column names: remove leading/trailing spaces, convert to lowercase, and handle special characters
df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_").str.replace(r'[^a-z0-9_]', '', regex=True)

# Inspect the dataset
print("Column names in the DataFrame:")
print(df.columns.tolist())
print(df.head())
print(df.info())

# Check if the target column exists
target_column = "crop_rotation_plan"
if target_column not in df.columns:
    raise ValueError(f"Target column '{target_column}' not found in the dataset. Available columns: {df.columns.tolist()}")

# Handle missing values (if any)
df = df.dropna()  # Drop rows with missing values (or use imputation if needed)

# Separate features (inputs) and target (output)
X = df.drop(columns=[target_column])  # Features (all columns except the target)
y = df[target_column]  # Target (Crop Rotation Plan)

# Encode categorical variables (e.g., State, Soil Type, Irrigation, etc.)
categorical_columns = ["state", "district", "soil_type", "irrigation", "previous_crop",
                      "market_demand", "pest_risk", "weather_forecast", "farmer_experience",
                      "seed_variety"]

# Verify that all categorical columns exist in the DataFrame
for col in categorical_columns:
    if col not in X.columns:
        raise ValueError(f"Categorical column '{col}' not found in the dataset. Available columns: {X.columns.tolist()}")

# Use LabelEncoder for categorical columns
label_encoders = {}
for col in categorical_columns:
    le = LabelEncoder()
    X[col] = le.fit_transform(X[col])
    label_encoders[col] = le  # Save the encoder for later use

# Encode the target variable (Crop Rotation Plan)
le_target = LabelEncoder()
y = le_target.fit_transform(y)
label_encoders[target_column] = le_target

# Save the label encoders for later use in the Next.js app
with open("label_encoders.pkl", "wb") as f:
    pickle.dump(label_encoders, f)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Dataset preprocessing complete!")

# Train a Random Forest Classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
train_accuracy = model.score(X_train, y_train)
test_accuracy = model.score(X_test, y_test)

print(f"Training Accuracy: {train_accuracy:.2f}")
print(f"Testing Accuracy: {test_accuracy:.2f}")

# Save the trained model
with open("crop_planner_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model training complete and saved!")