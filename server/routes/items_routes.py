from flask import Blueprint
import service.items_service as item_service

items_routes = Blueprint("items_routes", __name__)


@items_routes.route("/api/items")
def get_all():
    return item_service.get_items()
