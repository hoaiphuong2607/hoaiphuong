namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Activities
    {
        [Key]
        public long IdActivity { get; set; }

        public string TieuDe { get; set; }

        [StringLength(250)]
        public string MoTa { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string HinhAnh { get; set; }

        public string Link { get; set; }

        public string NgayDang { get; set; }

        [StringLength(32)]
        public string NguoiDang { get; set; }

        public string NgaySua { get; set; }

        [StringLength(32)]
        public string NguoiSua { get; set; }

        public long LuotXem { get; set; }

        public int LuotThich { get; set; }

        public bool TrangThai { get; set; }

        public DateTime? NgayNhapHeThong { get; set; }

        public bool Approved { get; set; }
    }
}
