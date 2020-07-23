using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.DAL;

namespace ChieuTrucDB.Areas.UM.Controllers
{
    public class SystemController : BaseController
    {
        public ActionResult ThongTinDN()
        {
            return View();
        }
        public ActionResult ThongTinLienHe()
        {
            return View();
        }
        public ActionResult QuyenLoi()
        {
            return View();
        }
        public ActionResult ChinhSachBH()
        {
            var data = new ProductDAL().GetAllChinhSachBH();
            return View(data);
        }
        public ActionResult TrungTamBH()
        {
            var data = new ProductDAL().GetAllChinhSachBH();
            return View(data);
        }
    }
}