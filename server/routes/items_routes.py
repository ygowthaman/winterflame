from flask import Blueprint
import server.service.items_service as item_service

items_routes = Blueprint("items_routes", __name__)


@items_routes.route("/items")
def get_all():
    return item_service.get_items()

@items_routes.route("/item", methods=['POST'])
def put_item():
    pass