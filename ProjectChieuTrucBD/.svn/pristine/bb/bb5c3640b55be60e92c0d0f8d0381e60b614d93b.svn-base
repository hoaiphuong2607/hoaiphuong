
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
using System.Data;

namespace ChieuTrucDB.Controllers
{
    public class KhachHangThanThietController : Controller
    {
        DatabaseContext db = new DatabaseContext();
        // GET: KhachHangThanThiet
      
        


        [HttpPost]
        public ActionResult MailKhachHang(FormCollection f, int? page)
        {

          

            string Email = f["txtMail"].ToString();
            List<object> lst = new List<object>();
            lst.Add(Email);
            object[] allistem = lst.ToArray();
            int datamail =  db.Database.ExecuteSqlCommand("insert into KhachHangThanThiets(Email) values(@p0)", allistem);
            List<SanPham> lstKQTK = db.SanPhams.Where(n => n.TenSanPham==Email).ToList();
            TempData["msg"] = "<script>alert('Mail đã được lưu, xin cảm ơn quý khách');</script>";
            

            return RedirectToAction("Index", "Home");
        }

    }
}

