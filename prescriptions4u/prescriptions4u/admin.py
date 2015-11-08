from django.contrib import admin
from prescriptions4u.models import Doctor, Prescriptchain, Patient, Pharmacist

class PrescriptchainAdmin(admin.ModelAdmin):
    pass

class DoctorAdmin(admin.ModelAdmin):
    pass

class PatientAdmin(admin.ModelAdmin):
    pass

class PharmacistAdmin(admin.ModelAdmin):
    pass

admin.site.register(Prescriptchain, PrescriptchainAdmin)
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Patient, PatientAdmin)
admin.site.register(Pharmacist, PharmacistAdmin)
