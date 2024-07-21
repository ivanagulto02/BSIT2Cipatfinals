from django.db import models

class Item(models.Model):
    surname = models.CharField(max_length=50, default='Unknown')
    first_name = models.CharField(max_length=50, default='Unknown')
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.DateField(default='2000-01-01')
    place_of_birth = models.CharField(max_length=100)
    sex = models.CharField(max_length=10)
    civil_status = models.CharField(max_length=20, blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    blood_type = models.CharField(max_length=3, blank=True, null=True)
    gsid_no = models.CharField(max_length=20, blank=True, null=True)
    pagibig_no = models.CharField(max_length=20, blank=True, null=True)
    philhealth_no = models.CharField(max_length=20, blank=True, null=True)
    sss_no = models.CharField(max_length=20, blank=True, null=True)
    tin_no = models.CharField(max_length=20, blank=True, null=True)
    agency_employee_no = models.CharField(max_length=20, blank=True, null=True)
    citizenship = models.CharField(max_length=20, default='Unknown')
    residential_address = models.CharField(max_length=255, default='Unknown')
    residential_zip_code = models.CharField(max_length=10, blank=True, null=True)
    permanent_address = models.CharField(max_length=255, default='Unknown')
    permanent_zip_code = models.CharField(max_length=10, blank=True, null=True)
    telephone_no = models.CharField(max_length=15, blank=True, null=True)
    mobile_no = models.CharField(max_length=15, blank=True, null=True)
    email_address = models.EmailField(default='', unique=False)

    def __str__(self):
        return f'{self.surname}, {self.first_name} {self.middle_name}'
