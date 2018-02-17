# from rest_framework import status
# from rest_framework.authtoken.models import Token
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from accounts.serializers import UserFormSerializer
#
#
# class UserFormCreate(APIView):
#
#     def get(self, request):
#         user_form = UserFormSerializer(data=request.data)
#         if user_form.is_valid():
#             user_form =
#             return Response(request, user_form.data)
#
#     class Meta:
#         model = UserFormSerializer
#         fields = ('username', 'password', 'email')
#
#     def post(self, request):
#         serializer = UserFormSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 token = Token.objects.create(user=user)
#                 json = serializer.data
#                 json['token'] = token.key
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
