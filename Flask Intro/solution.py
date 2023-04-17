from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def index():
    google_place_id = request.args.get('name', None)
    if (google_place_id != None):
        return 'Hello ' + str(google_place_id)
    return 'Hello World'

@app.route('/reflect', methods=['GET'])
def lol():
    data = request.data
    if (data != None):
        return 'Hello ' + str(data)
    return 'Hello World'

@app.route('/reflect/plex', methods=['GET'])
def end():
    data = request.json
    if (data != None):
        output = {}
        for x in data:
            output["plex_" + str(x)] = data[x]
        return output
    return 'Hello World'

@app.route('/reflect/plex/form', methods=['GET'])
def final():
    data = request.form
    if (data != None):
        output = {}
        for x in data:
            output["plex_" + str(x)] = "plex_" + str(data[x])
        return output
    return 'Hello World'


@app.route('/hello-json')
def func():
    return {"text": "Hello World from Dictionary"}

@app.route('/hello-html')
def g():
    return "<h1>Hello World</h1><p>Subtext</p>"

@app.route('/hello-html-error')
def h():
    return ("<h1>Hello World</h1><p>Subtext</p>", 404)

@app.route('/hello/<name>')
def whatevername(name):
   return 'Hello ' + str(name)



@app.route('/hello/<name>/change/<amt>')
def out(name, amt):
   return 'Hello ' + str(name) + ', your change is ' + amt

app.run(host='0.0.0.0', port=82)