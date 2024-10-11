# blockchain-price-tracker

This project is a **Node.js** and **Dockerized** application that tracks the price of **Ethereum** and **Polygon** every 5 minutes, sends email alerts when the price increases by more than 3%, and provides a set of APIs for fetching prices and calculating Ethereum to Bitcoin swap rates.

## Features

1. **Price Tracking**: Automatically fetches and stores Ethereum and Polygon prices every 5 minutes.
2. **Price Alerts**: Sends an email alert if the price of Ethereum or Polygon increases by more than 3% within the last hour.
3. **API Endpoints**:
   - **Get Hourly Prices**: Retrieve the prices of Ethereum and Polygon recorded every hour for the last 24 hours.
   - **Set Price Alerts**: Set a price alert for Ethereum or Polygon, and get notified by email when the price reaches the target.
   - **Swap Rate Calculation**: Calculate how much Bitcoin you’ll get for a given amount of Ethereum, including transaction fees.

## Tech Stack

- **Node.js**: Backend server.
- **Docker**: Containerization for easy deployment.
- **PostgreSQL**: Relational database to store price data and user alerts.
- **Sequelize**: ORM to interact with PostgreSQL.
- **Axios**: Fetches price data from external APIs.
- **Nodemailer**: Sends email alerts.
- **Swagger**: Generates API documentation.

## Getting Started

### Prerequisites

Before you begin, ensure you have Docker installed:

- **[Download Docker](https://www.docker.com/products/docker-desktop)**

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blockchain-price-tracker.git
   cd blockchain-price-tracker
