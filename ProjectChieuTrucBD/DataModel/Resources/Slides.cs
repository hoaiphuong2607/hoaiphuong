namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Slides
    {
        [Key]
        public long IdSlide { get; set; }

        public string TieuDe { get; set; }

        [StringLength(250)]
        public string MoTa { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string HinhAnh { get; set; }

        public int ThuTuHienThi { get; set; }

        public string Link { get; set; }

        public bool TrangThai { get; set; }

        public DateTime? NgayNhapHeThong { get; set; }

        public bool Approved { get; set; }
    }
}
