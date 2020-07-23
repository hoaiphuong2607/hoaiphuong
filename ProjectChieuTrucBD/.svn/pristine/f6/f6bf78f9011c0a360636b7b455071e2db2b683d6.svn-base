using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public partial class HoaDon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdHoaDon { get; set; }

        public long IdKhachHang { get; set; }

        public DateTime? NgayDat { get; set; }

        public decimal TongTien { get; set; }

        public DateTime? NgayXacNhan { get; set; }

        public string TenKhachHang { get; set; }

        public string DienThoai { get; set; }

        public string DiaChi { get; set; }

        public string HTThanhToan { get; set; }

        public string HTGiaoHang { get; set; }

        public bool TrangThai { get; set; }
    }
}