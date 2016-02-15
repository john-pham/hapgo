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
    public class MaintenanceController : Controller
    {
        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            return await Task.FromResult(PartialView());
        }

        [HttpPost]
        public async Task<JsonResult> Search()
        {
            using (var svc = new Services.DataProvider("maintenance"))
            {
                var list = await svc.Get<IList<Models.Maintenance>>();

                return Json(list);
            }
        }

        [HttpPost]
        public async Task<JsonResult> Create(Models.MaintenanceMode mode)
        {
            var from = DateTime.Now;
            var to = from.AddMinutes(15);

            using (var svc = new Services.DataProvider("maintenance", new Dictionary<string, object> {
                { "mode", (byte)mode }
            }))
            {
                return Json(await svc.Post<bool>());
            }

            //using (var svc = new Services.DataProvider("maintenance"))
            //{
            //    return Json(await svc.Post<bool>(new
            //    {
            //        from = from,
            //        to = to
            //    }));
            //}
        }
    }
}
