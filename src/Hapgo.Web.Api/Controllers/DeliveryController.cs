using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Hapgo.Web.Api.Controllers
{
    [Route("api/[controller]")]
    public class DeliveryController : Controller
    {
        // GET: api/Agent
        [HttpGet]
        public IEnumerable<Models.BackEnd.Delivery> Get()
        {
            var bc = new BC.BackEnd.Delivery();
            return bc.Items;
        }

        // GET api/Agent/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

    }
}
