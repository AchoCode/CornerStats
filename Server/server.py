from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'ASDFGHJKL;WERTYUIOP'

@app.route('/', methods=['GET'])
def home():
    return jsonify({'Message':'connection successful'})


if __name__ == '__main__':
    app.run(debug=True)