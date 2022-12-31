import mysql.connector
 
# Creating connection object
mydb = mysql.connector.connect(
    host = "localhost",
    user = "sqluser1",
    password = "password",
    database="ttf"
)
 
# Printing the connection object
print(mydb)
 
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Student")
myresult = mycursor.fetchall()

for x in myresult:
  print(x)