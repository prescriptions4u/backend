from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, render_to_response
from django.template import RequestContext, loader
from django.views.generic.base import TemplateView

import os

class IndexView(TemplateView):
	template_name = "index.html"

class DoctorView(TemplateView):
	template_name = "doctor.html"

class PharmacistView(TemplateView):
	template_name = "pharmacist.html"
