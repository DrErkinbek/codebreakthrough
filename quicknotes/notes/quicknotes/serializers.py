from rest_framework.serializers import ModelSerializer
from quicknotes.models import Note
from rest_framework import serializers

class NoteSerializer(ModelSerializer):
    content = serializers.CharField(required=False, allow_blank=True, dfeault="")
    
    class Meta:
        model = Note
        fields = ['id', 'title', 'content']