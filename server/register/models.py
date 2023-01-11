from django.db import models


class student(models.Model):
    Fullname = models.CharField(max_length=30)
    Phone_num = models.CharField(max_length=20)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    University_ID = models.IntegerField()
    College = models.CharField(max_length=50)

class Supervisor(models.Model):
    Fullname = models.CharField(max_length=30)
    Staff_ID = models.CharField(max_length=20)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Department = models.CharField(max_length=50)
    College = models.CharField(max_length=50)
    Phone_num = models.CharField(max_length=20)

class TrainingBody(models.Model):
    Fullname = models.CharField(max_length=30)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Address = models.CharField(max_length=50)
    Contact_Person = models.CharField(max_length=50)
    Phone_num = models.CharField(max_length=20)
    Position = models.CharField(max_length=50)
    Website = models.URLField(max_length=256)



