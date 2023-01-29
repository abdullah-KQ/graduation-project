from django.urls import path
# from . import views
from django.urls import re_path as url
from register import views

from django.conf.urls.static import static
from django.conf import settings

from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns
from register import views
from . import views

urlpatterns = [

    path('student_Login/', views.student_Login, name="student_Login"),
    path('student_Logout/', views.student_Logout, name="student_Logout"),

    path('student/', views.student_list),
    path('student/<int:pk>/', views.student_detail), # Not sure what it is for

    path('Supervisor/', views.Supervisor_list),
    path('Supervisor/<int:pk>/', views.Supervisor_detail), # Not sure what it is for

    path('TrainingBody/', views.TrainingBody_list),
    path('TrainingBody/<int:pk>/', views.TrainingBody_detail), # Not sure what it is for

    path('Opportunity/', views.Opportunity_list),
    path('Opportunity/<int:pk>/', views.Opportunity_detail), # Not sure what it is for

    path('Forms/', views.Forms_list),
    path('Forms/<int:pk>/', views.Forms_detail), # Not sure what it is for

     path('savefile/',views.SaveFile) # for forms images

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)

# urlpatterns=[
#     path ('student/',views.api_view),
#    # path ('student/([0-9]+)',views.studentApi),
# ]

# urlpatterns = [
#     path('login/',views.say_hello),
#     path('signup/',views.say_hello)
#     ]
    # useless???