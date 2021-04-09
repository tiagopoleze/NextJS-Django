# NextJS-Django

## Getting Started

- [Requisites](#requisites)
- [Installing](#installing)
- [Deployment](#deployment)

## Built With

* [Python](https://www.python.org) - Server language
* [Django](https://www.djangoproject.com) - Server
* [Django Rest Framework](https://www.django-rest-framework.org) - Server library
* [NextJS](https://nextjs.org/) - The web framework used
* [TailwindCss](https://tailwindcss.com) - Style

## Project Structure

```
server/provisn (the server)
server/provisn/myusers (the only server app used)
web/ (the NextJS)
web/Models/ (The models used in the front)
web/pages (the routes views for front)
web/components (reuzable components)
web/src/api (the serveless functions used)
```

## Requisites

- Python v3.8 +
- Django v3.1.7 +
- Django Rest Framework v3.9.3 +
- Node v14.0.1 +
- Yarn v1.22.0 +

You will need a key from [Nomics](https://p.nomics.com/cryptocurrency-bitcoin-api).

## Installing

How to run

### Python

```
cd /path_to_folder/server/provisn
python manager.py migrate
python manager.py runserver
```

### TypeScript

```
cd /path_to_folder/web/
touch .env.local
echo "NOMICS_API_KEY=your key here" >> .env.local
yarn
yarn dev
```

## Coding style

For TypeScript
- [Prettier](https://prettier.io/)

## Author

* **Tiago Poleze** - *Initial work* - [tiagopoleze](https://github.com/tiagopoleze)
