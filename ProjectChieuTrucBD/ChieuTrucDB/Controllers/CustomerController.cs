using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.DAL;

namespace ChieuTrucDB.Controllers
{
    public class CustomerController : Controller
    {
        // GET: SanPham
        public ActionResult FAQ()
        {
            var data = new ProductDAL().GetAllCauHoi();
            return View(data);
        }
        public ActionResult Contact()
        {
            var data = new ProductDAL().GetContacInfo();
            return View(data);
        }
        public ActionResult Maintenance()
        {
            var data = new ProductDAL().GetAllChinhSachBH();
            return View(data);
        }
        public ActionResult MaintenanceCenter()
        {
            //var data = new ProductDAL().GetAllActiveCenter();
            //return View(data);
            return View();
        }

        public ActionResult AboutUs()
        {
            var data = new ProductDAL().GetAllThongTinDN();
            return View(data);
        }
    }
}