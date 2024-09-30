from flask import Flask
from server.routes.items_routes import items_routes

app = Flask(__name__, static_folder='react-ui/build', static_url_path='/')

app.register_blueprint(items_routes)

@app.route("/")
def index():
    return app.send_static_file('index.html')
