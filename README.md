# auth-api




### heroku main deployment [main](https://auth-api-munther.herokuapp.com/)

### .env
> PORT: 8000 NODE_ENV=test DATABASE_URL=postgres://localhost:5432/lab8

Running the app:
npm start , nodemon
Endpoint: /signin
Returns Object
{
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik11bnRoZXIiLCJpYXQiOjE2MjkyMzEwOTd9.kRheu9y4Y1uJkLb2TKqYq6Ys0As32NUK00AC17pogMM",
    "capabilities": [
    "read"
    ],
    "id": 1,
    "username": "Munther",
    "password": "$2b$10$sPo23ZJ3vVaITQ2Ns2WLpO13jmzigcZSMrvFKAskJhym/LvblmX4a",
   ## "role": "user",
    "createdAt": "2021-08-17T20:03:51.363Z",
    "updatedAt": "2021-08-17T20:03:51.363Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik11bnRoZXIiLCJpYXQiOjE2MjkyMzEwOTd9.kRheu9y4Y1uJkLb2TKqYq6Ys0As32NUK00AC17pogMM"
}


{
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZG9uZSIsImlhdCI6MTYyOTIzMTMzM30.K4AF1D3jMuiCLFTdflAe8A_-0xi6krB_5rDcwYdj6uM",
    "capabilities": [
      "read",
      "create",
      "update",
      "delete"
    ],
    "id": 2,
    "username": "addone",
    "password": "$2b$10$N7N6YMmDYAAWHPQaoBZoUewH1NOKsLY5XRw894KhS/X/K3g9PifzO",
   ## "role": "admin",
    "updatedAt": "2021-08-17T20:15:33.592Z",
    "createdAt": "2021-08-17T20:15:33.592Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZG9uZSIsImlhdCI6MTYyOTIzMTMzM30.K4AF1D3jMuiCLFTdflAe8A_-0xi6krB_5rDcwYdj6uM"
}

UML

![README](Capture.PNG)
