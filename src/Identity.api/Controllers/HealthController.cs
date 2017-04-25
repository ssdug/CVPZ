using Microsoft.AspNetCore.Mvc;

namespace Identity.api.Controllers
{
    [Route("api/[controller]")]
    public class HealthController : Controller
    {
        [HttpGet("ping")]
        public IActionResult Ping()
        {
            return Ok("pong");
        }

        [HttpGet("check")]
        public IActionResult Check()
        {
            return Ok("i am healthy");
        }

        [HttpGet("whoami")]
        public IActionResult Who()
        {
            return Ok("you");
        }
    }
}