namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UserGroups
    {
        [Required]
        [StringLength(20)]
        public string MaNhom { get; set; }

        [Required]
        [StringLength(30)]
        public string TenNhom { get; set; }

        [Key]
        public long IdNhom { get; set; }

        public bool TrangThai { get; set; }
    }
}
