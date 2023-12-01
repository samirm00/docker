# use node image 
FROM node 
# define the working directory 
WORKDIR /app

# copy to the working directory 
COPY . .

# run in the image
RUN npm install 

# expose port
EXPOSE 5002  

# run when the container created 
CMD ["node" ,"index.js"]

