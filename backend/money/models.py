from django.db import models

# Create your models here.

class Transaction(models.Model):
    text =  models.CharField(max_length=200,blank=True);
    amount = models.IntegerField()
    createdAt =  models.DateField(auto_now_add=True)



