from django.shortcuts import render
from .serializers import TransactionSerializer
from . models import Transaction
from rest_framework import viewsets

class TransactionView(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

