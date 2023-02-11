from django.http import JsonResponse
from .models import *
from .serializers import UserSerializers,studentSerializers,SupervisorSerializers,TrainingBodySerializers,OpportunitySerializers,FormsSerializers,SuperviseStudentsSerializers,AddOpportunitySerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa


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
    
@api_view(['GET', 'PUT', 'DELETE'])
def User_UserName(request, UserName):
    
    try:
        Users = User.objects.get(UserName=UserName) 
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
def student_detail(request, UserName):
    
    try:
        Users = student.objects.get(UserName=UserName)
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
    
@api_view(['GET', 'PUT', 'DELETE'])
def student_id(request, id):
    
    try:
        Users = student.objects.get(id=id)
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

@api_view(['GET', 'PUT', 'DELETE'])
def TrainingBody_id(request, id):
    
    try:
        Users = TrainingBody.objects.get(id=id)
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


@api_view(['GET', 'POST'])
def Opportunity_list(request):
    
    if request.method == 'GET':
        Users = Opportunity.objects.all()
        serializer = OpportunitySerializers(Users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OpportunitySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def SuperviseStudents_list(request):
    
    if request.method == 'GET':
        Users = SuperviseStudents.objects.all()
        serializer = SuperviseStudentsSerializers(Users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SuperviseStudentsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'PUT', 'DELETE'])
def SuperviseStudents_detail(request, pk):
    
    try:
        Users = SuperviseStudents.objects.get(pk=pk)
    except SuperviseStudents.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SuperviseStudentsSerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SuperviseStudentsSerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST'])
def AddOpportunity_list(request):
    
    if request.method == 'GET':
        Users = AddOpportunity.objects.all()
        serializer = AddOpportunitySerializers(Users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AddOpportunitySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'PUT', 'DELETE'])
def AddOpportunity_detail(request, pk):
    
    try:
        Users = AddOpportunity.objects.get(pk=pk)
    except AddOpportunity.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AddOpportunitySerializers(Users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AddOpportunitySerializers(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def Form1(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form1.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form2(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form3(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form4(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form5(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form6(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form7(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form8(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def Form9(request,UserName):
    studentinfo = get_object_or_404(student,UserName=UserName)
    opplink = get_object_or_404(AddOpportunity,student_id=studentinfo.id)
    Opport = get_object_or_404(Opportunity,id=opplink.Opportunity.id)


    template_path = 'TaibahTraining/form2.html'
    context = {'studentinfo': studentinfo,
               'opplink':opplink,
               'Opport':Opport}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="report.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response


    