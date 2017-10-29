param(
    [Alias('r')]
    [switch]$rebuild,
    [Alias('b')]
    [switch]$background,
    [Alias('w')]
    [switch]$web
)

if($rebuild) {
    docker-compose -f .\docker-compose.ci.build.yml up
}

if ($web) {
    docker-compose -f .\docker-compose.web.build.yml up
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