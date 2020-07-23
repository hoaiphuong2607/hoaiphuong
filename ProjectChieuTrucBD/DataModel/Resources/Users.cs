namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Users
    {
        [Key]
        public long IdThanhVien { get; set; }

        [Required]
        [StringLength(30)]
        public string HoTen { get; set; }

        [Required]
        [StringLength(100)]
        public string TenDangNhap { get; set; }

        [Required]
        [StringLength(200)]
        public string MatKhau { get; set; }

        [Column(TypeName = "ntext")]
        public string HinhAnh { get; set; }

        [StringLength(100)]
        public string Email { get; set; }

        [StringLength(15)]
        public string DienThoai { get; set; }

        [Required]
        public string IdNhom { get; set; }

        public string NgayTao { get; set; }

        [StringLength(32)]
        public string NguoiTao { get; set; }

        public string NgaySua { get; set; }

        [StringLength(32)]
        public string NguoiSua { get; set; }

        public bool TrangThai { get; set; }

        public bool Deleted { get; set; }
    }
}
