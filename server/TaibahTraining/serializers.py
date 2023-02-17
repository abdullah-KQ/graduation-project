from rest_framework import serializers
from TaibahTraining.models import *

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('UserName','Fullname','Email','Phone_num','Password','Role')

class studentSerializers(serializers.ModelSerializer):
    class Meta:
        model = student
        fields =('id','UserName','Uni_id','Department','College')

class SupervisorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields =['id','UserName','S_id','College','Department','Verified']

class TrainingBodySerializers(serializers.ModelSerializer):
    class Meta:
        model = TrainingBody
        fields =['id','UserName','Website','Address']

class OpportunitySerializers(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields =['id','TrainingBody','Opport_name','Description','Training_tasks',
                'Gender','Loaction','Contact_Person','Position','vacancies','StartDate','FinishDate']
        
class FormsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Forms
        fields =['FormName','Description','FormsImage','Supervisor','student' ]

class SuperviseStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = SuperviseStudents
        fields =['Supervisor','student' ]

class AddOpportunitySerializers(serializers.ModelSerializer):
    class Meta:
        model = AddOpportunity
        fields =['id','TrainingBody','Opportunity','Supervisor','student','IsItAccepted','notification']

class Form2Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form2
        fields =['id','student','AcademicYear','Semester','Major','CGPA','HoursEarned',
                 'HoursRegistered','HoursRemaining','descriptionAboutCompany','IsItCompleted']

class Form4Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form4
        fields =['id','TrainingBody','student','AttendanceAccuracy','GeneralAppearance','Enthusiasm',
                 'AbilityToAnalyze','AccuracyOutput','AbilityPresent','AbilityReport',
                 'RelationshipTrainer','RelationshipCoWorkers','Flexibility','AbilityLearn',
                 'AbilityDecision','GeneralPerformance','Strengths','Weaknesses',
                 'AreTraineeSkills','Comments','IsItCompleted']
        
class Form5Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form5
        fields =['id','TrainingBody','student','AttendanceAccuracy','GeneralAppearance','Enthusiasm',
                 'AbilityToAnalyze','AccuracyOutput','AbilityPresent','AbilityReport',
                 'RelationshipTrainer','RelationshipCoWorkers','Flexibility','AbilityLearn',
                 'AbilityDecision','GeneralPerformance','Strengths','Weaknesses',
                 'AreTraineeSkills','Comments','IsItCompleted']
        
class Form6Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form6
        fields =['id','Supervisor','student','Course','Term','PunctualityFrist',
                 'QualityFrist','PunctualityFinal','QualityFinal','IsItCompleted']

class Form7Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form7
        fields =['id','student','SeriousTraining','ExperienceProvided','SuitableTrainingPlace',
                 'SeriousTrainer','TimeGivenTraining','ExperienceTrainer','HelpWorkingStaff','FollowingPlan','AdvantagesProgram',
                 'TheCompatibility','benefits','problems','expectations','suggestions','recommend','IsItCompleted']
        
class Form9Serializers(serializers.ModelSerializer):
    class Meta:
        model = Form9
        fields =['id','TrainingBody','student','WeekNo','StudentAttendenceSunday','StudentAttendenceMonday',
                 'StudentAttendenceTuesday','StudentAttendenceWednesday','StudentAttendenceThursday',
                 'TasksThisWeek','SoftwarUsedThisWeek','IsItCompleted']