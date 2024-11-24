from models.thoughts import thoughts
import datetime as dt
import pymysql.cursors
import time
import uuid


def addThoughts(data):
    connection = pymysql.connect(host='localhost',
                             user='admin',
                             password='admin',
                             database='USER',
                             charset='utf8mb4',
                             port=3306,
                             cursorclass=pymysql.cursors.DictCursor)
    with connection:
        with connection.cursor() as cursor:
            # Read a single record
            sql = "INSERT INTO thoughts (thought_id, user_id, thought, create_time) VALUES (%s, %s, %s, %s)"
            #print(new_thought)
            epoch_time = int(time.time())
            #print(epoch_time)
            values = (uuid.uuid4(), data["user"], data["thought"], epoch_time)
            cursor.execute(sql, values)
            connection.commit()
            #result = cursor.fetchone()
            #print(result)
    return


def getThoughts():
    thoughts.clear()
    connection = pymysql.connect(host='localhost',
                             user='admin',
                             password='admin',
                             database='USER',
                             charset='utf8mb4',
                             port=3306,
                             cursorclass=pymysql.cursors.DictCursor)
    with connection:
        with connection.cursor() as cursor:
            sql = "select * from thoughts"
            cursor.execute(sql)
            myresult = cursor.fetchall()
            for x in myresult:
                #print(x)
                new_thought = {
                    "id": x["thought_id"],
                    "user": x["user_id"],
                    "thought": x["thought"],
                    "created_time": dt.datetime.utcfromtimestamp(x["create_time"])
                }
                print(new_thought)
                thoughts.append(new_thought)
    return thoughts

