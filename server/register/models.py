from django.db import models

class student(models.Model):
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    email = models.EmailField(max_length=150)
    password = models.CharField(max_length=30)
    college_id = models.IntegerField()

