from flask import Blueprint, request
import service.thoughts_service as thoughts_service

thoughts_routes = Blueprint("thoughts_routes", __name__)


@thoughts_routes.route("/api/thoughts")
def getThoughts():
    return thoughts_service.getThoughts()


@thoughts_routes.route("/api/thought", methods=["POST"])
def addThought():
    requestParams = request.json
    thoughts_service.addThoughts(requestParams)
    return {"Success": True}
