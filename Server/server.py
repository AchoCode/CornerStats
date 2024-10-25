from flask import Flask, jsonify, request
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'ASDFGHJKL;WERTYUIOP'

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        data = json.loads(request.data)
        print(data)
    return jsonify({'Message':'connection successful'})


if __name__ == '__main__':
    app.run(debug=True)