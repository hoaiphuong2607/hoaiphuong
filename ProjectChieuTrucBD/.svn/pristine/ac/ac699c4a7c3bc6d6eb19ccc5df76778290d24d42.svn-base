using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class SanPham
    {
        public SanPham()
        {
            TrangThai = true;
            Deleted = false;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdSanPham { get; set; }

        public string MaSanPham { get; set; }

        [Index("UQ_SanPham_TenSanPham", IsUnique = true)]
        [StringLength(450)]
        public string TenSanPham { get; set; }

        public string HinhAnh { get; set; }

        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string MoTa { get; set; }
        public string Tags { get; set; }

        public string MaDanhMucSanPham { get; set; }
        [ForeignKey("MaDanhMucSanPham")]
        public virtual DMSanPham DMSanPham { get; set; }

        public decimal? GiaTien { get; set; }

        public decimal? SoLuong { get; set; }

        public DateTime? NgayTao { get; set; }
        public string NguoiTao { get; set; }

        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }

        public bool TrangThai { get; set; }

        public bool Deleted { get; set; }

        public string OutOfStock { get; set; }
    }
}