from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializer import *

class registerViow(APIView):
    def get(self, request):
        output = [{"Fullname":output.Fullname}
        for output in student.objects.all()]
        return Response(output)
        
    def post(self, request):
        serializer = ReactSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
         serializer.save()
        return Response(serializer.data)
