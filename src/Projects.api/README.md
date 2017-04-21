# Projects.api

Intended to persist project information including description, accomplishments, client, and technologies.

- [.Net Core Api](https://docs.microsoft.com/en-us/dotnet/core/api/) service
- Hosted in [Docker](https://www.docker.com/) in a container named **cvpz/Projects.api** on port *5503*
- Communicating with **Identity.api** for Security Token
- Unit tested with [xUnit](https://xunit.github.io/) project in the `cvpz\tests\services\` folder
- Persisting data in the document database [Postgress](https://www.postgresql.org/)
