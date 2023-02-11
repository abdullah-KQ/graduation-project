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

    path('form1/<UserName>', views.Form1),
    path('form2/<UserName>', views.Form2),
    path('form3/<UserName>', views.Form3),
    path('form4/<UserName>', views.Form4),
    path('form5/<UserName>', views.Form5),
    path('form6/<UserName>', views.Form6),
    path('form7/<UserName>', views.Form7),
    path('form8/<UserName>', views.Form8),
    path('form9/<UserName>', views.Form9),
    
]
