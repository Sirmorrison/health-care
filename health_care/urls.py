from django.conf.urls import url
from django.contrib import admin
from accounts import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^register$', views.UserFormCreate.as_view(), name='account-create')
]
