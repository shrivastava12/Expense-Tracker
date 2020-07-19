from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views

router =  DefaultRouter()

router.register('expense',views.TransactionView,basename = 'expense')

urlpatterns = [
    path('',include(router.urls))
]

