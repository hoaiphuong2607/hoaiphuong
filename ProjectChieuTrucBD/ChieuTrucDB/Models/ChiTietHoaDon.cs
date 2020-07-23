using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class ChiTietHoaDon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; set; }
        public long IdHoaDon { get; set; }

        public long IdSanPham { get; set; }

        public string TenSanPham { get; set; }

        public int SoLuong { get; set; }

        public decimal GiaTien { get; set; }

        public decimal ThanhTien { get; set; }
    }
}