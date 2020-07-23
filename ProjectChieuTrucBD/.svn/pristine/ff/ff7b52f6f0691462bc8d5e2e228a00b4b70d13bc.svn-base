namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Projects
    {
        [Key]
        public long IdDuAn { get; set; }

        [Required]
        [StringLength(15)]
        public string MaDuAn { get; set; }

        [Required]
        [StringLength(80)]
        public string TenDuAn { get; set; }

        [StringLength(80)]
        public string TheTieuDe { get; set; }

        [Required]
        [StringLength(200)]
        public string MoTa { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string HinhAnh { get; set; }

        [Required]
        [StringLength(15)]
        public string MaDanhMucDuAn { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string NoiDung { get; set; }

        [Column(TypeName = "ntext")]
        public string BanDo { get; set; }

        [StringLength(100)]
        public string NgayDang { get; set; }

        [StringLength(32)]
        public string NguoiDang { get; set; }

        [StringLength(100)]
        public string NgaySua { get; set; }

        [StringLength(32)]
        public string NguoiSua { get; set; }

        [StringLength(150)]
        public string TheTuKhoa { get; set; }

        [StringLength(170)]
        public string TheMota { get; set; }

        public string Tags { get; set; }

        public DateTime? NgayNhapHeThong { get; set; }

        public int DanhGia { get; set; }

        public bool TrangThai { get; set; }

        public long LuotXem { get; set; }

        public int LuotThich { get; set; }

        public string KhuVuc { get; set; }

        [Column(TypeName = "ntext")]
        public string MatBangTongThe { get; set; }

        public string IdTongQuan { get; set; }

        public string IdLyDo { get; set; }

        public bool Approved { get; set; }
    }
}
