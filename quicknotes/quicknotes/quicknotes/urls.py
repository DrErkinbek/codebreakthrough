from django.contrib import admin
from django.urls import path
from quicknotes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('notes/', views.notes, name='notes'),
    path('notes/<int:note_id>/', views.note, name='note'),
    path('notes/<int:note_id>/edit', views.edit, name='note'),
    path('notes/add', views.add, name='add'),
    path('notes/add', views.add, name="add")
]
