# Docker

Docker is a containerization platform that simplifies the process of developing, shipping, and running applications. It provides a lightweight, portable, and self-sufficient environment for applications, enabling seamless deployment across different environments.

## Images

In Docker, an image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools. Images serve as a blueprint for creating containers.

### Building Images

Images are created from Dockerfiles, which are simple scripts containing a set of instructions for assembling the image. Docker builds an image by executing the instructions in the Dockerfile, resulting in a reproducible and shareable package.

## Containers

A container is a runtime instance of a Docker image. It encapsulates an application and its dependencies, running in isolation from the host system and other containers. Containers provide consistency across various environments and eliminate the "it works on my machine" problem.

## Commands

- Run a Docker container based on the "node" image:

```bash
docker run node
```

### Run an Image Interactively

Run a Docker container interactively based on the "node" image:

```bash
docker run -it node
```

### Show All images

Display information about all images:

```bash
docker images
```

### Show All Running Containers

Display information about all running Docker containers:

```bash
docker ps
```

### Show All Containers (Including Exited)

List all Docker containers, including those that have exited:

```bash
docker ps -a
```

### Build an Image

Build a Docker image from a Dockerfile:

```bash
docker build -t <your_image_name>  <path_to_Dockerfile>

```

### Run a container

Run a container from an image:

```bash
docker run  --name <your_container_name> -p <host_port>:<container_port> <image_name_or_id>

```

### Start a Stopped Container

Start a previously stopped Docker container using its ID or name:

```bash
docker start <container_id_or_name>
```

### Stop a Running Container

Stop a running Docker container using its ID or name:

```bash
docker stop <container_id_or_name>
```

### Remove a Container

Remove a Docker container using its ID or name:

```bash
docker rm <container_id_or_name>
```

### Remove an Image

Remove a Docker image using its ID or name:

```bash
docker rmi <image_id_or_name>
```

Remove a Docker image being used by a container:

```bash
docker rmi <image_id_or_name> -f
```
