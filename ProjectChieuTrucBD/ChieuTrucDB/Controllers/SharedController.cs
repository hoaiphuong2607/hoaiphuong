using ChieuTrucDB.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.Models;

namespace ChieuTrucDB.Controllers
{
    public class SharedController : Controller
    {
        SharedDAL _dao = new SharedDAL();
        public ActionResult SendContact(Contact data)
        {
            var kq = _dao.SendContact(data);
            return Json(new { Error = kq });
        }
        public ActionResult GetAllThongTinDoanhNghiep()
        {
            var data = _dao.GetAllThongTinDoanhNghiep();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllQuyenLoi()
        {
            var data = _dao.GetAllQuyenLoi();
            return Json(new { jsData = data });
        }
        public ActionResult GetDanhMucSanPhamNavigation()
        {
            var data = _dao.GetAllDanhMucSanPham(true);
            return Json(new { jsData = data });
        }
        public ActionResult GetDanhMucHeThongNavigation()
        {
            var data = _dao.GetAllDMHeThong(true);
            return Json(new { jsData = data });
        }
        public ActionResult GetAllDMHeThong()
        {
            var data = _dao.GetAllDMHeThong();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllQuestion()
        {
            var data = _dao.GetAllQuestion();
            return Json(new { jsData = data });
        }

        public ActionResult GetAllLoyalCustomers()
        {
            var data = _dao.GetAllLoyalCustomers();
            return Json(new { jsData = data }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetAllNPP()
        {
            var data = _dao.GetAllNPP();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllCenter()
        {
            var data = _dao.GetAllCenter();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllSanPham(string DMSanPham)
        {
            var data = _dao.GetAllSanPham(DMSanPham);
            return Json(new { jsData = data });
        }
        public ActionResult GetAllContactInfo()
        {
            var data = _dao.GetAllContactInfo();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllContacts()
        {
            var data = _dao.GetAllContacts();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllDanhMucSanPham()
        {
            var data = _dao.GetAllDanhMucSanPham();
            return Json(new { jsData = data });
        }
        public ActionResult GetAllTrungTamBH()
        {
            var data = _dao.GetAllTrungTamBH(true);
            return Json(new { jsData = data });
        }
        public JsonResult ConvertTenSanPham(string pid)
        {
            var data = _dao.ConvertTenSanPham(pid);
            return Json(new { jsData = data }, JsonRequestBehavior.AllowGet);
        }
    }
}