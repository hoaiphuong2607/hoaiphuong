namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Credentials
    {
        [Key]
        [StringLength(30)]
        public string MaQuyenHan { get; set; }

        [Required]
        [StringLength(100)]
        public string TenQuyenHan { get; set; }
    }
}
