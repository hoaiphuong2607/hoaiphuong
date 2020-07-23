namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TaiLieuCategories
    {
        [Key]
        public long IdDanhMucTaiLieu { get; set; }

        [Required]
        [StringLength(15)]
        public string MaDanhMucTaiLieu { get; set; }

        [Required]
        [StringLength(40)]
        public string TenDanhMucTaiLieu { get; set; }

        public bool TrangThai { get; set; }
    }
}
