from django.forms import ModelForm
from .models import Form, UploadImage

class ImageForm(ModelForm):
    class Meta:
        model = Form
        fields = ('banner',)

class UploadImageForm(ModelForm):
    class Meta:
        model = UploadImage
        fields = ("caption", "image")
