FROM python:3.8

WORKDIR /app

COPY ../requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app



# Apply database migrations, create superuser, and start the Django development server
CMD python3 backend/manage.py makemigrations && \
    python3 backend/manage.py migrate && \
    python3 backend/manage.py createsuperuser && \
    python3 backend/manage.py runserver 0.0.0.0:8000
