from django.contrib.auth.models import User
from django import forms
from rest_framework.validators import UniqueValidator


class UserForm(forms.ModelForm):
    email = forms.EmailField(max_length=50, required=True,
                             validators=[UniqueValidator(queryset=User.objects.all())])
    username = forms.CharField(max_length=25, required=True,
                               validators=[UniqueValidator(queryset=User.objects.all())])
    password = forms.CharField(min_length=8, widget=forms.PasswordInput)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        validated_data['email'],
                                        validated_data['password']
                                        )
        return user

    class Meta:
        model = User
        fields = (
                'email',
                'password',
                'username'
                 )
