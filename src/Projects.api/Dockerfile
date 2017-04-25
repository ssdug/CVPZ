FROM microsoft/aspnetcore:1.1
ARG source
WORKDIR /app
EXPOSE 5003
COPY ${source:-obj/Docker/publish} .
ENTRYPOINT ["dotnet", "Projects.api.dll"]
