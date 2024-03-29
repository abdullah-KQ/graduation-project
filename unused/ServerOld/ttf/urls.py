"""ttf URL Configuration

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
from django.urls import path ,include

from django.urls import re_path as url


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('register', registerViow.as_view(),name="register"),
    # path('Homepage/', include('Homepage.urls')),
     path ('',include('django.contrib.auth.urls')), # register or login page?
    path ('',include('register.urls')),

    
    # Start with Homepage -- not now
    # path('', include('Homepage.urls')),
]
