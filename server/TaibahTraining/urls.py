"""TaibahTraining URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from TaibahTraining import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', views.User_list),
    path('user/<pk>/<password>/', views.User_detail),
    path('user/<UserName>', views.User_UserName),

    path('student/', views.student_list),
    path('student/<UserName>/', views.student_detail),
    path('student/<id>', views.student_id),

    path('Supervisor/', views.Supervisor_list),
    path('Supervisor/<pk>/', views.Supervisor_detail),

    path('TrainingBody/', views.TrainingBody_list),
    path('TrainingBody/<pk>/', views.TrainingBody_detail),
    path('TrainingBody/<id>', views.TrainingBody_id),

    path('Opportunity/', views.Opportunity_list),

    path('SuperviseStudents/', views.SuperviseStudents_list),
    path('SuperviseStudents/<pk>/', views.SuperviseStudents_detail),

    path('AddOpportunity/', views.AddOpportunity_list),
    path('AddOpportunity/<pk>/', views.AddOpportunity_detail),
    path('AddOpportunity/<student>', views.AddOpportunity_student),

    path('form1/<UserName>', views.form1),

    path('form2/<UserName>', views.form2),
    path('form2/', views.form2_list),
    path('form2/<pk>/', views.form2_detail),

    path('form3/<UserName>', views.form3),

    path('form4/<UserName>', views.form4),
    path('form4/', views.form4_list),
    path('form4/<pk>/', views.form4_detail),

    path('form5/<UserName>', views.form5),
    path('form5/', views.form5_list),
    path('form5/<pk>/', views.form5_detail),

    path('form6/<UserName>', views.form6),
    path('form6/', views.form6_list),
    path('form6/<pk>/', views.form6_detail),

    path('form7/<UserName>', views.form7),
    path('form7/', views.form7_list),
    path('form7/<pk>/', views.form7_detail),

    path('form8/<UserName>', views.form8),

    path('form9/<UserName>', views.form9),
    path('form9/', views.form9_list),
    path('form9/<pk>/', views.form9_detail),
    
]
