using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace Identity.api.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client {
                    ClientId = "angular_spa",
                    ClientName = "Angular 4 Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = new List<string> {
                        "openid",
                        "profile",
                        "cv.profile",
                        "cv.project"
                    },

                    // secret for authentication
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    RedirectUris = new List<string> {
                        "http://localhost:4200/auth-callback",
                        "http://localhost:5000/auth-callback" },
                    PostLogoutRedirectUris = new List<string> {
                        "http://localhost:4200/",
                        "http://localhost:5000/" },
                    AllowedCorsOrigins = new List<string> {
                        "http://localhost:4200",
                        "http://localhost:5000",
                        "http://localhost:5002",
                        "http://localhost:5003",
                        "http://profile.api",
                        "http://project.api" },
                    AllowAccessTokensViaBrowser = true
                },
            };
        }
    }
}