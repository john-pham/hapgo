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
    public class OverviewController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        // GET: /<controller>/
        public async Task<IActionResult> Dashboard()
        {
            return await Task.FromResult(PartialView());
        }

        [HttpPost]
        public async Task<JsonResult> Search(Guid agentId)
        {
            return Json(await this.command(agentId));
        }

        [HttpPost]
        public async Task<JsonResult> GetAssets()
        {
            using (var svc = new Services.DataProvider("report/assets"))
            {
                var item = await svc.Get<Models.RejectionCounter>();

                return Json(item);
            }
        }

        private async Task<Models.RejectionRate> command(Guid agentId)
        {
            using (var svc = new Services.DataProvider("report", new Dictionary<string, object> { { "id", agentId } }))
            {
                var item = await svc.Get<Models.RejectionRate>();
                item.ID = agentId;

                return item;
            }
        }
    }
}
