# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install app dependencies, including react-scripts
RUN npm install react-scripts -g
RUN npm install

# Copy the current directory contents into the container at /app
COPY frontend/ .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV REACT_APP_BACKEND_URL=http://localhost:8000

# Run app when the container launches
CMD ["npm", "start"]
