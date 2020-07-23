namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TuyenDungs
    {
        [Key]
        public long IdTuyenDung { get; set; }

        public string MaTuyenDung { get; set; }

        [Required]
        [StringLength(50)]
        public string TenTuyenDung { get; set; }

        public string ViTriTuyenDung { get; set; }

        public int SoLuong { get; set; }

        public string DiaDiem { get; set; }

        public string NgayHetHan { get; set; }

        public string LoaiTuyenDung { get; set; }

        public bool TrangThai { get; set; }
    }
}
