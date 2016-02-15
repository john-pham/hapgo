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
    public class BookmakerController : Controller
    {
        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            return await Task.FromResult(PartialView());
        }

        [HttpPost]
        public async Task<JsonResult> Search()
        {
            using (var svc = new Services.DataProvider("bookmaker"))
            {
                var list = await svc.Get<IList<Models.Bookmaker>>();

                return Json(list);
            }
        }

        [HttpPost]
        public async Task<JsonResult> Update(Guid id, string url)
        {
            using (var svc = new Services.DataProvider("bookmaker", new Dictionary<string, object> {
                { "id", id },
                { "url", url}
            }))
            {
                return Json(await svc.Put<bool>());
            }
        }
    }
}
