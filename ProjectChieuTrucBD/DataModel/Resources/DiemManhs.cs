namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class DiemManhs
    {
        [Key]
        public long IdDiemManh { get; set; }

        [Required]
        [StringLength(50)]
        public string DeDan { get; set; }

        [Required]
        public string ChiTiet { get; set; }

        [Column(TypeName = "ntext")]
        [Required]
        public string HinhAnh { get; set; }

        public bool TrangThai { get; set; }
    }
}
