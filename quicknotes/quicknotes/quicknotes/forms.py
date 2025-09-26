from django.forms import ModelForm
from .models import Note

class MoteForm(ModelForm):
    class Meta:
        model = Note
        field = ['title', 'content']