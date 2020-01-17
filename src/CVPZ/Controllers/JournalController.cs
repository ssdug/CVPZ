using CVPZ.Application;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CVPZ.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JournalController : ControllerBase
    {
        private readonly IMediator _mediator;

        public JournalController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<string> Create(CreateJournalEntry request)
        {
            return await _mediator.Send(request);
        }
    }
}
