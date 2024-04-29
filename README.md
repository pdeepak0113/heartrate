
Install Node.js: If you haven't already, download and install Node.js from the official website: Node.js Download.
Set Up Your Project Directory: Create a new directory on your computer where you want to work on this project. Navigate to that directory using your terminal or command prompt.
Create Files: Inside your project directory, create the heartrate.json file with your heart rate data and calculateHeartRate.ts with the TypeScript code provided earlier.
Install Dependencies: Run the following command in your terminal to install the required dependencies:
Copy code
npm install lodash moment
Compile TypeScript to JavaScript: Run the following command to compile the TypeScript code to JavaScript:
Copy code
tsc calculateHeartRate.ts
Execute the JavaScript Code: Run the following command to execute the JavaScript code:
Copy code
node calculateHeartRate.js
This will run the script, read the heartrate.json file, calculate the heart rate statistics, and write the results to output.json in the same directory.

After completing these steps, you should see the output JSON file (output.json) containing the calculated heart rate statistics for each day.