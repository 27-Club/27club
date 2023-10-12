from django.forms import ModelForm
from .models import Form

class BannerForm(ModelForm):
    class Meta:
        model = Form
        fields = ("banner",)
