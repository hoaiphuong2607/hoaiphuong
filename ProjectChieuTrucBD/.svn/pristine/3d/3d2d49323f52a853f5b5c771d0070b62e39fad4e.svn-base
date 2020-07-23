namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Contents
    {
        [Key]
        public long IdTinTuc { get; set; }

        [Required]
        public string TieuDe { get; set; }

        public string TheTieuDe { get; set; }

        [Required]
        public string MoTa { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string HinhAnh { get; set; }

        [Required]
        [StringLength(30)]
        public string MaDanhMucTinTuc { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string NoiDung { get; set; }

        public int DanhGia { get; set; }

        [Column(TypeName = "ntext")]
        public string BanDo { get; set; }

        public string NgayDang { get; set; }

        [StringLength(32)]
        public string NguoiDang { get; set; }

        public string NgaySua { get; set; }

        [StringLength(32)]
        public string NguoiSua { get; set; }

        [StringLength(150)]
        public string TheTuKhoa { get; set; }

        [StringLength(170)]
        public string TheMota { get; set; }

        public bool TrangThai { get; set; }

        public long LuotXem { get; set; }

        public int LuotThich { get; set; }

        public string Tags { get; set; }

        public DateTime? NgayNhapHeThong { get; set; }

        public bool Approved { get; set; }
    }
}
