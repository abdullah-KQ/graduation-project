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
    Uni_id = models.CharField(max_length=10)  #uni_id not primary_key
    Department = models.CharField(max_length=80)
    College = models.CharField(max_length=80) 
    # To show the name in the database 
    def __str__ (self):
        return self.UserName        

class Supervisor(models.Model):
    UserName = models.ForeignKey('User',on_delete=models.CASCADE,null=True)
    S_id = models.CharField(max_length=10)  
    Department = models.CharField(max_length=80)
    College = models.CharField(max_length=80)
    Verified = models.CharField(max_length=10)
    # To show the name in the database 
    def __str__ (self):
        return self.UserName

class TrainingBody(models.Model): 
    UserName = models.ForeignKey('User',on_delete=models.CASCADE,null=True)
    Website = models.CharField(max_length=256)
    Address = models.CharField(max_length=256) 
    # To show the name in the database 
    def __str__ (self):
        return self.UserName

class Opportunity(models.Model): 
    TrainingBody = models.ForeignKey('TrainingBody',on_delete=models.CASCADE,null=True)
    Opport_name = models.CharField(max_length=50)
    Description = models.CharField(max_length=500)
    Training_tasks = models.CharField(max_length=256)
    Gender = models.CharField(max_length=30)
    Loaction = models.CharField(max_length=150)
    vacancies = models.CharField(max_length=20)
    StartDate = models.CharField(max_length=20)
    FinishDate = models.CharField(max_length=20)
    Contact_Person = models.CharField(max_length=50)
    Position = models.CharField(max_length=50)
    # To show the name in the database 
    def __str__ (self):
       return self.Opport_name

class Forms (models.Model): 
    FormName = models.CharField(max_length=50)
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True) 
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True) 
    Description = models.CharField(max_length=100)
    FormsImage = models.CharField(max_length=100)
    
    # To show the name in the database 
    def __str__ (self):
       return self.FormName

class SuperviseStudents (models.Model): 
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True) 
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True) 

    # To show the name in the database 
    def __str__ (self):
       return self.Supervisor
    
class AddOpportunity (models.Model):
    TrainingBody = models.ForeignKey('TrainingBody',on_delete=models.CASCADE,null=True)
    Opportunity = models.ForeignKey('Opportunity',on_delete=models.CASCADE,null=True)
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True) 
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True) 
    IsItAccepted = models.CharField(max_length=10)
    notification= models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.Opportunity
    
class Form2 (models.Model):
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True) 
    AcademicYear = models.CharField(max_length=50)
    Semester= models.CharField(max_length=50)
    Major= models.CharField(max_length=50)
    CGPA= models.CharField(max_length=50)
    HoursEarned= models.CharField(max_length=50)
    HoursRegistered= models.CharField(max_length=50)
    HoursRemaining= models.CharField(max_length=50)
    descriptionAboutCompany= models.CharField(max_length=100)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.student
    
class Form4 (models.Model):
    TrainingBody = models.ForeignKey('TrainingBody',on_delete=models.CASCADE,null=True)
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    AttendanceAccuracy  = models.CharField(max_length=3)
    GeneralAppearance = models.CharField(max_length=3)
    Enthusiasm  = models.CharField(max_length=3)
    AbilityToAnalyze  = models.CharField(max_length=3)
    AccuracyOutput = models.CharField(max_length=3)
    AbilityPresent  = models.CharField(max_length=3)
    AbilityReport = models.CharField(max_length=3)
    RelationshipTrainer  = models.CharField(max_length=3)
    RelationshipCoWorkers   = models.CharField(max_length=3)
    Flexibility  = models.CharField(max_length=3)
    AbilityLearn  = models.CharField(max_length=3)
    AbilityDecision   = models.CharField(max_length=3)
    GeneralPerformance = models.CharField(max_length=10)
    Strengths = models.CharField(max_length=100)
    Weaknesses = models.CharField(max_length=100)
    AreTraineeSkills = models.CharField(max_length=100)
    Comments = models.CharField(max_length=100)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.TrainingBody
    
class Form5 (models.Model):
    TrainingBody = models.ForeignKey('TrainingBody',on_delete=models.CASCADE,null=True)
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    AttendanceAccuracy  = models.CharField(max_length=3)
    GeneralAppearance = models.CharField(max_length=3)
    Enthusiasm  = models.CharField(max_length=3)
    AbilityToAnalyze  = models.CharField(max_length=3)
    AccuracyOutput = models.CharField(max_length=3)
    AbilityPresent  = models.CharField(max_length=3)
    AbilityReport = models.CharField(max_length=3)
    RelationshipTrainer  = models.CharField(max_length=3)
    RelationshipCoWorkers   = models.CharField(max_length=3)
    Flexibility  = models.CharField(max_length=3)
    AbilityLearn  = models.CharField(max_length=3)
    AbilityDecision   = models.CharField(max_length=3)
    GeneralPerformance = models.CharField(max_length=10)
    Strengths = models.CharField(max_length=100)
    Weaknesses = models.CharField(max_length=100)
    AreTraineeSkills = models.CharField(max_length=100)
    Comments = models.CharField(max_length=100)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.TrainingBody
    
class Form6 (models.Model):
    Supervisor = models.ForeignKey('Supervisor',on_delete=models.CASCADE,null=True)
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    Course = models.CharField(max_length=20)
    Term  = models.CharField(max_length=20)
    PunctualityFrist  = models.CharField(max_length=3)
    QualityFrist   = models.CharField(max_length=3)
    PunctualityFinal  = models.CharField(max_length=3)
    QualityFinal  = models.CharField(max_length=3)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.Supervisor
    
class Form7 (models.Model):
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)
    SeriousTraining = models.CharField(max_length=20)
    ExperienceProvided  = models.CharField(max_length=20)
    SuitableTrainingPlace  = models.CharField(max_length=3)
    SeriousTrainer  = models.CharField(max_length=3)
    TimeGivenTraining  = models.CharField(max_length=3)
    ExperienceTrainer   = models.CharField(max_length=3)
    HelpWorkingStaff   = models.CharField(max_length=3)
    FollowingPlan  = models.CharField(max_length=3)
    AdvantagesProgram  = models.CharField(max_length=3)
    TheCompatibility   = models.CharField(max_length=3)
    benefits = models.CharField(max_length=100)
    problems  = models.CharField(max_length=100)
    expectations   = models.CharField(max_length=100)
    suggestions    = models.CharField(max_length=100)
    recommend  = models.CharField(max_length=10)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.student

class Form9 (models.Model):
    TrainingBody = models.ForeignKey('TrainingBody',on_delete=models.CASCADE,null=True)
    student = models.ForeignKey('student',on_delete=models.CASCADE,null=True)   
    WeekNo  = models.CharField(max_length=20)
    StudentAttendenceSunday = models.CharField(max_length=20)
    StudentAttendenceMonday = models.CharField(max_length=20)
    StudentAttendenceTuesday = models.CharField(max_length=20)
    StudentAttendenceWednesday = models.CharField(max_length=20)
    StudentAttendenceThursday = models.CharField(max_length=20)
    TasksThisWeek = models.CharField(max_length=100)
    SoftwarUsedThisWeek = models.CharField(max_length=100)
    IsItCompleted = models.CharField(max_length=10)

    # To show the name in the database 
    def __str__ (self):
       return self.TrainingBody
                
                         