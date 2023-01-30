from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import *
# from .serializer import *
from register.models import User,student,Supervisor,TrainingBody,Opportunity,Forms
from register.serializers import UserSerializers,studentSerializers,SupervisorSerializers,TrainingBodySerializers,OpportunitySerializers,FormsSerializers
from django.core.files.storage import default_storage

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.shortcuts import  render , redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

#---------------- student Login and Logout ----------------

def student_Login (request):
    if request.method == 'POST':
        username = request.POST['Username']
        password = request.POST['Password']
        user = authenticate(request, Username=username, Password=password) # ممكن نتأكد من الاسامي (U u , P p)
        if user is not None:
             login(request, user)
             return redirect('HomepageForStudent') # يرسله لصفحة الطالب
        else:
             messages.success(request, ("there is error logging in")) 
             return redirect('student_Login') # نفس الصفحة
    else:
     return render(request, 'Project\client\src\components\LoginPage\LoginBox.js') #  المفروض Html ???? 

def student_Logout (request):
    logout(request)
    return redirect('Homepage')

#---------------- User ----------------
@api_view(['GET', 'POST'])
def User_list(request):
    
    if request.method == 'GET':
        Users = User.objects.all()
        serializer = UserSerializers(Users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def User_detail(request, pk):
    
    try:
        Users = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializers(User)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializers(User, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#---------------- student ----------------
@api_view(['GET', 'POST'])
def student_list(request):
    
    if request.method == 'GET':
        students = student.objects.all()
        serializer = studentSerializers(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = studentSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def student_detail(request, pk):
    
    try:
        students = student.objects.get(pk=pk)
    except student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = studentSerializers(student)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = studentSerializers(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        students.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#---------------- Supervisor ----------------
@api_view(['GET', 'POST'])
def Supervisor_list(request):
    
    if request.method == 'GET':
        Supervisors = Supervisor.objects.all()
        serializer = SupervisorSerializers(Supervisors, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SupervisorSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def Supervisor_detail(request, pk):
    
    try:
        Supervisors = Supervisor.objects.get(pk=pk)
    except Supervisor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SupervisorSerializers(Supervisor)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SupervisorSerializers(Supervisor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Supervisors.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#---------------- TrainingBody ----------------
@api_view(['GET', 'POST'])
def TrainingBody_list(request):
    
    if request.method == 'GET':
        TrainingBodys = TrainingBody.objects.all()
        serializer = TrainingBodySerializers(TrainingBodys, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TrainingBodySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def TrainingBody_detail(request, pk):
    
    try:
        TrainingBodys = TrainingBody.objects.get(pk=pk)
    except TrainingBody.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TrainingBodySerializers(TrainingBody)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TrainingBodySerializers(TrainingBody, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        TrainingBodys.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#---------------- Opportunity ----------------
@api_view(['GET', 'POST'])
def Opportunity_list(request):
    
    if request.method == 'GET':
        Opportunitys = Opportunity.objects.all()
        serializer = OpportunitySerializers(Opportunitys, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OpportunitySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def Opportunity_detail(request, pk):
    
    try:
        Opportunitys = Opportunity.objects.get(pk=pk)
    except Opportunity.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OpportunitySerializers(Opportunity)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = OpportunitySerializers(Opportunity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Opportunitys.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#---------------- Forms ----------------
@api_view(['GET', 'POST'])
def Forms_list(request):
    
    if request.method == 'GET':
        Formss = Forms.objects.all()
        serializer = FormsSerializers(Formss, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FormsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def Forms_detail(request, pk):
    
    try:
        Formss = Forms.objects.get(pk=pk)
    except Forms.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FormsSerializers(Forms)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FormsSerializers(Forms, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Formss.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# for Forms Images
@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


# class registerViow(APIView):
#     def get(self, request):
#         output = [{"Fullname":output.Fullname,
#            "Phone_num":output.Phone_num}
#         for output in student.objects.all()]
#         return Response(output)
        
#     def post(self, request):
#         serializer = ReactSerializers(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#          serializer.save()
#         return Response(serializer.data)
