FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

#####################################
# Restore Step
FROM microsoft/aspnetcore-build:2.0 AS restore
WORKDIR /src
# Copy csproj and restore as distinct layer
COPY *.csproj ./
RUN dotnet restore

#####################################
# Build Step
FROM restore AS build
# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o /app

#####################################
# Image Step
# Build runtime image
FROM base AS final
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "Profile.api.dll"]