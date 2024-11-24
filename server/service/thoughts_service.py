from models.thoughts import thoughts
import configparser
import datetime as dt
import pymysql.cursors
import pymysqlpool
import time
import uuid

config = configparser.ConfigParser()
config.read('config.ini')
db_host = config.get('database', 'host')
db_user = config.get('database', 'user')
db_pass = config.get('database', 'password')
db = config.get('database', 'database')
db_port = config.getint('database', 'port')
db_conn_pool = pymysqlpool.ConnectionPool(size=2, maxsize=3, pre_create_num=2, name='pool1',
                        host=db_host,
                        user=db_user,
                        password=db_pass,
                        database=db,
                        charset='utf8mb4',
                        port=db_port,
                        autocommit=1,
                        cursorclass=pymysql.cursors.DictCursor)




def addThoughts(data):
    print(db_host)
    db_connection = db_conn_pool.get_connection()
    with db_connection:
        with db_connection.cursor() as cursor:
            sql = "INSERT INTO thoughts (thought_id, user_id, thought, create_time) VALUES (%s, %s, %s, %s)"
            epoch_time = int(time.time())
            #print(epoch_time)
            values = (uuid.uuid4(), data["user"], data["thought"], epoch_time)
            cursor.execute(sql, values)
            db_connection.commit()
            #print(result)
    return


def getThoughts():
    thoughts.clear()
    db_connection = db_conn_pool.get_connection()
    with db_connection:
        with db_connection.cursor() as cursor:
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
                #print(new_thought)
                thoughts.append(new_thought)
    return thoughts


def deleteThought(data):
    db_connection = db_conn_pool.get_connection()
    with db_connection:
        with db_connection.cursor() as cursor:
            key = data
            sql = "delete from thoughts where thought_id=%s"
            cursor.execute(sql, key)
            db_connection.commit()
    return

