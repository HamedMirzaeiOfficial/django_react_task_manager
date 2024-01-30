from rest_framework import serializers
from .models import UserProfile, Task

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'password', 'email', 'created_at', 'updated_at')
        extra_kwargs = {'password': {'write_only': True}}


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'user', 'title', 'description', 'completed', 'created_at', 'updated_at')
        read_only_fields = ('user',)
