namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TaiLieux
    {
        [Key]
        public long IdTaiLieu { get; set; }

        [Required]
        [StringLength(50)]
        public string TenTaiLieu { get; set; }

        [Required]
        public string DuongDan { get; set; }

        [Required]
        public string MaDanhMucTaiLieu { get; set; }

        public bool TrangThai { get; set; }
    }
}
