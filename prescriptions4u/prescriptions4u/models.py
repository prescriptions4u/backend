from django.db import models

class Prescriptchain(models.Model):
    address = models.CharField(max_length=100)
    key = models.CharField(max_length=100)

class Doctor(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    key = models.CharField(max_length=100)

class Pharmacist(models.Model):
    name = models.CharField(max_length=50) 
    address = models.CharField(max_length=100)
    key = models.CharField(max_length=100)

class Patient(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    key = models.CharField(max_length=100)
