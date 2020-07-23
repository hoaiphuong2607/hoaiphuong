using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChieuTrucDB.DAO;
using ChieuTrucDB.Models;
using System.Data.Entity;
using System.Net;
using PagedList;
using ChieuTrucDB.DAL
    ;
namespace ChieuTrucDB.Controllers
{
    public class HomeController : Controller
    {
        private DatabaseContext db = new DatabaseContext();
        public ActionResult Index()
        {
            ViewBag.Info = new ProductDAL().GetContacInfo();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult CourseCategories()
        {
            var courseCat = from cat in db.Categories select cat;
            return PartialView(courseCat);
        }
        
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Product product = db.Products.Find(id);
            Product product = db.Products.Include(p => p.category).Where(p => p.id == id).FirstOrDefault();
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }
        public ActionResult GanSanPham()
        {
            var courseCatss = from cats in db.Categories select cats;
            return PartialView(courseCatss);
        }
        public ActionResult HuongDanSuDung()
        {
            return View();
        }
        public ActionResult TTBaoHanh()
        {
            return View();
        }
        public ActionResult DKBaoHanh()
        {
            return View();
        }
        public class AboutController : Controller
        {
            // GET: About
            public ActionResult About()
            {
                return View();
            }
        }
        public ActionResult SpLienQ(int? Page_No, int Size_Of_Page = 4)
        {
            int Number_Of_Page = (Page_No ?? 1);
            var products = db.Products.Include(p => p.category).OrderBy(p => p.id).ToPagedList(Number_Of_Page, Size_Of_Page);
            return View(db.Products);
        }

    }
}