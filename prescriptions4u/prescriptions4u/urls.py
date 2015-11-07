from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
admin.autodiscover()

from . import views


# urlpatterns = patterns('',
#     # Examples:
#     # url(r'^$', 'prescriptions4u.views.home', name='home'),
#     # url(r'^blog/', include('blog.urls')),

#     url(r'^admin/', include(admin.site.urls)),
#     url(r'^helloworld/', views.index, name = 'index')
# )

urlpatterns = [

    url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', views.IndexView.as_view()),
    url(r'^doctor/', views.DoctorView.as_view()),
    url(r'^pharmacist/', views.PharmacistView.as_view(), name = 'pharmacist')
	
]