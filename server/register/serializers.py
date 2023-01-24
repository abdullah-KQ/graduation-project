from rest_framework import serializers
from register.models import *

# class ReactSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = student
#         fields =['Fullname','Phone_num']

class studentSerializers(serializers.ModelSerializer):
    class Meta:
        model = student
        fields =('UserName','Fullname','Email','Phone_num','Password','College')

class SupervisorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields =['UserName','Fullname','Email','Phone_num','Password','College','Department']

class TrainingBodySerializers(serializers.ModelSerializer):
    class Meta:
        model = TrainingBody
        fields =['UserName','Fullname','Email','Phone_num','Password','Website','Address','Contact_Person','Position']