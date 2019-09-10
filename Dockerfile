# Use node 10.16.3 LTS
FROM node:10.16.3

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Launch application
CMD ["npm","start"]
