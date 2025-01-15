# Breif Overveiw of Task Completion-

# Tech Stack used-
1. Redux Toolkit for Global State Management.
2. Express Js as backend framework for Node Js runtime enviornment.
3. React Js as frontend library for Single Page Application
4. Mongo DB for No Sql database design (Also kept Cart to be stored in DB, to Restore the products selection between multiple login sessions)
5. Thunder Client for testing REST Apis.

# Working Flow-
1. User will land at a page and get brief intro of trending products, which was brought to frontend by viewAll products api
2. User can login and register with their credentials.
3. User Can Add product to cart and remove, also (It can be extended by using api of create cart, in case of having different carts for different purchasing periods)
4. Using redux's state product will be added in cart and apis calls will be made to db for addition of product info in the cart.

# Challenges faced-
1. DB connection (due to bad auth at Atlas's cluster) --> Used local instance of Mongodb server and connected through Compass
2. Parsing of req object at time of end point creation --> Added url encoder and json parsor in index.js
3. Intending to make productCard reusable and enchanceble using High Order Function --> Added conditional rendering instead of it to meet project deadlines
4. Sort of css issue (Due to time constraint) --> Modified template UI component from official Doc of tailwindcss
