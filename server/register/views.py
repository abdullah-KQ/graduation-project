from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import *
# from .serializer import *
from register.models import student,Supervisor, TrainingBody
from register.serializers import studentSerializers,SupervisorSerializers,TrainingBodySerializers
from django.core.files.storage import default_storage

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
    except student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TrainingBodySerializers(student)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TrainingBodySerializers(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        TrainingBodys.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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
