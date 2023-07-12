

[digital-cow-hut-Live-server](https://digital-cow-hut-server.vercel.app/api/v1/users)

## User routes
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/64ad1aec1e5746068df1ea62 (Single GET) Included an id that is saved in my database
* api/v1/users/64ad1aec1e5746068df1ea62 (PATCH)
* api/v1/users/64ad1aec1e5746068df1ea62 (DELETE) Includeed an id that is saved in my database
* 
## Cows routes
* api/v1/cows (POST)
* api/v1/cows (GET)
* api/v1/cows/64ae67c150aa39b85ab74824 (Single GET) Included an id that is saved in my database
* api/v1/cows/64ae67c150aa39b85ab74824 (PATCH)
* api/v1/cows/64ae67c150aa39b85ab74824 (DELETE) Included an id that is saved in my database

## Pagination and Filtering routes of Cows
* api/v1/cows?pag=1&limit=10
* api/v1/cows?sortBy=price&sortOrder=asc
* api/v1/cows?minPrice=20000&maxPrice=70000
* api/v1/cows?location=Chattogram
* api/v1/cows?searchTerm=Cha

