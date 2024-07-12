# Weather App

## Description

Weather App is a Node.js application that allows users to register by providing their email, longitude, and latitude. Users can update their location information and fetch the current weather using the REST API. Additionally, a cron job runs every 3 hours to send the current weather details to each registered user's email. The application uses the OpenWeatherMap API to fetch weather details.

## Technologies

-  Node.js
-  Express
-  Nodemailer
-  Node-cron
-  OpenWeatherMap API

## Port

The application runs on port `5001`.

## Features

-  **User Registration:** Users can register by providing their email, longitude, and latitude.
-  **Update Location:** Users can update their longitude and latitude.
-  **Fetch Weather:** Users can fetch the current weather using the REST API.
-  **Automated Emails:** A cron job runs every 3 hours to send the current weather details to each registered user's email.

## Setup

Follow these steps to set up and run the Weather App:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
