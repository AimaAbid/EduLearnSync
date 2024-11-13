# EduLearnSync

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```
   git clone https://github.com/AimaAbid/EduLearnSync.git
   ```

2. **Install Dependencies**  
   Navigate to the backend and frontend directories and install the required dependencies.
   
   - For the backend:
     ```
     cd EduLearnSync/backend
     npm install
     ```
   - For the frontend:
     ```
     cd ../frontend
     npm install
     ```


4. **Import Data into MongoDB**  
   Import the two json files located in the backend folder into your MongoDB compass database. This file contains   data for the posts, questions collection.

5. **Run the Application**  
   - Start the backend server:
     ```bash
     nodemon index.js
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm start
     ```

6. **Access the Application**  
   Once the frontend and backend are both running, you should be able to access the application through your browser at `http://localhost:3000`.



## About EduLearnSync

Edu Learn Sync is a learning platform designed to enhance engagement and retention through interactive features:

Performance Evaluation & Feedback: Courses are structured with modules and sub-modules containing study materials and quiz questions. Learners receive feedback on their answers, whether correct or incorrect.

Reward System: Learners earn points for correct answers and badges for completing sub-modules and course exams. The performance dashboard tracks points and badges to motivate learners.

Performance Leaderboard: A leaderboard showcases the top ten performers in each course.

Posts and comments section



The tech stack combines Node.js with Express for the backend, MongoDB for data storage, and React for a user-friendly frontend interface.

 
