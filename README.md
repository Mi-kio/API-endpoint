# API-endpoint
Create an API endpoint which will have a GET, POST and DELETE method

### STEP 1 - Clone the repository
git clone <repository-url>
cd API-endpoint


### STEP 2 - Install Dependencies
npm install

### STEP 3 - Start the Server
node app.js
The server will run at http://localhost:3000.

### STEP 4 - Test the API
Open a web browser or use a tool like Postman to access http://localhost:3000

### Step 5 - Testing in Postman
- GET -> nter the URL for the POST endpoint,  http://localhost:3000/api/data

  
- POST -> Set the request method to POST.
Enter the URL for the POST endpoint,  http://localhost:3000/api/data.
In the "Body" tab, select "raw" and choose "JSON (application/json)" as the content type.
Enter the JSON data you want to send in the request body.

  
- DELETE -> Set the request method to DELETE.
Enter the URL for the DELETE endpoint,  http://localhost:3000/api/data/0 to delete the data at index 0.
Click the "Send" button.


## Project Structure

app.js: The main application file containing the Express server setup and routes.

package.json: Configuration file with project dependencies and scripts.

node_modules/: Directory where project dependencies are installed.

README.md: This README file.







