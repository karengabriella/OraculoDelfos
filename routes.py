from main import app
from flask import render_template, request
import api 

@app.route("/")
def homepage():
    return render_template('index.html')

@app.route("/index.html")
def index():
    return render_template('index.html')

@app.route('/msgDeuses.html')
def mensagemdeus():
   deus = request.args.get('deus')
   mensagem = api.chamarDeus(deus)
   return render_template('msgDeuses.html', deus=deus, mensagem=mensagem)

