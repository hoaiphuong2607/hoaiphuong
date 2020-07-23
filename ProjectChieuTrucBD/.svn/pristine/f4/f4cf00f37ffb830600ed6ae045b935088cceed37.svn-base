using System.Web.Mvc;
using ChieuTrucDB.DAL;
using ChieuTrucDB.ViewModel;
using ChieuTrucDB.Models;
using System.Collections.Generic;
using System;
using System.Web.Script.Serialization;
using System.Linq;

namespace ChieuTrucDB.Controllers
{
    public class SanPhamController : Controller
    {
        DatabaseContext _db = new DatabaseContext();
        public ActionResult List(string metaTitle)
        {
            var data = new ProductDAL().GetAllSanPhamByMetaTitle("");
            if (!string.IsNullOrEmpty(metaTitle))
            {
                data = new ProductDAL().GetAllSanPhamByMetaTitle(metaTitle);
                if (data == null)
                    return HttpNotFound();
            }
            ViewBag.Title = string.IsNullOrEmpty(metaTitle) ? "Danh mục sản phẩm" : new ProductCategoryDAL().GetOneByMetaTitle(metaTitle).TenDanhMucSanPham;
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

        public PartialViewResult IconCartPartial()
        {
            var cart = Session["Cart"];
            var list = new List<Cart>();
            if (cart != null)
            {
                list = (List<Cart>)cart;
            }
            return PartialView(list);
        }
        public ActionResult Cart()
        {
            return View();
        }

        public PartialViewResult CartPartial()
        {
            var cart = Session["Cart"];
            var list = new List<Cart>();
            if (cart != null)
            {
                list = (List<Cart>)cart;
            }
            return PartialView(list);
        }

        public JsonResult AddCart(int id, int quantity)
        {
            if (Session["Cart"] == null) // Nếu giỏ hàng chưa được khởi tạo
            {
                Session["Cart"] = new List<Cart>();  // Khởi tạo Session["giohang"] là 1 List<GioHang>
            }
            List<Cart> cart = Session["Cart"] as List<Cart>;  // Gán qua biến giohang dễ code
            // Kiểm tra xem sản phẩm khách đang chọn đã có trong giỏ hàng chưa
            if (cart.Find(m => m.id == id) == null) // ko co sp nay trong gio hang
            {
                var product = new ProductDAL().getProductById(id);
                // tim sp theo MaHoa
                Cart cartItem = new Cart()
                {
                    id = id,
                    nameProduct = product.TenSanPham,
                    image = product.HinhAnh,
                    quantity = quantity,
                    price = Decimal.Parse(product.GiaTien.ToString())

                };  // Tạo ra 1 sản phẩm mới

                cart.Add(cartItem);  // Thêm sản phẩm vào giỏ 
            }
            else
            {
                // Nếu sản phẩm khách chọn đã có trong giỏ hàng thì không thêm vào giỏ nữa mà tăng số lượng lên.
                Cart carts = cart.Find(m => m.id == id);
                carts.quantity += quantity;
            }
            return Json(new { status = true });
        }

        //Cập nhật số lượng giỏ hàng
        public JsonResult Update(string CartModel)
        {
            var cart = new JavaScriptSerializer().Deserialize<List<Cart>>(CartModel);
            var session = (List<Cart>)Session["Cart"];
            foreach (var item in session)
            {
                var jsonItem = cart.SingleOrDefault(n => n.id == item.id);
                if (jsonItem != null)
                {
                    item.quantity = jsonItem.quantity;
                }
            }
            return Json(new
            {
                status = true
            });
        }

        //Xóa giỏ hàng
        public JsonResult Delete(int id)
        {
            var GioHang = (List<Cart>)Session["Cart"];
            GioHang.RemoveAll(k => k.id == id);
            return Json(new
            {
                status = true
            });
        }

        public ActionResult Order()
        {

            loadHTThanhToan();
            loadHTGiaoHang();
            return View();
        }
        [HttpPost]
        public ActionResult Order(HoaDon hoadon)
        {
            if (ModelState.IsValid)
            {
                var hoaDon = new HoaDon();
                hoaDon.TenKhachHang = hoadon.TenKhachHang;
                hoaDon.DienThoai = hoadon.DienThoai;
                hoaDon.DiaChi = hoadon.DiaChi;
                hoaDon.NgayDat = DateTime.Now.Date;
                hoaDon.HTThanhToan = hoadon.HTThanhToan;
                hoaDon.HTGiaoHang = hoadon.HTGiaoHang;
                hoaDon.TongTien = TongTien();
                hoaDon.TrangThai = false;
                try
                {
                    _db.HoaDon.Add(hoaDon);
                    _db.SaveChanges();
                    //var GioHang = (List<Cart>)Session["Cart"];
                    //foreach (var item in GioHang)
                    //{
                    //    var chiTietHoaDon = new ChiTietHoaDon();
                    //    chiTietHoaDon.IdHoaDon = hoaDon.IdHoaDon;
                    //    chiTietHoaDon.IdSanPham = item.id;
                    //    chiTietHoaDon.TenSanPham = item.nameProduct;
                    //    chiTietHoaDon.SoLuong = item.quantity;
                    //    chiTietHoaDon.GiaTien = item.price;
                    //    chiTietHoaDon.ThanhTien = item.intoMoney;
                    //    _db.ChiTietHoaDon.Add(chiTietHoaDon);
                    //    _db.SaveChanges();
                    //}
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                Session["Cart"] = null;
                return Redirect("~/trang-chu");
            }
            loadHTThanhToan();
            loadHTGiaoHang();
            return View(hoadon);
        }
        public decimal TongTien()
        {
            var ListGioHang = (List<Cart>)Session["Cart"];
            decimal Tong = 0;
            foreach (var item in ListGioHang)
            {
                Tong += item.intoMoney;
            }
            return Tong;
        }
        private void loadHTThanhToan()
        {
            List<HTThanhToan> listHTThanhToan = new List<HTThanhToan>();
            listHTThanhToan.Add(new HTThanhToan(1, "Thanh toán trước khi giao hàng"));
            listHTThanhToan.Add(new HTThanhToan(2, "Thanh toán Paypal"));
            SelectList HTTT = new SelectList(listHTThanhToan, "Name", "Name");
            ViewBag.HTTT = HTTT;
        }
        private void loadHTGiaoHang()
        {
            List<HTGiaoHang> listHTGiaoHang = new List<HTGiaoHang>();
            listHTGiaoHang.Add(new HTGiaoHang(1, "Giao trực tiếp"));
            listHTGiaoHang.Add(new HTGiaoHang(2, "Chuyển giao"));
            SelectList HTGH = new SelectList(listHTGiaoHang, "NameGH", "NameGH");
            ViewBag.HTGH = HTGH;
        }
        public PartialViewResult ViewCartInOrder()
        {
            var cart = Session["Cart"];
            var list = new List<Cart>();
            if (cart != null)
            {
                list = (List<Cart>)cart;
            }
            return PartialView(list);
        }

    }
}