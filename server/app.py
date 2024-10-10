from flask import Flask
from routes.items_routes import items_routes
from routes.thoughts_routes import thoughts_routes
import time

app = Flask(__name__, static_folder="../react-ui/build", static_url_path="/")

app.register_blueprint(items_routes)
app.register_blueprint(thoughts_routes)


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/time")
def get_current_time():
    return {"time": time.time()}
