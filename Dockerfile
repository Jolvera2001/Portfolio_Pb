FROM alpine:latest
ARG PB_VERSION=0.22.21

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# copying data migrations
COPY  ./pb_migrations /pb/pb_migrations

# copying client
COPY ./pb_public /pb/pb_public

# copying data if it exists
COPY ./pb_data /pb/pb_data

# creating volume
VOLUME /pb/pb_data

# port
EXPOSE 8080

# start pocketbase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]