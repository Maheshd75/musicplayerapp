from django.db import models

# Create your models here.
class Songs(models.Model):
    name= models.CharField(max_length=200)
    image = models.ImageField(upload_to='songimages')
    file =models.FileField(upload_to='uploads/')
    desc =models.CharField(max_length=200)
    album =models.CharField(max_length=200,null=True)
    duration= models.IntegerField(default=0)
class Album(models.Model):
    name= models.CharField(max_length=200)
    image = models.ImageField(upload_to='albumimages')
    desc =models.CharField(max_length=200)
    bgColor= models.CharField(max_length=200) 
class Userdata(models.Model):
    username = models.CharField(max_length=200) 
    email=models.EmailField(max_length=200)
    password=models.CharField(max_length=200)     