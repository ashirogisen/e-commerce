**E-Commerce API Documentation**
---
Simple E-Commerce app with authenthication and authorization API build using Express, Mongoose, and JSON Web Token in the server side. As for the client side, it was built using Vue and Bootstrap 4.

## List of API Routes

Route | HTTP | Description
----- | ---- | -----------
/register | POST | Route used to create a new account
/login | POST | Route used to let user login to app
/products | GET | Route used to retrieve all products in database
/products | POST | Route used to create a new product
/products | PUT | Route used to edit and update a product
/products | DELETE | Route used to delete a product
/img/upload | POST | Route used to upload an image
/categories | GET | Route used to retrieve categories data
/cart | GET | Route used to retrieve all products in a cart
/cart | POST | Route used to create a cart
/cart | PATCH | Route used to edit quantity of product in a cart
/cart | DELETE | Route used to delete a cart
/transactions | GET | Route used to retrieve transaction data
/transactions | POST | Route used to create a transaction 

## Usage

With only npm: 

```javascript
npm install
npm run dev in server folder
run index.html using live-server --host:localhost
```

**Register**
----
  Register new account to the database and returns a json response if succeeded.

* **URL**

  /register

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

```javascript
{
    "name" : String,
    "password" : String,
    "email" : String,
    "role" : String,
    "address" : String
} 
```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ success: true, message: Account successfully registered }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

**Log In**
----
  Verify user's authentication and returns token if data is valid.

* **URL**

  /login

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

```javascript
{
    "email" : String,
    "password" : String
} 
```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ token: token retrieved from server generated using json web token }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Wrong username or password" }`

**Get Products**
----
  Request to retrieve all products data

* **URL**

  /products

* **Method:**
  
  `GET`

* **URL Params**

  None required

* **Data Params**

  None required

* **Headers**

  None required

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ all products data as an array of object }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`

**Create a product**
----
  Post request to server to create a product.

* **URL**

  /products

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

```javascript
{
    "name" : String,
    "category" : ObjectId,
    "description" : String,
    "stock" : Number,
    "price" : Number,
    "image": File
} 
```

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ data : post data}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`


**Edit Product**
----
  Edit product and update the existing data in the database.

* **URL**

  /products/:id

* **Method:**
  
  `PUT`

* **URL Params**

  id (edited product)

* **Data Params**

```javascript
{
    "name" : String,
    "category" : ObjectId,
    "description" : String,
    "Stock" : Number,
    "Price" : Number,
    "image": File
} 
```

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ message: Successfully updated product }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`


**Delete Product**
----
  Delete product from the database 

* **URL**

  /products/:id

* **Method:**
  
  `DELETE`

* **URL Params**

  id (deleted product)

* **Data Params**

  None required

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ message: Successfully deleted product }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`


**Get Categories**
----
  Request to retrieve all categories data

* **URL**

  /categories

* **Method:**
  
  `GET`

* **URL Params**

  None required

* **Data Params**

  None required

* **Headers**

  None required

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ all products data as an array of object }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`



**Get Cart**
----
  Request to retrieve cart data

* **URL**

  /cart

* **Method:**
  
  `GET`

* **URL Params**

  None required

* **Data Params**

  None required

* **Headers**

  None required

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ all products data as an array of object }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`

**Create a cart**
----
  Post request to server to create a cart.

* **URL**

  /cart

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

```javascript
{
    "user" : ObjectId
    "Product" : Array of { ObjectId, qty }
} 
```

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ data : post data}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`


**Delete Cart**
----
  Delete cart from the database 

* **URL**

  /cart/:id

* **Method:**
  
  `DELETE`

* **URL Params**

  id (deleted cart)

* **Data Params**

  None required

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ message: Successfully deleted product }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`

**Get Transactions**
----
  Request to retrieve all transactions data

* **URL**

  /transactions

* **Method:**
  
  `GET`

* **URL Params**

  None required

* **Data Params**

  None required

* **Headers**

  None required

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ all products data as an array of object }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`

**Create a transaction**
----
  Post request to server to create a transaction.

* **URL**

  /transactions

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

```javascript
{
    "cart" : ObjectId
} 
```

* **Headers**

  token (used to let server verify the identity of user who requested the data)

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ data : post data}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Validation Error: User's exclusive feature" }`














