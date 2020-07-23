using System.Collections.Generic;
using ChieuTrucDB.Models;

namespace ChieuTrucDB.Areas.UM.Models
{
    public class AddSanPhamViewModel
    {
        public SanPham SanPham { get; set; }
        public List<string> HinhAnhs { get; set; }
    }
}