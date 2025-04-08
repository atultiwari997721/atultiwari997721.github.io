from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def name_to_number(name):
    total = 0
    for char in name.lower():
        if char.isalpha():
            total += ord(char) - ord('a') + 1
    return total

def reduce_to_single_digit(n):
    while n >= 10:
        n = sum(int(d) for d in str(n))
    return n

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    name = data.get('name', '')
    total_value = name_to_number(name)
    single_digit = reduce_to_single_digit(total_value)
    return jsonify({
        'total': total_value,
        'digit': single_digit
    })

if __name__ == '__main__':
    app.run(debug=True)
