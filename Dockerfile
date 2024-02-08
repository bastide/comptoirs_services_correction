FROM openjdk:17.0.2-jdk
COPY target/comptoirs-spring-jpa-1.0-SNAPSHOT.jar comptoirs-spring-jpa-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/comptoirs-spring-jpa-1.0-SNAPSHOT.jar"]
