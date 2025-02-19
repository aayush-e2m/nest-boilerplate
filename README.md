# Project Setup Guide

## 1. Database Setup

### Tool: PgAdmin

#### Background Postgres Server:

1. Install Postgres:
   ```sh
   brew install postgresql
   ```
2. Start Postgres service:
   ```sh
   brew services start postgresql
   ```
3. Update user password (Replace `postgres` with the current username):
   ```sh
   psql postgres
   ALTER USER postgres WITH PASSWORD 'your_secure_password';
   \q
   ```
4. Configure and create a server in PgAdmin and connect to it.

## 2. Project Setup

1. Install NestJS CLI:
   ```sh
   npm i -g @nestjs/cli
   ```
2. Clone the project from GitHub and install dependencies:
   ```sh
   git clone https://github.com/aayush-e2m/razorcopy-nest.git
   cd razorcopy-nest
   npm install
   ```
3. Run the project:
   ```sh
   npm run dev
   ```
