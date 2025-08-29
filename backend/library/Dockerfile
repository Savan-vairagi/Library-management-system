# Build stage
FROM maven:3.9.0-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Package stage
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/library-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
