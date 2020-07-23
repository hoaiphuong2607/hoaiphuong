namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ContentCategories
    {
        [Key]
        public long IdDanhMuc { get; set; }

        [Required]
        [StringLength(30)]
        public string MaDanhMucTinTuc { get; set; }

        [Required]
        [StringLength(40)]
        public string TenDanhMucTinTuc { get; set; }

        [StringLength(80)]
        public string TheTieuDeDM { get; set; }

        public long? IdCha { get; set; }

        public int ThuTuHienThi { get; set; }

        public string TieuDeSEO { get; set; }

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
    }
}
