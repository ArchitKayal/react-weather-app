# ReactJS Weather App

Welcome to the ReactJS Weather App project! In this project, we will create a weather app using ReactJS and the Meteosource Weather API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [API Reference](#api-reference)


## Overview

This project is a simple weather application built with ReactJS. It fetches weather data from the Meteosource Weather API and displays it in a user-friendly interface. This project aims to demonstrate how to integrate third-party APIs with React and how to build a complete application from scratch.

## Features

- Fetch and display current weather data for any location
- User-friendly interface with styled-components
- Responsive design
- Error handling for API requests

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/reactjs-weather-app.git
    cd reactjs-weather-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your Meteosource API key:
    ```env
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

### Usage

1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies

This project uses the following dependencies:

- **axios**: A promise-based HTTP client for making requests to the Meteosource Weather API. It simplifies the process of handling HTTP requests and responses.
- **bootstrap-icons**: A library of free, high-quality icons designed for Bootstrap, but usable in any project. These icons enhance the visual appeal and user experience of the app.

## API Reference

This project uses the Meteosource Weather API to fetch weather data. You can find more information and sign up for an API key at the [Meteosource Weather API page](https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource).

