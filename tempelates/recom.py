from flask import Flask, jsonify, request
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the dataset
df = pd.read_csv('people_recommender_dataset.csv')

# Extracting interest features (excluding 'Person' column)
interest_columns = df.columns[1:]
interests = df[interest_columns]

# Compute the cosine similarity between people based on their interests
similarity_matrix = cosine_similarity(interests)
similarity_df = pd.DataFrame(similarity_matrix, index=df['Person'], columns=df['Person'])

# Function to get top N recommendations for a person
def recommend_similar_people(person_name, n=5):
    if person_name not in similarity_df.index:
        return {"error": f"Person '{person_name}' not found in the dataset."}
    
    # Sort the similarity scores in descending order, excluding the person themself
    similar_people = similarity_df[person_name].sort_values(ascending=False).drop(person_name).head(n).to_dict()
    
    return similar_people

# API route to get recommendations
@app.route('/recom', methods=['GET'])
def get_recommendations():
    person_name = request.args.get('person_name')
    n = int(request.args.get('n', 5))  # Default to 5 recommendations
    if not person_name:
        return jsonify({"error": "Please provide a person_name"}), 400
    
    recommendations = recommend_similar_people(person_name, n)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
