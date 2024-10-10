from models.thoughts import thoughts

def addThoughts(data):
  thoughts.append(data)
  return

def getThoughts():
  return thoughts