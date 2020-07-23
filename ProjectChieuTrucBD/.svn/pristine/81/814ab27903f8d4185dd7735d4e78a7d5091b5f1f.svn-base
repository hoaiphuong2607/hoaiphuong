using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.DAL;

namespace ChieuTrucDB.Controllers
{
    public class LayoutController : Controller
    {
        // GET: SanPham
        public ActionResult Navigation()
        {
            return PartialView();
        }
        public ActionResult Foot()
        {
            ViewBag.DanhMucSP = new SharedDAL().GetDanhMucSPNavigation();
            ViewBag.DanhMucHT = new SharedDAL().GetDanhMucHTNavigation();
            ViewBag.Info = new ProductDAL().GetContacInfo();
            ViewBag.QuyenLoi = new SharedDAL().GetUuDiem();
            return PartialView();
        }
    }
}