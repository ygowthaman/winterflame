from models.thoughts import thoughts
import datetime as dt


def addThoughts(data):
    new_thought = {
        "id": len(thoughts) + 1,
        "user": data["user"],
        "thought": data["thought"],
        "created_time": dt.datetime.now(),
    }
    thoughts.append(new_thought)
    return


def getThoughts():
    return thoughts
