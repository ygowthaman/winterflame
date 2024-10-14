from flask import Blueprint
from models.users import users

users_routes = Blueprint("user_routes", __name__)


@users_routes.route("/api/users", methods=["GET"])
def getUsers():
    return [{"user": user} for user in users]
