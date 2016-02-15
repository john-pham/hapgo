using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Hapgo.Web.Monitoring.Areas.Events.Controllers
{
    [Area("Couriers")]
    [Authorize]
    public class AgentController : Controller
    {
        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            return await Task.FromResult(PartialView());
        }

        [HttpPost]
        public async Task<JsonResult> Search()
        {
            using (var svc = new Services.DataProvider("agent"))
            {
                var list = await svc.Get<IList<Models.Agent>>();

                return Json(list);
            }
        }
    }
}
