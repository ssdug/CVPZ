# Profile.api

Intended to persist individual user profile data.

- [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/) service
- Hosted in [Docker](https://www.docker.com/) in a container named **cvpz/Profile.api** on port *5502*
- Communicating with **Identity.api** for Security Token
- Unit tested with [xUnit](https://xunit.github.io/) project in the `cvpz\tests\services\` folder
- Persisting data in the document database [MongoDB](https://www.mongodb.com/)
