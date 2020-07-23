using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.Models;
using ChieuTrucDB.Areas.UM.Models;
using ChieuTrucDB.Helpers;
using System.Collections.Generic;
using ChieuTrucDB.ViewModel;
using System.Dynamic;
namespace ChieuTrucDB.Controllers
{
    public class TimKiemController : Controller
    {

        DatabaseContext db = new DatabaseContext();


        [HttpPost]
        public ActionResult KetQuaTimKiem(FormCollection f, int? page)
        {
            string sTuKhoa = f["txtTimKiem"].ToString();
            List<SanPham> lstKQTK = db.SanPhams.Where(n => n.TenSanPham.Contains(sTuKhoa)).ToList();
            ViewBag.TuKhoa = sTuKhoa;
            //Phân trang
           
            if (lstKQTK.Count == 0)
            {
                ViewBag.ThongBao = "Không tìm thấy sản phẩm nào";
                return View(db.SanPhams.OrderBy(n => n.TenSanPham).ToList());
            }
            ViewBag.ThongBao = "Đã tìm thấy <b style=\"color:red;\">" + lstKQTK.Count + "</b> kết quả";
            return View(lstKQTK.OrderBy(n => n.TenSanPham).ToList());
        }
        [HttpGet]
        public ActionResult KetQuaTimKiem(int? page, string sTuKhoa)
        {
            ViewBag.TuKhoa = sTuKhoa;
            List<SanPham> lstKQTK = db.SanPhams.Where(n => n.TenSanPham.Contains(sTuKhoa)).ToList();
            //Phân trang
            int pageNumber = (page ?? 1);
            int pageSize = 3;
            if (lstKQTK.Count == 0)
            {
                ViewBag.ThongBao = "Không tìm thấy sản phẩm nào";
                return View(db.SanPhams.OrderBy(n => n.TenSanPham).ToList());
            }
            ViewBag.ThongBao = "Đã tìm thấy <b style=\"color:red;\">" + lstKQTK.Count + "</b> kết quả";
            return View(lstKQTK.OrderBy(n => n.TenSanPham).ToList());
        }
    }
}