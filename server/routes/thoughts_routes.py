from flask import Blueprint, request, jsonify
import service.thoughts_service as thoughts_service

thoughts_routes = Blueprint("thoughts_routes", __name__)


@thoughts_routes.route("/api/thoughts")
def getThoughts():
    return thoughts_service.getThoughts()


@thoughts_routes.route("/api/thought", methods=["POST"])
def addThought():
    requestParams = request.json
    response = thoughts_service.addThoughts(requestParams)
    return jsonify({'message': 'request processed successfully'}), 200

@thoughts_routes.route("/api/thought/<thought_id>", methods=["DELETE"])
def deleteThought(thought_id):
    thoughts_service.deleteThought(thought_id)
    return jsonify({'message': 'request processed successfully'}), 200
