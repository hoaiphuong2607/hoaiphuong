﻿using ChieuTrucDB.DAL;
using ChieuTrucDB.Models;
using System.Web.Mvc;
using ChieuTrucDB.Areas.UM.Models;

namespace ChieuTrucDB.Areas.UM.Controllers
{
    public class DataController : BaseController
    {
        #region
        public readonly ProductDAL productDal = new ProductDAL();
        public readonly ProductCategoryDAL productCategoryDal = new ProductCategoryDAL();
        #endregion
        public ActionResult GetChinhSachBH()
        {
            var data = productDal.GetChinhSachBH();
            return Json(new { jsData = data });
        }
        public ActionResult GetOneSanPhamById(long id)
        {
            var data = productDal.GetOneSanPhamById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneContactById(long id)
        {
            var data = productDal.GetOneContactById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneDMHeThongById(string id)
        {
            var data = productDal.GetOneDMHeThongById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneCenterById(long id)
        {
            var data = productDal.GetOneCenterById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneContactInfoById(long id)
        {
            var data = productDal.GetOneContactInfoById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneDMSanPhamById(string id)
        {
            var data = productCategoryDal.GetOneDMSanPhamById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneQuestionById(long id)
        {
            var data = productCategoryDal.GetOneQuestionById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneQuyenLoiById(long id)
        {
            var data = productCategoryDal.GetOneQuyenLoiById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneNPPById(long id)
        {
            var data = productCategoryDal.GetOneNPPById(id);
            return Json(new { jsData = data });
        }
        public ActionResult GetOneThongTinDNById(long id)
        {
            var data = productCategoryDal.GetOneThongTinDNById(id);
            return Json(new { jsData = data });
        }
        [ValidateInput(false)]
        public ActionResult AddSanPham(AddSanPhamViewModel data)
        {
            var kq = productDal.Add(data);
            return Json(new { Error = kq });
        }
        [ValidateInput(false)]
        public ActionResult AddQuestion(CauHoi data)
        {
            var kq = productCategoryDal.AddQuestion(data);
            return Json(new { Error = kq });
        }

        // bắt đầu khách hàng thân thiết
        public ActionResult GetLoyalCustomerById(long id)
        {
            var data = productCategoryDal.GetLoyalCustomerById(id);
            return Json(new { jsData = data });
        }

        public JsonResult DeleteLoyalCustomerById(long id)
        {
            var deleted = productCategoryDal.DeleteLoyalCustomerById(id);
            if (deleted)
            {
                return Json(new { status = true });
            }
            return Json(new { status = false });
        }


        public ActionResult AddLoyalCustomer(KhachHangThanThiet data)
        {
            var kq = productCategoryDal.AddLoyalCustomer(data);
            return Json(new { Error = kq });
        }

        public ActionResult EditLoyalCustomer(KhachHangThanThiet data)
        {
            var kq = productCategoryDal.EditLoyalCustomer(data);
            return Json(new { Error = kq });
        }
        // kết thúc khách hàng thân thiết
        public ActionResult AddNPP(Distributor data)
        {
            var kq = productCategoryDal.AddNPP(data);
            return Json(new { Error = kq });
        }
        public ActionResult AddDMHeThong(DanhMucHeThong data)
        {
            var kq = productCategoryDal.AddDMHeThong(data);
            return Json(new { Error = kq });
        }
        public ActionResult AddCenter(MaintCenter data)
        {
            var kq = productCategoryDal.AddCenter(data);
            return Json(new { Error = kq });
        }
        [ValidateInput(false)]
        public ActionResult UpdateQuestion(CauHoi data)
        {
            var kq = productCategoryDal.UpdateQuestion(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateQuyenLoi(QuyenLoi data)
        {
            var kq = productCategoryDal.UpdateQuyenLoi(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateNPP(Distributor data)
        {
            var kq = productCategoryDal.UpdateNPP(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateDMHeThong(DanhMucHeThong data)
        {
            var kq = productCategoryDal.UpdateDMHeThong(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateCenter(MaintCenter data)
        {
            var kq = productCategoryDal.UpdateCenter(data);
            return Json(new { Error = kq });
        }
        [ValidateInput(false)]
        public ActionResult UpdateChinhSachBH(ChinhSachBH data)
        {
            var kq = productCategoryDal.UpdateChinhSachBH(data);
            return Json(new { Error = kq });
        }
        public ActionResult ReplyContact(ReplyContactViewModel data)
        {
            var kq = productDal.ReplyContact(data);
            return Json(new { Error = kq });
        }
        public ActionResult AddContactInfo(ContactInfo data)
        {
            var kq = productDal.AddContactInfo(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateContactInfo(ContactInfo data)
        {
            var kq = productDal.UpdateContactInfo(data);
            return Json(new { Error = kq });
        }
        public ActionResult AddDMSanPham(DMSanPham data)
        {
            var kq = productCategoryDal.Add(data);
            return Json(new { Error = kq });
        }
        [ValidateInput(false)]
        public ActionResult UpdateSanPham(AddSanPhamViewModel data)
        {
            var kq = productDal.Update(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateThongTinDN(ThongTinDN data)
        {
            var kq = productDal.UpdateThongTinDN(data);
            return Json(new { Error = kq });
        }
        public ActionResult UpdateDMSanPham(DMSanPham data)
        {
            var kq = productCategoryDal.Update(data);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteSanPham(long id)
        {
            var kq = productDal.Delete(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteQuestion(long id)
        {
            var kq = productCategoryDal.DeleteQuestion(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteNPP(long id)
        {
            var kq = productCategoryDal.DeleteNPP(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteDMHeThong(string id)
        {
            var kq = productCategoryDal.DeleteDMHeThong(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteCenter(long id)
        {
            var kq = productCategoryDal.DeleteCenter(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteContacts(long id)
        {
            var kq = productDal.DeleteContacts(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteContactInfo(long id)
        {
            var kq = productDal.DeleteContactInfo(id);
            return Json(new { Error = kq });
        }
        public ActionResult DeleteDMSanPham(string id)
        {
            var kq = productCategoryDal.Delete(id);
            return Json(new { Error = kq });
        }
        [HttpPost]
        public JsonResult ChangeStatusContacts(long id)
        {
            var result = productDal.ChangeStatusContacts(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusCenter(long id)
        {
            var result = productDal.ChangeStatusCenter(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusQuestion(long id)
        {
            var result = productDal.ChangeStatusQuestion(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusQuyenLoi(long id)
        {
            var result = productDal.ChangeStatusQuyenLoi(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusNPP(long id)
        {
            var result = productDal.ChangeStatusNPP(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusDMHeThong(string id)
        {
            var result = productDal.ChangeStatusDMHeThong(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusSanPham(long id)
        {
            var result = productDal.ChangeStatus(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusContactInfo(long id)
        {
            var result = productDal.ChangeStatusContactInfo(id);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult ChangeStatusDMSanPham(string id)
        {
            var result = productCategoryDal.ChangeStatus(id);
            return Json(new
            {
                status = result
            });
        }
    }
}