FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1
RUN mkdir /web
WORKDIR /web
ADD Pipfile* /web/

RUN apk update && apk upgrade \
    && apk add --no-cache \
        postgresql-dev \
        python3-dev \
    && rm -rf /var/cache/apk/* /tmp/*

RUN mkdir -p ~/.postgresql \
    && pip install pipenv \
    && pipenv install --deploy --system

COPY ./bootstrap.sh .

RUN chmod +x ./bootstrap.sh \
    && chmod +x ./scheduler.sh

CMD /bin/sh ./bootstrap.sh
#CMD /bin/sh ./scheduler.sh