from django.db import models

class student(models.Model):
    Fullname = models.CharField(max_length=30)
    Phone_num = models.CharField(max_length=20)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    University_ID = models.IntegerField(primary_key=True)
    College = models.CharField(max_length=50)
    
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class Supervisor(models.Model):
    Fullname = models.CharField(max_length=30)
    Staff_ID = models.CharField(max_length=20, primary_key=True)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Department = models.CharField(max_length=50)
    College = models.CharField(max_length=50)
    Phone_num = models.CharField(max_length=20)
    # ------
    # S_UID = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    # ------
    
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class TrainingBody(models.Model):
    #  (1054, "Unknown column 'register_trainingbody.id' in 'field list'")
    #  يظهر الخطأ اذا اخترت (Training bodys) لكن ممكن اضافة حساب جديد
    # I added a primary_key to (Fullname) and the problem went away, but (Fullname) cannot be (primary_key)
    Fullname = models.CharField(max_length=20, primary_key=True)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Address = models.CharField(max_length=50)
    Contact_Person = models.CharField(max_length=50)
    Phone_num = models.CharField(max_length=20)
    Position = models.CharField(max_length=50)
    Website = models.URLField(max_length=256)
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname




