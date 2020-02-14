using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Events;

namespace CVPZ
{
  public class Program
  {
    public static IConfiguration Configuration { get; private set; }

    public static int Main(string[] args)
    {
      var builder = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
        .AddEnvironmentVariables();

      if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
      {
        builder = builder.AddUserSecrets<Program>(); // Example has this added based on env.IsDevelop();
      }

      Configuration = builder.Build();

      Log.Logger = new LoggerConfiguration()
          .ReadFrom.Configuration(Configuration)
          .Enrich.FromLogContext()
          .WriteTo.Debug()
          .WriteTo.Console(
              outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
         .CreateLogger();

      try
      {
        Log.Information("Starting web host");
        CreateWebHostBuilder(args).Build().Run();
        return 0;
      }
      catch (Exception ex)
      {
        Log.Fatal(ex, "Host terminated unexpectedly");
        return 1;
      }
      finally
      {
        Log.CloseAndFlush();
      }
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .UseSerilog();
  }
}
