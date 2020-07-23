using System.Web.Mvc;
using ChieuTrucDB.DAL;
using ChieuTrucDB.ViewModel;

namespace ChieuTrucDB.Controllers
{
    public class DistributeController : Controller
    {
        public ActionResult List(string maDanhMuc)
        {
            var data = new ProductDAL().GetAllNPPByDanhMuc("");
            if (!string.IsNullOrEmpty(maDanhMuc))
            {
                data = new ProductDAL().GetAllNPPByDanhMuc(maDanhMuc);
                if (data == null)
                    return HttpNotFound();
            }
            ViewBag.Title = string.IsNullOrEmpty(maDanhMuc) ? "Hệ thống phân phối chiếu trúc Bình Dương" : new ProductCategoryDAL().GetDMHTByMaDM(maDanhMuc).TenDanhMucHeThong;
            return View(data);
        }
        public ActionResult Detail(string metaTitle, long? idSanPham)
        {
            ProductDetail vm = new ProductDetail();
            if (string.IsNullOrEmpty(metaTitle) || idSanPham == null)
            {
                return HttpNotFound();
            }
            var data = new ProductDAL().GetDetailOfProduct(metaTitle, idSanPham);
            if (data != null)
                return View(data);
            else
                return HttpNotFound();
        }
    }
}