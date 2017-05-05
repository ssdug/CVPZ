param (
    [string]$host_url = "http://localhost"
)

$discovery_url = "$host_url`:5001/.well-known/openid-configuration"

$client_id = [System.Web.HttpUtility]::UrlEncode("client")
$client_secret = [System.Web.HttpUtility]::UrlEncode("secret")


$secure_endpoints = @(
    "$host_url`:5001/api/health/whoami",
    "$host_url`:5002/api/health/whoami",
    "$host_url`:5003/api/health/whoami"
)

function Get-IdentityConfiguration {
    Invoke-RestMethod -Uri $discovery_url
}

function Get-ClientToken {
    param([string]$token_endpoint)

    $creds = @{
        client_id = $client_id
        client_secret = $client_secret
        grant_type = "client_credentials"
    }  

    Invoke-RestMethod -Uri $token_endpoint -Method Post -Body $creds

}

$config = Get-IdentityConfiguration

$token = Get-ClientToken($config.token_endpoint)

Write-Host $token