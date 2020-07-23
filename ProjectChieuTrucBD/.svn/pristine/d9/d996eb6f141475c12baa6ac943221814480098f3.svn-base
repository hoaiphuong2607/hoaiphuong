namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class DoiTacs
    {
        [Key]
        public long IdDoiTac { get; set; }

        public string MaDoiTac { get; set; }

        [Required]
        [StringLength(50)]
        public string TenDoiTac { get; set; }

        public string ChiTiet { get; set; }

        public string HinhAnh { get; set; }

        public bool TrangThai { get; set; }
    }
}
