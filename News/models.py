from django.db import models

class Artist(models.Model):
    name = models.CharField('Artists Name', max_length=120)
    phone = models.CharField('Contact Phone', max_length=20)
    web = models.URLField('Web Address')
    email_address = models.EmailField('Email Address')

    def __str__(self):
        return self.name

class AAI_User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField('User Email')

    def __str__(self):
        return self.first_name + " " + self.last_name


class Article(models.Model):
    author = models.CharField(max_length=60)
    article_name = models.CharField('Article Name', max_length=120)
    article_date = models.DateTimeField('Article Date')
    artist = models.ForeignKey(Artist, blank=True, null=True, on_delete=models.CASCADE)
    user = models.ManyToManyField(AAI_User, blank=True)
    article = models.TextField(blank=True)

    def __str__(self):
        return self.article_name
