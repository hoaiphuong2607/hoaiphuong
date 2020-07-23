using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class MaintCenter
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdMaintCenter { get; set; }

        [Index("UQ_MaintCenter_TinhThanh", IsUnique = true)]
        [Display(Name = "Tỉnh thành *")]
        [Required(ErrorMessage = "Chưa nhập tỉnh thành!")]
        [StringLength(100, ErrorMessage = "Tối đa 100 kí tự!")]
        public string TinhThanh { get; set; }

        [Display(Name = "Url bản đồ *")]
        [Required(ErrorMessage = "Chưa nhập url bản đồ!")]
        [Column(TypeName = "ntext")]
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