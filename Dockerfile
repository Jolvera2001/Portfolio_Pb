FROM alpine:latest
ARG PB_VERSION=0.22.21

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Create necessary directories
RUN mkdir -p /pb/pb_public /pb/pb_migrations /pb/pb_data

COPY --from=frontend-build /app/pb_public /pb/pb_public

# copying data migrations
COPY  ./pb_migrations /pb/pb_migrations

# copying client
COPY ./pb_public /pb/pb_public

# creating volume
VOLUME /pb/pb_data

# port
EXPOSE 8080

# start pocketbase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]