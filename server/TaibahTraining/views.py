from django.http import JsonResponse
from .models import *
from .serializers import UserSerializers,studentSerializers,SupervisorSerializers,TrainingBodySerializers,OpportunitySerializers,FormsSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


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
def User_detail(request, pk, password):
    
    try:
        Users = User.objects.get(pk=pk) 
        if(Users.Password!=password):
            return Response(status=status.HTTP_404_NOT_FOUND)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

    if request.method == 'GET':
        serializer = UserSerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    



@api_view(['GET', 'POST'])
def student_list(request):
    
    if request.method == 'GET':
        Users = student.objects.all()
        serializer = studentSerializers(Users, many=True)
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
        Users = student.objects.get(UserName=pk)
    except student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = studentSerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = studentSerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST'])
def Supervisor_list(request):
    
    if request.method == 'GET':
        Users = Supervisor.objects.all()
        serializer = SupervisorSerializers(Users, many=True)
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
        Users = Supervisor.objects.get(UserName=pk)
    except Supervisor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SupervisorSerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SupervisorSerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST'])
def TrainingBody_list(request):
    
    if request.method == 'GET':
        Users = TrainingBody.objects.all()
        serializer = TrainingBodySerializers(Users, many=True)
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
        Users = TrainingBody.objects.get(UserName=pk)
    except TrainingBody.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TrainingBodySerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TrainingBodySerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    