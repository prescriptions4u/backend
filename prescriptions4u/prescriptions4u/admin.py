from django.contrib import admin
from prescriptions4u.models import Doctor

class DoctorAdmin(admin.ModelAdmin):
    pass

admin.site.register(Doctor, DoctorAdmin)
