from django.http import HttpResponse, Http404
from django.views.decorators.http import require_POST
from django.shortcuts import render, get_object_or_404, redirect
from .models import Note
from .forms import NoteForm

def home(request):
    return HttpResponse("Welcome Home")

def notes(request):
    data = Note.objects.all()
    note = NoteForm(instance=data)
    return render(request, "quicknotes/index.html", {'notes': data, 'form': NoteForm})

def note(request, note_id):
    data = get_object_or_404(pk=note_id)
    note_form = NoteForm(instance=data)
    return render(request, 'quicknotes/note.html', {'notes': data})

@require_POST
def add(request):
    form = NoteForm(request.POST)
    if form.is_valid():
        form.save()
    return redirect('notes')

@require_POST
def edit(request, note_id):
    note = get_object_or_404(Note, pk=note_id)
    form = NoteForm(request.POST, instance=note)
    if form.is_valid():
        form.save()
    return HttpResponse(status=405)

@require_POST
def delete(request, note_id):
    note = get_object_or_404(Note, pk=note_id)
    note.delete()
    return redirect('notes')