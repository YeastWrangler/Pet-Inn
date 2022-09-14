# Pet-Inn

AirBnB for pets

## About our app

Our app is designed for people going on holiday to be able to find someone to mind their pets and their home.

## Backend

- repo: https://github.com/Kerrshak/PetInn-Backend
- hosted backend: https://busy-ruby-narwhal-kit.cyclic.app

## Minimum node version

v18.4.0

## Technologies used

- axios
- react native

## Setup

In shell navigate to the directory you want to clone the repo to. Then use  
`git clone https://github.com/Kerrshak/PetInn-Backend`

You will need to create a file called .env in the PETINN-BACKEND folder. A guide on how to set this up to work with mongoDB can be found here: https://northflank.com/guides/connecting-to-a-mongo-db-database-using-node-js

Open the repo in your chosen code editor. To install the necessary dependencies open the terminal and run  
`npm install`

Then, to locally host the app, there are a few options:

- `npm run start` will provide a QR code that can be scanned on a phone with EXPO installed. If the phone is connected to the same network as the host PC then it will run the app on the phone.

- `npm run android` will emulate the app on a locally emulated android phone. We used android studio for this.

- `npm run ios` will emulate the app on a locally emulated iPhone. We used Xcode.
