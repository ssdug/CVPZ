param(
    [Alias('r')]
    [switch]$rebuild,
    [Alias('b')]
    [switch]$background
)

if($rebuild) {
 docker-compose -f .\docker-compose.ci.build.yml up
}

if ($background) {
    docker-compose `
    -f .\docker-compose.yml `
    -f .\docker-compose.override.yml `
    up -d --build
} else {
    docker-compose `
    -f .\docker-compose.yml `
    -f .\docker-compose.override.yml `
    up --build
}