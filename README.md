# CVPZ [![Build status](https://ci.appveyor.com/api/projects/status/rwvr7jl20nw00eiu/branch/master?svg=true)](https://ci.appveyor.com/project/ssdugadmin21923/cvpz/branch/master) [![Join us](https://ssdug-slackin.azurewebsites.net/badge.svg)](https://ssdug-slackin.azurewebsites.net/)

CV for [Curriculum Vitae](https://en.wikipedia.org/wiki/Curriculum_vitae) is a written overview of a person's experience and other qualifications.

PZ 'cause it sounds easy.

## What?

Developers continuously need to keep their resumes current, documenting every project, engagement, and various details of accomplishments.  Many have created git repositories that can store versions of these resumes well. However, as the breadth of experience expands it becomes hard to manage the growing amount of data in a single document. There are places to manage resume information, but these tools do not allow management of versions of the individual projects or the ability to query history to aid in highlighting specific experience.

## Why?

We are hoping to inspire community involvement by building a simple and useful tool and to create and open space for anyone who wants to be involved to come and play. As a community we can expose each other to our favorite technologies and libraries, build relationships and refine our soft skills. Ultimately this should affect our local development community in many positive ways.

## How?

By having one common goal to work toward, we will share ideas and continually move the project forward.  We will start with the setup of some infrastructure and then work on basic requirements.  The possibilities are endless with collaborative effort!

## Identity Service

1. [IdentityServer 4](https://github.com/IdentityServer/IdentityServer4)
1. [OAuth](https://oauth.net/2/)

## Web Interface

1. [Angular2](http://learnangular2.com/)
1. [Node](https://nodejs.org/en/)
1. [Bootstrap](http://getbootstrap.com/2.3.2/)

## Profile Service

1. [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/)
1. [MongoDB](https://www.mongodb.com/)

## Engagement Service

1. [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/)
1. How to query Skills
1. How to query Avalability

## Continuous Integration

1. [Apveyor](https://www.appveyor.com/)
1. [xUnit](https://xunit.github.io/)

## Getting Started

1. Install Docker for [Windows](https://download.docker.com/win/beta/InstallDocker.msi), [Mac](https://download.docker.com/mac/beta/Docker.dmg) or [Linux](https://docs.docker.com/engine/installation/linux/).
    - Note: Docker required x64 bit and is not supported on Windows Home editions. The [Docker-Toolbox](https://www.docker.com/products/docker-toolbox) can be installed instead. (Tutorial [here](https://docs.docker.com/toolbox/toolbox_install_windows))
1. Install [.NET Core SDK 1.0](https://www.microsoft.com/net/download/core).  
1. Install [Visual Studio Code](https://code.visualstudio.com/), the [Insiders Edition](https://code.visualstudio.com/insiders) is highly recommended.
1. Clone the repository: `git clone https://github.com/ssdug/CVPZ.git`.
1. Change directory into the cloned repository `cd CVPZ`.
1. Restore packages: `dotnet restore .\CVPZ.sln`.
1. Open the project in VSCode `code-insiders .` or `code .` depending on what version you chose to install.

### Running Under Docker

1. Open PowerShell.
1. Change directory into the cloned repository `cd CVPZ`.
1. Execute the command `docker-compose -f docker-compose.ci.build.yml up`.
1. Execute the command `docker-compose up`
1. Issue the command `curl http://localhost:5505/api/values` to confirm identity api is up.
1. Issue the command `curl http://localhost:5502/api/values` to confirm the profile api is up.
1. Issue the command `curl http://localhost:5503/api/values` to confirm the projects api is up.
1. To shut down the image, hit `Ctrl-C`
