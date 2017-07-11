#!/bin/bash
host_url="http://localhost"

hostUrls=("$host_url:5001/api/health/ping" "$host_url:5002/api/health/ping" "$host_url:5003/api/health/ping" "$host_url:5001/.well-known/openid-configuration" )
for i in "${hostUrls[@]}"
do
	curl $i
    echo ""
done