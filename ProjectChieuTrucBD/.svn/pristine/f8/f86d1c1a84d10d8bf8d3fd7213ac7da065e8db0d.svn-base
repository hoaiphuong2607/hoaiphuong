using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class DMSanPham
    {
        public DMSanPham()
        {
            TrangThai = true;
            Deleted = false;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string MaDanhMucSanPham { get; set; }

        [Index("UQ_DMSanPham_TenDanhMucSanPham", IsUnique = true)]
        [StringLength(450)]
        public string TenDanhMucSanPham { get; set; }

        public string HinhAnh { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string Tags { get; set; }
        public DateTime? NgayTao { get; set; }
        public string NguoiTao { get; set; }

        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }

        public bool TrangThai { get; set; }

        public bool Deleted { get; set; }
    }
}