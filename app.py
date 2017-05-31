
from flask import Flask, Response, json, jsonify, request
from flask_bootstrap import Bootstrap
from flask import render_template
#import sql_to_csv



app = Flask(__name__)
Bootstrap(app)


@app.route("/", methods = ['GET', 'POST'])
def index():
    return render_template("alldep.html")



if __name__ == "__main__":
    #app.run(host='0.0.0.0')
    app.run(host='0.0.0.0',port=5000,debug=True)