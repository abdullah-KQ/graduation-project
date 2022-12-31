import mysql.connector
 
# Creating connection object
mydb = mysql.connector.connect(
    host = "database-02.cr7xxbtormrg.us-east-1.rds.amazonaws.com",
    user = "admin",
    password = "12345678",
    database="ttf"
)
 
# Printing the connection object
print(mydb)
 
 # DB Table Names (supervisor, student, opportunity, forms, `training body`)
mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM supervisor") 
myresult = mycursor.fetchall()

for x in myresult:
  print(x)