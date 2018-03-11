// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using Identity.api.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using IdentityServer4.Quickstart.UI;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using IdentityServer4.Configuration;
using IdentityServer4.EntityFramework.DbContexts;
using System.Linq;
using IdentityServer4.EntityFramework.Mappers;
using Microsoft.AspNetCore.Hosting;

namespace Identity.api
{
    public class Startup
    {

        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            string connectionString = Configuration.GetConnectionString("IdentityServer");
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;


            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddIdentityServer(options =>
                {
                    options.Events.RaiseSuccessEvents = true;
                    options.Events.RaiseFailureEvents = true;
                    options.Events.RaiseErrorEvents = true;
                    options.IssuerUri = "http://identity.api";
                })
                .AddInMemoryClients(Identity.api.Configuration.Clients.Get())
                .AddInMemoryIdentityResources(Identity.api.Configuration.Resources.GetIdentityResources())
                .AddInMemoryApiResources(Identity.api.Configuration.Resources.GetApiResources())
                .AddDeveloperSigningCredential()
                .AddExtensionGrantValidator<Extensions.ExtensionGrantValidator>()
                .AddExtensionGrantValidator<Extensions.NoSubjectExtensionGrantValidator>()
                .AddJwtBearerClientAuthentication()
                .AddAppAuthRedirectUriValidator()
                .AddTestUsers(Identity.api.Configuration.TestUsers.Get());

            //services.AddExternalIdentityProviders();

            return services.BuildServiceProvider(validateScopes: true);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseDeveloperExceptionPage();

            app.UseIdentityServer();
            app.UseCors("CorsPolicy");
            
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
