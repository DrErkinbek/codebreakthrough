from django.urls import path
from quicknotes_site import views

urlpatterns = [
    path('notes/', views.notes, name='notes'),
    path('notes/<int:note_id>/', views.note, name='note'),
    path('notes/<int:note_id>/edit', views.edit, name='edit'),
    path('notes/<int:note_id>/delete/', views.delete, name='delete'),
    path('notes/add/', views.add, name='add')
]
