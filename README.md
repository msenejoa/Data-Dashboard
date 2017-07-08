# Data-Dashboard

A data visualization web app using Python, Flask, Bootstrap, JavaScript, HTML/CSS and C3.JS for a charting library. 

## Requirements
- Python 2.7
## Stack
- [Flask](http://flask.pocoo.org/) A python microframeworks
- [Bootstrap](http://getbootstrap.com/) For responsive css layout
- [Boostrap Keen.io Template](https://keen.github.io/dashboards/)
- [C3.js](http://c3js.org/) A javascript charting library based on d3.js

![Alt text](/Screen_shot.png?raw=true "Optional Title")

## Getting started

Clone the repo and install dependencies: 
```
$ git clone https://github.com/msenejoa/Data-Dashboard Data-Dashboard
```
Open the directory, create and activate a virtual environment:
```
$ cd Data-Dashboard
$ virtualenv venv
$ source venv/bin/activate
```
Install required dependencies:
```
$ pip install -r requirements.txt
```
Run the app:
```
$ python app.py
```
Point your browser to [localhost:5000](http://localhost:5000/)

The data is being read from a csv which is located in:
```
/static/assets/data
```
The javascript c3.js code is located in:
```
/static/assets/js/c3.js
```
