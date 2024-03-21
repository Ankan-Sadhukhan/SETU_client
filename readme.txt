- frontend
    - used Reactjs and tailwindcss to implement frontend part.
    - render home page
    - implemented admin login feature
    - used formik library to create the login admin form
    - render all registers users
    - Implemented feature where Admin can create a role for user or delete a user. 
    - No other users should get access to admin panel.


- backend
    - used mongodb to store the data
    - used express.js to create server
    - created three model - Admin, User, Courses
    - An Admin can create or delete a User
    - Implemented CRUD(create, read, update, delete) end points for Admin and User table.
    - Added create, get courses end point
    - Implemented authentication for admin through JWT token
    - store admin password after hashing. for that we use bcrypt library.
    - Implemented authorisation for admin such that only admin can get the access of Admin panel.
    - Created Instructors GET, POST, DELETE api endpoints to fetch the data.
    
    
Technologies Used :
	- MongoDB: Database for storing user information.
	- Express.js: Backend framework for handling HTTP requests.
	- React.js: Frontend library for building the user interface.
	- Node.js: JavaScript runtime environment for running server-side code.
	

Security and privacy:
	- for security purpose, we dont store the password directly in db. before that we hash that.
	
User's flow :
	- Any incomming user can see the homepage when the come to our site.
	- Then they can see our products and services.
	- They can also register as instructors by the admin
	- If the user is admin, he/she can login as admin, after syccessfully login, he/she redirects to the admin Panel dashboard and their they can add or remove a user.
		
	
Future Scope: 
	- we have added courses schema and infuture we will create lookup between courses and instructors to make relation between them.
