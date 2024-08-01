FROM node:22-alpine3.19

# Set the working directory to /app
WORKDIR /app

# replace this with your application's default port
# EXPOSE 8888

# # Only used in prod env
# # Use COPY when you are ready to ship the application and you are sure you do not modify the source code anymore.
# # Copy the current directory contents into the container at /app
COPY . /app

# RUN apt update && \
#     apt install npm -y --no-install-recommends

# First init react app
# npx create-react-app .
# npm install react-router-dom
# npm install react-elastic-carousel

CMD ["npm", "start"]
# CMD ["tail", "-f", "/dev/null"]
