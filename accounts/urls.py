from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^register$', views.UserFormCreate.as_view(), name='account-create')
]
