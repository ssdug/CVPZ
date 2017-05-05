
$output = "$(Resolve-Path .)\build"

if(-not (Test-Path $output)) {
    .\scripts\local_build.ps1
}

Start-Job -Name Identity -InputObject $output -ScriptBlock {
    Push-Location $input\identity
    dotnet .\Identity.api.dll --server.urls=http://+:5001/
}

Start-Job -Name Profile -InputObject $output -ScriptBlock {
    Push-Location $input\profile
    dotnet .\Profile.api.dll --server.urls=http://+:5002/
}

Start-Job -Name Projects -InputObject $output -ScriptBlock {
    Push-Location $input\projects
    dotnet .\Projects.api.dll --server.urls=http://+:5003/
}