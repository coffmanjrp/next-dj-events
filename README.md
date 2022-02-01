# DJ Evnets

A full CRUD configuration DJ events manager app.

![Realtor](https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1643676700/coffmanjrp.io/dj_events_0e91c5fa63.png)

## How to start

1. Clone this repository.

```
git clone git@github.com:coffmanjrp/next-dj-events.git
```

Or download the zip file.

2. Run following command to install the dependencies.

```
cd frontend
npm install
# or
yarn
```

and

```
cd backend
npm install
# or
yarn
```

3. Set environment variables.

example:

```
# frontend/.env.local

NEXT_PUBLIC_MAPBOX_API_TOKEN=YOUR_MAPBOX_API_TOKEN
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=YOUR_GOOGLE_MAP_API_KEY
```

and

```
# backend/.env

HOST=0.0.0.0
PORT=1337
CLOUDINARY_NAME=YOUR_CLOUDINARY_ACCOUNT_NAME
CLOUDINARY_KEY=YOUR_CLOUDINARY_KEY
CLOUDINARY_SECRET=YOUR_CLOUDINARY_SECRET
```

4. And you can start localhost by

```
cd frontend

npm run dev
# or
yarn dev
```

and

```
cd backend

npx strapi start
```

Enjoy!

## Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [mapbox](https://www.mapbox.com/)
- [react-geocod](https://github.com/shukerullah/react-geocode)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Moment.js](https://momentjs.com/)
- [qs](https://github.com/ljharb/qs)
- [cookie](https://github.com/jshttp/cookie)

### Backend

- [Strapi](https://strapi.io/)
- [Cloudinary](https://cloudinary.com/)
