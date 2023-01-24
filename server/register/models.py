from django.db import models

class student(models.Model):
    UserName = models.CharField(max_length=30,primary_key=True)
    Fullname = models.CharField(max_length=50)
    Phone_num = models.IntegerField()
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    College = models.CharField(max_length=80)
    
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class Supervisor(models.Model):
    
    UserName = models.CharField(max_length=30,primary_key=True)
    Fullname = models.CharField(max_length=50)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Department = models.CharField(max_length=80)
    College = models.CharField(max_length=80)
    Phone_num = models.IntegerField()
    # ------
    # S_UID = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    # ------
    
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class TrainingBody(models.Model): 
    UserName = models.CharField(max_length=30,primary_key=True)
    Fullname = models.CharField(max_length=100)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Phone_num = models.IntegerField()
    Website = models.URLField(max_length=256)
    Address = models.CharField(max_length=256)
    Contact_Person = models.CharField(max_length=50)
    Position = models.CharField(max_length=50)
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname




