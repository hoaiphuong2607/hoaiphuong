using ChieuTrucDB.Areas.AdministratorCP.Models;
using ChieuTrucDB.COMMON;
using ChieuTrucDB.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ChieuTrucDB.Areas.UM.Controllers
{
    public class AdminController : Controller
    {
        // GET: AdministratorCP/Admin
        [HttpGet]
        public ActionResult Login()
        {
            if (Session[CommonConstants.USER_SESSION] != null)
            {
                return RedirectToAction("Homepage", "Admin");
            }
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(AdminLogin user)
        {
            if (ModelState.IsValid)
            {
                int result = new AdminDal().checkLogin(user.Username, Encryptor.MD5Hash(user.Password), true);
                if (result == 1)
                {
                    Session.Add(CommonConstants.USER_SESSION, user.Username);
                    new SharedDAL().ReturnToHomepage();
                    return RedirectToAction("Homepage", "Admin");
                }
                else if (result == 0)
                {
                    ModelState.AddModelError("", "Tài khoản không tồn tại.");
                }
                else if (result == -1)
                {
                    ModelState.AddModelError("", "Sai mật khẩu.");
                }
                else
                {
                    ModelState.AddModelError("", "Đăng nhập không đúng.");
                }
            }
            new SharedDAL().ReturnToHomepage();
            return View(user);
        }
        public ActionResult Logout()
        {
            Session[CommonConstants.USER_SESSION] = null;
            return RedirectToAction("Login", "Admin");
        }
        public ActionResult Homepage()
        {
            if (Session[CommonConstants.USER_SESSION] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            return View();
        }
    }
}