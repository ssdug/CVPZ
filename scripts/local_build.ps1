$output = "$(Resolve-Path .)\build"

if(Test-Path $output) {
    Remove-Item -Recurse -Force $output
    New-Item $output -ItemType Directory
}

dotnet restore .\CVPZ.sln
dotnet publish .\src\Profile.api\Profile.api.csproj -c Release -o $output\profile
dotnet publish .\src\Projects.api\Projects.api.csproj -c Release -o $output\projects
dotnet publish .\src\Identity.api\Identity.api.csproj -c Release -o $output\identity