from rest_framework import serializers
from register.models import *

# class ReactSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = student
#         fields =['Fullname','Phone_num']

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('UserName','Fullname','Email','Phone_num','Password','Role')

class studentSerializers(serializers.ModelSerializer):
    class Meta:
        model = student
        fields =('UserName','Uni_id','Department','College')

class SupervisorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields =['UserName','S_id','College','Department','Verified']

class TrainingBodySerializers(serializers.ModelSerializer):
    class Meta:
        model = TrainingBody
        fields =['UserName','Website','Address']

class OpportunitySerializers(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields =['Opport_name','Supervisor','student','Description','Training_tasks',
                'Gender','Loaction','Contact_Person','Position','vacancies','StartDate','FinishDate']
        
class FormsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Forms
        fields =['FormName','Description','FormsImage','Supervisor','student' ]