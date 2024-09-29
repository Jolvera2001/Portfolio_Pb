FROM alpine:latest
ARG PB_VERSION=0.22.21

RUN apk add --no-cache \
    unzip \
    ca-certificates

    ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
    RUN unzip /tmp/pb.zip -d /pb/

COPY  ./pb_migrations /pb/pb_migrations

EXPOSE 8080

# start pocketbase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]