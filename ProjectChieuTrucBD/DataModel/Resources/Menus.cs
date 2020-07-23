namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Menus
    {
        [Key]
        public long IdMenu { get; set; }

        [Required]
        [StringLength(30)]
        public string MaMenu { get; set; }

        [Required]
        [StringLength(50)]
        public string TenMenu { get; set; }

        [Required]
        [StringLength(100)]
        public string LienKet { get; set; }

        public int ThuTuHienThi { get; set; }

        public bool TrangThai { get; set; }

        public bool HienThiFooter { get; set; }
    }
}
