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
        fields =['id','Opport_name','Description','Training_tasks',
                'Gender','Loaction','Contact_Person','Position','vacancies','StartDate','FinishDate']
        
class FormsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Forms
        fields =['FormName','Description','FormsImage','Supervisor','student' ]

class SuperviseStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = SuperviseStudents
        fields =['Supervisor','student' ]