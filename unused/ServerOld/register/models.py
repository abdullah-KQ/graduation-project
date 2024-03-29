from django.db import models


class User (models.Model):
    UserName = models.CharField(max_length=30,primary_key=True)
    Fullname = models.CharField(max_length=50)
    Phone_num = models.CharField(max_length=20)
    Email = models.EmailField(max_length=150)
    Password = models.CharField(max_length=35)
    Role = models.CharField(max_length=3)  
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class student(models.Model):
    UserName = models.ForeignKey('User',on_delete=models.CASCADE,null=True)
    Uni_id = models.CharField(max_length=10,primary_key=True)  #uni_id not primary_key
    Department = models.CharField(max_length=80)
    College = models.CharField(max_length=80) 
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname        

class Supervisor(models.Model):
    UserName = models.ForeignKey('User',on_delete=models.CASCADE,null=True)
    S_id = models.CharField(max_length=10)  
    Department = models.CharField(max_length=80)
    College = models.CharField(max_length=80)
    Verified = models.BooleanField(default=False) 
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class TrainingBody(models.Model): 
    UserName = models.ForeignKey('User',on_delete=models.CASCADE,null=True)
    Website = models.URLField(max_length=256)
    Address = models.CharField(max_length=256) 
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class Opportunity(models.Model): 
    Opport_name = models.CharField(max_length=50)
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True)
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    Description = models.CharField(max_length=500)
    Training_tasks = models.CharField(max_length=256)
    Gender = models.CharField(max_length=30)
    Loaction = models.CharField(max_length=150)
    vacancies = models.CharField(max_length=20)
    StartDate = models.DateField
    FinishDate = models.DateField
    Contact_Person = models.CharField(max_length=50)
    Position = models.CharField(max_length=50)
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname

class Forms (models.Model): 
    FormName = models.CharField(max_length=50)
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True) 
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True) 
    Description = models.CharField(max_length=100)
    FormsImage = models.CharField(max_length=100)
    
    # To show the name in the database 
    def __str__ (self):
        return self.Fullname        

# ------------------------------------------------------------------

#class student(models.Model):
#     UserName = models.CharField(max_length=30, primary_key=True)
#     Uni_id = models.CharField(max_length=10)
#     Fullname = models.CharField(max_length=50)
#     Phone_num = models.CharField(max_length=20)
#     Email = models.EmailField(max_length=150)
#     Password = models.CharField(max_length=35)
#     Department = models.CharField(max_length=80)
#     College = models.CharField(max_length=80)
    
#     # To show the name in the database 
#     def __str__ (self):
#         return self.Fullname

# class Supervisor(models.Model):
#     UserName = models.CharField(max_length=30, primary_key=True)
#     Fullname = models.CharField(max_length=50)
#     Email = models.EmailField(max_length=150)
#     Password = models.CharField(max_length=35)
#     Department = models.CharField(max_length=80)
#     College = models.CharField(max_length=80)
#     Phone_num = models.CharField(max_length=20)
#     Verified = models.BooleanField(default=False)
    
#     # To show the name in the database 
#     def __str__ (self):
#         return self.Fullname

# class TrainingBody(models.Model):   
#     UserName = models.CharField(max_length=30, primary_key=True)
#     Fullname = models.CharField(max_length=100)
#     Email = models.EmailField(max_length=150)
#     Password = models.CharField(max_length=35)
#     Phone_num = models.CharField(max_length=20)
#     Website = models.URLField(max_length=256)
#     Address = models.CharField(max_length=256)
#     # To show the name in the database 
#     def __str__ (self):
#         return self.Fullname


