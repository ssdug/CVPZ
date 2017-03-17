# CVPZ [![Build status](https://ci.appveyor.com/api/projects/status/m9msqx3io0btxx28?svg=true)](https://ci.appveyor.com/project/McLeopold/cvpz)

CV for [Curriculum Vitae](https://en.wikipedia.org/wiki/Curriculum_vitae) is a written overview of a person's experience and other qualifications for a job opportunity.

PZ 'cause it sounds easy.

## What?

As consultants we are constantly needing to keep up our resumes updated with every engagement and the details of accomplishments. This isn't a terrible task as many of us have a git repository that holds and versions our resume well. Working in many contracts with local government poses a number of different time consuming tasks manually querying resume information to fill out matrix and other forms. The thought came to build a simple tool that can host this information in a format that allows us to automate this. Another benefit to this could be for consulting companies. For the small consulting shop it could be used to rapidly search consultants skills even availability for up coming contracts. 

## Why?

We have hoping to inspsire community involvement by building a simple and useful tool. We want to inspire anyone who wants to be involved to come and play. As a community we can expose eachother to our favorite technologies and libraries. We can build relationship and refine our soft skills. Hopefully affecting our local development community in a positive way. 

## How?

Well that is what we are working to figure out. We will work to set some basic requirements. We are starting with the setup of some infrastructure. We want to use a newer fun technology stack with things that people have the desire to learn and will be usefull for the direction we see the local contracts going.

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
1. Clone the repository: `git clone https://github.com/SouthSoundDevelopers/CVPZ.git`.
1. Change directory into the cloned repository `cd CVPZ`.
1. Restore Submodules `git submodule update --init --recursive`.
1. Restore packages: `dotnet restore .\CVPZ.sln`.
1. Open the project in VSCode `code-insiders .` or `code .` depending on what version you chose to install.
