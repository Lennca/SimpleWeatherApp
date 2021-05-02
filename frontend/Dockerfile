FROM node:14-alpine

# Create App Directory (container)
RUN mkdir -p /usr/src/app

# Change Working Directory (container)
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy all files from current directory (host) to working directory (container)
COPY . .

# EXPOSE 3000

# Start application
CMD ["npm", "start"]