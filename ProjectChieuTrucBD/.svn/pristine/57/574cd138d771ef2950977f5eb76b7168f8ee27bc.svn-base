using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class ContactInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdContactInfo { get; set; }

        [Index("UQ_ContactInfo_Email", IsUnique = true)]
        [Display(Name = "Email")]
        [Required(ErrorMessage = "Chưa nhập Email!")]
        [StringLength(100, ErrorMessage = "Tối đa 100 kí tự!")]
        public string Email { get; set; }

        [Display(Name = "Mật khẩu")]
        [Required(ErrorMessage = "Chưa nhập Mật khẩu!")]
        [StringLength(200, ErrorMessage = "Tối đa 200 kí tự!")]
        public string MatKhauEmail { get; set; }

        [Display(Name = "Địa chỉ liên hệ")]
        [Required(ErrorMessage = "Chưa nhập địa chỉ!")]
        public string DiaChi { get; set; }
        [Display(Name = "Chi nhánh")]
        public string ChiNhanh { get; set; }

        [Display(Name = "Điện thoại")]
        [Required(ErrorMessage = "Chưa nhập điện thoại!")]
        public string DienThoai { get; set; }

        [Display(Name = "Số FAX")]
        public string FAX { get; set; }

        [Display(Name = "Bản đồ")]
        public string BanDo { get; set; }

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