using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ChieuTrucDB.Models;
namespace ChieuTrucDB.ViewModel
{
    public class ProductDetail
    {
        public SanPham SanPham { get; set; }
        public DMSanPham DMSanPham { get; set; }
        public List<SanPham> SanPhamLienQuan { get; set; }
        public List<HinhAnhSanPham> HinhAnhs { get; set; }
    }
}