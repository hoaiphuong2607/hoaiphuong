using System.Globalization;
using System.Threading;
using System.Web.Mvc;
using System.Web.Routing;

namespace ChieuTrucDB.Areas.AdministratorCP.Controllers
{
    public class BaseController : Controller
    {
        //tạo controller con kế thừa lớp Controller để tạo đường dẫn thẳng đến Index của Login trong area Admin. Quá tuyệt vời :D
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var session = Session[COMMON.CommonConstants.USER_SESSION];
            if (session==null)
            {
                filterContext.Result = new RedirectToRouteResult(
                    new RouteValueDictionary(new { controller = "Admin", action = "Login", Area = "AdministratorCP" }));
            }
            base.OnActionExecuting(filterContext);
        }
    }
}