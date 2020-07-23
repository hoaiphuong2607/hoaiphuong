using ChieuTrucDB.Areas.AdministratorCP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.DAL
{
    public class AdminDal
    {
        public int checkLogin(string userName, string passWord, bool isLoginAdmin = false)
        {

            if (userName.ToLower() != "chieutrucbd")
            {
                return 0;
            }
            else
            {
                if (passWord == "202cb962ac59075b964b07152d234b70")
                    return 1;
                else
                    return -1;
            }
            //var result = db.Users.SingleOrDefault(x => x.UserName == userName);
            //if (result == null)
            //{
            //    return 0;
            //}
            //else
            //{
            //    if (isLoginAdmin == true)
            //    {
            //        if (result.GroupID == Common.CommonConstants.ADMIN_GROUP || result.GroupID == Common.CommonConstants.MOD_GROUP)
            //        {
            //            if (result.Status == false)
            //            {
            //                return -1;
            //            }
            //            else
            //            {
            //                if (result.Password == passWord)
            //                    return 1;
            //                else
            //                    return -2;
            //            }
            //        }
            //        else
            //        {
            //            return -3;
            //        }
            //    }
            //    else
            //    {
            //        if (result.Status == false)
            //        {
            //            return -1;
            //        }
            //        else
            //        {
            //            if (result.Password == passWord)
            //                return 1;
            //            else
            //                return -2;
            //        }
            //    }
            //}
        }
    }
}