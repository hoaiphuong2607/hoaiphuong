using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ChieuTrucDB.Areas.AdministratorCP.Controllers
{
    public class HomesController : BaseController
    {
        // GET: AdministratorCP/Home
        public ActionResult Index()
        {
            return View();
        }

    }
}