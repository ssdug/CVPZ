param(
    [string]$host_url = "http://localhost"
)


@(
    "$host_url`:5001/api/health/ping",
    "$host_url`:5002/api/health/ping",
    "$host_url`:5003/api/health/ping",
    "$host_url`:5001/.well-known/openid-configuration"
) |
ForEach-Object { Invoke-WebRequest -Uri $_ } |
Select-Object StatusCode, StatusDescription, Content