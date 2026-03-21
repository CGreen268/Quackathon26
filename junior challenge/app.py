from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
   result = 5 + 5
   return render_template('index.html', result=result)

if __name__ == '__main__':
   app.run(debug=True)