# AttendAsh - Ashwin Lakhani

A application which makes bunking a little harder than before!
It uses the application of Facial Recognition to mark your attendance using 2 step verification.

[Visit the web application](https://attendash.netlify.app/)

## Table of contents

- [Technology Stack used:](#Technology-Stack-used:)
- [How has it been built?](#How-has-it-been-built)
- [Features of the Application](#Features-of-the-Application)
- [How to run this web application?](#How-to-run-this-web-application?)
- [Instructions For Our Users](#Instructions-For-Our-Users)
- [Installation](#installation)
- [Running the Application](#Running-the-Application)

## Technology Stack used:

<div>
      <p align ="left">
        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" style="float: left" alt="MongoDB" width="30px" /> <b> MongoDB</b><br><br>
        <img src="https://img.icons8.com/officel/2x/react.png" style="float: left" alt="ReactJS" width="30px" /><b> ReactJS</b><br><br>
        <img src="https://img.icons8.com/color/2x/nodejs.png" style="float: left" alt="NodeJS" width="30px" /><b> <t>NodeJS</b><br><br>
        <img src="https://img.icons8.com/ios-glyphs/2x/github.png" style="float: left" alt="Github" width="30px"/><b> Github</b><br><br>
        <img src="https://img.icons8.com/color/2x/graphql.png" style="float: left" alt="GraphQL" width="30px"/><b> GraphQL</b><br><br>
      </p>
</div>

[(Back to top)](#table-of-contents)

## How has it been built ?

1. The FACE API model has been put in the "client/public/models" folder. In short, "Face-api.js" has been used in our web application which has made face detection and recognition a lot simplier using pre trained models. [Check it out] (https://github.com/justadudewhohacks/face-recognition.js). Along with it, ReactJS has been used for frontend, and NodeJS and Express for backend along with MONGODB for the database. Few other tools such as GraphQL along with JWT and OAUTH for authentication.

[This project uses 3 pretrained models:](https://github.com/justadudewhohacks/face-api.js/tree/master/weights)

- Face Detection Model
- Facial Landmark Detection Model
- Feature Extraction Model

There is a total of 8 required weight files with the respective metadata file required. Each model had been quantized to a size less than 10 MB to improve the recognition speed

[(Back to top)](#table-of-contents)

## Features of the Application

### <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-solid-kiranshastry-1.png" width="30px" />&ensp;Register and Login with Email ID and Password

- User information is saved in the MongoDB Cloud.
- The password is hashed first and then stored.

### <img src="https://img.icons8.com/color/48/000000/gmail--v2.gif" width="30px" />&ensp;Login with Google

- Google API is used to implement the feature.
- User information is saved in the MongoDB Cloud.

### <img src="https://img.icons8.com/color/2x/open-book--v2.gif" style="float: left" width="30px" />&ensp;User - Student

- At least two images for facial recognition have to uploaded by each student.
- Using course ID students can enrol into courses.

### <img src="https://img.icons8.com/ultraviolet/2x/literature--v2.gif" style="float: left" width="30px" />&ensp;User - Lecturer

- Enlists a course that a student could enrol in.

### <img src="https://img.icons8.com/ios/2x/attendance-mark.png" style="float: left" width="30px" />&ensp;Attendance Room

- A lecturer opens the attendance list.
- Students can mark their attendance using webcam.
- Attendance is marked when the face matches with the images in the database.
- Attendance cannot be marked after the lecturer has closed the attendance sheet.

### <img src="https://img.icons8.com/color/2x/attendance-mark.png" style="float: left" width="30px" />&ensp;Attendance History

- Percentage and names of absentees can be seen by both the users.

### <img src="https://img.icons8.com/ios-glyphs/2x/clock--v2.gif" style="float: left" width="30px" />&ensp;Schedule Attendance Transaction

- Lecturers can schedule to inititiate an attendance transaction at a particular time and date.

### <img src="https://img.icons8.com/ios/2x/delete-sign--v3.gif" style="float: left" width="30px" />&ensp;Remove student from a course

- The lecturer can remove students from a course.

### <img src="https://img.icons8.com/color/2x/circled-user-male-skin-type-4--v2.gif" style="float: left" width="30px" />&ensp;Profile Picture

- Users can change their profile picture.

### <img src="https://img.icons8.com/ios-filled/2x/appointment-reminders--v2.gif" style="float: left" width="30px" />&ensp;Notification

- Students enrolled in a course get notified when the attendance sheet is opened.

[(Back to top)](#table-of-contents)

## How to run this web application?

1. Download NodeJS

### Step 1: Download the source code

open CMD and type "git clone https://github.com/ashwinlakhani/attendash.git".

### Step 2: Install dependencies

1. Open CMD in VSCode, change directory to "client" folder and run the following commands thus downloading the dependencies.
   First run 'cd client' , then run ' npm i --force'
2. Open another terminal, change directory to "server" folder and install the dependencies . First run 'cd server' , then run ' npm i --force'

### Step 3: Create an account in MongoDB Cloud and configure

1. Go to https://www.mongodb.com/try to register a free-tier account.
2. Create a project named "attendash" and create a cluster named "attendash-Cluster".
3. Choose any region with a star highlighted next to it
4. Adding IP whitelist "0.0.0.0". This allows all network access

### Step 4: We'll have to create an account in cloudinary. This is a cloud for storing media files

1. Go to https://cloudinary.com/users/register/free to register a free-tier account.
2. Note down your API key and Secret which have to be used later
3. Go to the tab "Media Library", and create a folder named "attendash".
4. Inside the folder "attendash", create 2 subfolders named "ProfilePicture" and "FaceGallery".
5. Next, we have to go to settings, located on the top right
6. Under tab "Upload", scroll down until you see "Upload presets".
7. Click "Add upload preset", set Upload preset name to "attendash_facegallery" and folder set to "attendash/FaceGallery".
8. Leave the others as default and click "Save".
9. Again, click "Add upload preset", set Upload preset name to "attendash_profilepicture" and folder set to "attendash/ProfilePicture".
10. Leave the others as default and click "Save".

### Step 5: Next, set up Google O Auth for signing in with Google and sending mails

1. Go to GCP console: https://console.cloud.google.com/apis.
2. Create a new project named "attendash" and find the respective OAuth Credentials
3. Under tab "Credentials", click "Create Credential" and choose "OAuth client ID".
4. Choose the application type "Web Application".
5. Name the OAuth client name "Google Login".
6. Add the javascript origin: http://localhost:3000, https://attendash.netlify.app
7. Add the redirect uri: https://developers.google.com/oauthplayground.
8. Click "Save".
9. Create an OAuth credential for email sending.
10. Under tab "Credentials", click "Create Credential" and choose "OAuth client ID".
11. Choose the application type "Web Application".
12. Name the OAuth client name "Mail".
13. Add the javascript origin: http://localhost:4000, https://attendash.netlify.app
14. Add the redirect uri: https://developers.google.com/oauthplayground.
15. Click "Save".
16. Under tab "OAuth Consent Screen", enter the required info (app name, app logo, app uri, privacy policy, etc).

### Step 6: Configure server environment variables.

1. Inside the "server" folder, create a file named ".env" used to save the credential data of database, API and so on.
2. Inside ".env" file, create 10 variables named "MONGO_URI", "SECRET_KEY", "CLOUDINARY_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET", "GOOGLE_OAUTH_USERNAME", "GOOGLE_OAUTH_CLIENT_ID", "GOOGLE_OAUTH_CLIENT_SECRET", "GOOGLE_OAUTH_REFRESH_TOKEN" and "GOOGLE_OAUTH_REDIRECT_URI".
3. Go to MongoDB Cloud, select "connect" and choose "Node.js" to get the connection string. Set the MONGO_URI respectively.
4. Set your SECRET_KEY to any random string (e.g: uHuauI8y8n9j1).
5. Go to Cloudinary, copy the app name, id and secret, assigned to CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
6. Assign GOOGLE_OAUTH_USERNAME to your gmail (e.g: yourgmailusername@gmail.com)
7. Go to GCP (Google Cloud Platform) console, choose the "attendash" project.
8. Under "Credentials" tab, select "mail" OAuth client, copy the app id and secret, assigned to "GOOGLE_OAUTH_CLIENT_ID" and "GOOGLE_OAUTH_CLIENT_SECRET".
9. Go to https://developers.google.com/oauthplayground, enter scope: "https://mail.google.com".
10. Before submiting, click the setting icon on the top right.
11. Click "Use your own OAuth credentials"
12. Enter "Client ID" and "Client Secret" of "mail" OAuth client.
13. Submit the API scope.
14. You will get an authorization code, exchange it with access token and refresh token.
15. Assign the refresh token to GOOGLE_OAUTH_REFRESH_TOKEN.
16. Assign GOOGLE_OAUTH_REDIRECT_URI to https://developers.google.com/oauthplayground.

[(Back to top)](#table-of-contents)

## Instructions For Our Users:

### Professors

1. Register an account with our website
2. When you land to your home page, you can create a course with the detais mentioned
3. Give the course unique ID , mentioned in the table , under the second coljmn
4. Students has to send the request to register, accept the registration.
5. You do not need upload picture of students, It will be done by students.
6. After all students register, you can select your course and choose to create new attendance which can be turned on and off
7. You can see the faces of your students who have registered for your course
8. Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.
9. Only those enroll in the particular course will be counted into dataset for facial classification.
10. Select date , time and camera inside attendance room.
11. Wait for the model to be loaded.
12. Set the distance as you wish.
13. Submit the attendance form if finished.
14. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".
15. Check Attendance
16. Thank You.

### Student

Instructions For Student:

1. Register an account.
2. Enroll into a course.
3. Wait for system loading
4. Wait for all models being loaded.
5. Upload your face photo in "Face Gallery", at least two of your photos must be uploaded, with face in clear visibility
6. The system will perform face detection, ensuring only a single face exist and rejecting photo with empty face or multiple faces.
7. Photos will save in our secure cloud storage
8. When your lecturer take the attendance of a particular course, all your uploaded facial data will be counted into the dataset for facial comparison.
9. You can Visualize your attendance data by clicking on "Attendance History" , or you can enter a particular course and click "View Attendance History"

[(Back to top)](#table-of-contents)

## Running the Application

### Server

1. Make sure the 10 env variables have been assigned in ".env" file.
2. Install the "nodemon" which can restart the server script automatically if changes are detected.
3. Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
4. Take a look at "server/package.json".
5. Open CMD under directory "server", type "npm run dev".
6. The server is running on http://localhost:4000.

### Client

1. The client script is built using ReactJS, through CRA command.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

### Have fun using this app, and reach out for any assistance !

[(Back to top)](#table-of-contents)
