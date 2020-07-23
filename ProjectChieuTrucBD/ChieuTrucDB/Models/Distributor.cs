using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class Distributor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdDistributor { get; set; }

        [Index("UQ_Distributor_TenNhaPhanPhoi", IsUnique = true)]
        [Display(Name = "Tên nhà phân phối *")]
        [Required(ErrorMessage = "Chưa nhập tên nhà phân phối")]
        [StringLength(200)]
        public string TenNhaPhanPhoi { get; set; }

        public string MaDanhMucHeThong { get; set; }
        [ForeignKey("MaDanhMucHeThong")]
        public virtual DanhMucHeThong DanhMucHeThong { get; set; }

        public string UrlHinhAnh { get; set; }

        public string MoTa { get; set; }

        public string DiaChi { get; set; }

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