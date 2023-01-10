from django.shortcuts import render
from django.http import HttpResponse
from .models import student


def say_hello(request):
    all_studnt = student.objects.all
    return HttpResponse(all_studnt)
