FROM microsoft/aspnetcore:1.1
ARG source
WORKDIR /app
EXPOSE 5001
COPY ${source:-obj/Docker/publish} .
ENTRYPOINT ["dotnet", "Identity.api.dll"]
