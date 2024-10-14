from models.thoughts import thoughts
import datetime as dt


def addThoughts(data):
    print(data)
    thought = {
        "user": data["user"],
        "thought": data["thought"],
        "created_time": dt.datetime.now(),
    }
    thoughts.append(thought)
    return


def getThoughts():
    return thoughts
