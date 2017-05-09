# CVPZ [![Build status](https://ci.appveyor.com/api/projects/status/rwvr7jl20nw00eiu/branch/master?svg=true)](https://ci.appveyor.com/project/ssdugadmin21923/cvpz/branch/master) [![Build Status](https://travis-ci.org/ssdug/CVPZ.svg?branch=master)](https://travis-ci.org/ssdug/CVPZ) [![Join us](https://ssdug-slackin.azurewebsites.net/badge.svg)](https://ssdug-slackin.azurewebsites.net/)

![CVPZ](docs/images/buisness_cat.jpg?raw=true "CVPZ")

**CV** for [Curriculum Vitae](https://en.wikipedia.org/wiki/Curriculum_vitae) is a written overview of a person's experience and other qualifications. **PZ** 'cause it sounds easy.

## TOC

- [Who](#who), [What](#what), [Why](#why), [How](#how)
- [Getting Started](#getting-started)

  - [Running Locally from PowerShell](#running-locally-from-powershell)
  - [Running Under Docker from PowerShell](#running-under-docker-from-powershell)
  - [Running Under Docker from Visual Studio 2017](#running-under-docker-from-visual-studio-2017)

- [Architecture](#architecture)

  - [Identity Service](#identity-service)
  - [Web Interface](#web-interface)
  - [Profile Service](#profile-service)
  - [Engagement Service](#engagement-service)
  - [Continuous Integration](#continuous-integration)

- [Sponsors](#sponsors)

  - [Become a Sponsor](#become-a-sponsor)

## Who

CVPZ is a community project created by the South Sound Developers User Group ([SSDUG](http://ssdug.org)) in lovely [Olympia, WA](http://olympiawa.gov/). The group is led by [Eve Ragins](https://github.com/orgs/ssdug/people/emragins) and this project was started and led by [Carter Barnes](https://github.com/orgs/ssdug/people/CarBar).

## What

Developers continuously need to keep their resumes current, documenting every project, engagement, and various details of accomplishments.  Many have created git repositories that can store versions of these resumes well. However, as the breadth of experience expands it becomes hard to manage the growing amount of data in a single document. There are places to manage resume information, but these tools do not allow management of versions of the individual projects or the ability to query history to aid in highlighting specific experience.

## Why

We are hoping to inspire community involvement by building a simple and useful tool and to create and open space for anyone who wants to be involved to come and play. As a community we can expose each other to our favorite technologies and libraries, build relationships and refine our soft skills. Ultimately this should affect our local development community in many positive ways.

## How

By having one common goal to work toward, we will share ideas and continually move the project forward.  We will start with the setup of some infrastructure and then work on basic requirements.  The possibilities are endless with collaborative effort!

## Getting Started

1. Install Docker for [Windows](https://download.docker.com/win/beta/InstallDocker.msi), [Mac](https://download.docker.com/mac/beta/Docker.dmg) or [Linux](https://docs.docker.com/engine/installation/linux/).
    - Note: Docker required x64 bit and is not supported on Windows Home editions. The [Docker-Toolbox](https://www.docker.com/products/docker-toolbox) can be installed instead. (Tutorial [here](https://docs.docker.com/toolbox/toolbox_install_windows))
    - Further Note: It was discoved that there is a compatibility problem with CVPZ and the docker toolbox for version 17.03 and earlier.  The problem was resolved in the most recent release (17.04.0.ce).  To ensure your docker toolbox is up to date, run the command `docker version`.
1. Install [.NET Core SDK 1.1](https://www.microsoft.com/net/download/core).  
1. Install [Visual Studio Code](https://code.visualstudio.com/), the [Insiders Edition](https://code.visualstudio.com/insiders) is highly recommended.
1. Clone the repository: `git clone https://github.com/ssdug/CVPZ.git`.
1. Change directory into the cloned repository `cd CVPZ`.
1. Restore packages: `dotnet restore .\CVPZ.sln`.
1. Open the project in VSCode `code-insiders .` or `code .` depending on what version you chose to install.


### Running Locally from PowerShell

1. Open PowerShell.
1. Change directory into the cloned repository `cd CVPZ`.
1. Execute the command `scripts\local_up.ps1`.
    - This will build the project and start all services running in the background.
1. Execute the command `scripts\local_ping.ps1`
    - This will hit the `api/health/ping` endpoint on all services.
1. To shut down the image, execute the command `scripts\local_down.ps1`

### Running Under Docker from PowerShell

1. Ensure Docker for Windows is running and set to Linux containers.
1. Open PowerShell.
1. Change directory into the cloned repository `cd CVPZ`.
1. Execute the command `scripts\docker_up.ps1 -r -b`.
	- This will build the project and start all services running in the background.
1. Execute the command `scripts\local_ping.ps1`
	- This will hit the `api/health/ping` endpoint on all services.
1. To shut down the image, execute the command `scripts\docker_down.ps1`

**Note:** Docker is configured to expose ports for each service, so the local_ping scripts works for both workflows.

### Running Under Docker from Visual Studio 2017

1. Ensure Docker for Windows is running and set to Linux containers.
1. Open Visual Studio.
1. Open the `CVPZ.sln`.
1. Select either Debug or Release configuration.
1. Right click the `docker-compose` project and select debug.


## Architecture

### Identity Service

1. [IdentityServer 4](https://github.com/IdentityServer/IdentityServer4)
1. [OAuth](https://oauth.net/2/)

### Web Interface

1. [Angular2](http://learnangular2.com/)
1. [Node](https://nodejs.org/en/)
1. [Bootstrap](http://getbootstrap.com/2.3.2/)

### Profile Service

1. [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/)
1. [MongoDB](https://www.mongodb.com/)

### Engagement Service

1. [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/)
1. How to query Skills
1. How to query Avalability

### Continuous Integration

1. [Apveyor](https://www.appveyor.com/)
1. [xUnit](https://xunit.github.io/)

## Sponsors

### [CodeSmart, Inc](http://codesmartinc.com/)

Thank you to CodeSmart for providing space, pizza and beer for our initial kick off meeting.

- [CVPZ Hack Night](https://www.meetup.com/ssdevelopers/events/238255202/) - March 16th, 2017

### [Kiehl Northwest](http://kiehlnorthwest.com/)

Thank you to Kiehl for booking space, obtaining banquit license and providing pizza and beer for our second hackathon.

- [CVPZ Hackathon II](https://www.meetup.com/ssdevelopers/events/239305202/) - May 4th, 2017

### Become a Sponsor

If you or your organization are interested in sponsoring a hackathon or a user group meeting, please contact us via [Meetup](https://www.meetup.com/ssdevelopers/). Just click the contact us button.
