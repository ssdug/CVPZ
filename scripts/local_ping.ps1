
@(
    "http://localhost:5001/api/health/ping",
    "http://localhost:5002/api/health/ping",
    "http://localhost:5003/api/health/ping"
) |
ForEach-Object { Invoke-WebRequest -Uri $_ } |
Select-Object StatusCode, StatusDescription, Content
