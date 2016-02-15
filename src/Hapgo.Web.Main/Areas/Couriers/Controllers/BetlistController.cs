using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc.Filters;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Hapgo.Web.Monitoring.Areas.Events.Controllers
{
    [Area("Couriers")]
    [Authorize]
    public class BetlistController : Controller
    {
        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            return await Task.FromResult(PartialView());
        }

        [HttpPost]
        public async Task<JsonResult> Search(DateTime? date, int page = 0, int size = 8)
        {
            using (var svc = new Services.DataProvider("betlist", new Dictionary<string, object> {
                { "page", page },
                { "size", size }
            }))
            {
                var list = await svc.Get<Models.Pagination<Models.Event>>();

                return Json(list);
            }
        }
    }
}
