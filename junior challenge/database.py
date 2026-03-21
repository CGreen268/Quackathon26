import mysql.connector



config = { 'host' : 'localhost',
           'user' : 'root',
           'password' : 'usbw',
           'database' : 'seating',
           'port' : 3307}

create_seating = (
    "CREATE TABLE IF NOT EXISTS seating ( "
    "Seat int NOT NULL, "
    "PRIMARY KEY (seat) );" )

insert_seating = (
    "INSERT INTO seating (seat) "
    "VALUES (%s)" )

remove_seating = "DELETE FROM seating WHERE seat = %s"

read_all = "SELECT seat FROM seating"


def create_seating_table():
    try:
        print("Creating table seating : ")
        cursor.execute(create_seating)
    except mysql.connector.Error as err:
        if err.errno == mysql.connector.errorcode.ER_TABLE_EXISTS_ERROR:
            print("already exists.")
        else:
            print(err.msg)
    else:
        print("OK")



mydb = mysql.connector.connect( **config )
cursor = mydb.cursor(prepared=True)


create_seating_table()
def save_seating(seat):
    #global cursor
    #global mydb
    #global insert_seating
    cursor.execute(insert_seating, (seat,))
    mydb.commit()

def read_all_seating():
    cursor.execute(read_all,)
    return cursor



#print(output.decode("utf-8"))
def close_db():
    cursor.close()
    mydb.close()
