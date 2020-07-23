using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class DanhMucHeThong
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string MaDanhMucHeThong { get; set; }

        [Index("UQ_DanhMucHeThong_TenDanhMucHeThong", IsUnique = true)]
        [Required(ErrorMessage = "Chưa nhập danh mục hệ thống")]
        [StringLength(200)]
        public string TenDanhMucHeThong { get; set; }

        public string MoTa { get; set; }

        public string UrlHinhAnh { get; set; }

        [Display(Name = "Ngày tạo")]
        public DateTime? NgayTao { get; set; }

        [Display(Name = "Người tạo")]
        public string NguoiTao { get; set; }

        [Display(Name = "Ngày sửa")]
        public DateTime? NgaySua { get; set; }

        [Display(Name = "Người sửa")]
        public string NguoiSua { get; set; }

        [Required]
        [Display(Name = "Trạng thái")]
        public bool TrangThai { get; set; }
    }
}