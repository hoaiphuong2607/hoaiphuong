using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ChieuTrucDB
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "giỏ hàng",
                url: "gio-hang/{id}",
                defaults: new { controller = "SanPham", action = "Cart", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "chinh sach bao hanh",
                url: "chinh-sach-bao-hanh",
                defaults: new { controller = "Customer", action = "Maintenance", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "trung tam bao hanh",
                url: "trung-tam-bao-hanh",
                defaults: new { controller = "Customer", action = "MaintenanceCenter", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "huong dan su dung",
                url: "huong-dan-su-dung",
                defaults: new { controller = "Customer", action = "FAQ", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "contact",
                url: "lien-he",
                defaults: new { controller = "Customer", action = "Contact", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "about us",
                url: "ve-chung-toi",
                defaults: new { controller = "Customer", action = "AboutUs", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "product detail",
                url: "san-pham/{metaTitle}-{idSanPham}",
                defaults: new { controller = "SanPham", action = "Detail", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "category distribute",
                url: "he-thong/{maDanhMuc}",
                defaults: new { controller = "Distribute", action = "List", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
               name: "distribute all",
               url: "he-thong",
               defaults: new { controller = "Distribute", action = "List", id = UrlParameter.Optional },
               namespaces: new[] { "ChieuTrucBD.Controllers" }
           );

            routes.MapRoute(
                name: "category product",
                url: "danh-muc/{metaTitle}",
                defaults: new { controller = "SanPham", action = "List", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
               name: "category all",
               url: "danh-muc",
               defaults: new { controller = "SanPham", action = "List", id = UrlParameter.Optional },
               namespaces: new[] { "ChieuTrucBD.Controllers" }
           );

            routes.MapRoute(
                name: "Default2",
                url: "trang-chu",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "ChieuTrucBD.Controllers" }
            );
        }
    }
}
