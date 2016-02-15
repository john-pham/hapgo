using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Filters;
using System.Security.Claims;

namespace Hapgo.Web.Monitoring.Controllers
{
    public class HomeController : Controller
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if (User.IsSignedIn())
            {
                context.Result = RedirectToAction("Index", "Delivery", new { area = "Events" });
            }
            else
            {
                base.OnActionExecuted(context);
            }
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return PartialView();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return PartialView();
        }

        public IActionResult Delivery()
        {
            return PartialView();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
