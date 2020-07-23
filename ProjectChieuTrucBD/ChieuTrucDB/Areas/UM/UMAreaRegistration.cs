using System.Web.Mvc;

namespace ChieuTrucDB.Areas.UM
{
    public class UMAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "UM";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Admin_login",
                "dang-nhap",
                new { controller = "Admin", action = "Login", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "Admin_dashboard",
                "quan-ly",
                new { controller = "Admin", action = "Homepage", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "UM_default",
                "UM/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}