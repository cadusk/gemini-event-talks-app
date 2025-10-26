# One Day Event

A simple one-page website for a one-day tech talk event.

## Features

*   Displays a schedule of talks for the day.
*   Allows users to filter talks by category.
*   Dynamically calculates and displays talk times.
*   Includes automatic breaks in the schedule.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) installed on your machine.

### Installation and Running

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/one-day-event.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd one-day-event
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## API

The application has a single API endpoint:

*   `GET /api/talks`: Returns a JSON array of all the talks from the `talks.json` file.

