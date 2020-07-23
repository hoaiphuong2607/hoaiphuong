namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UserCredentials
    {
        [Key]
        public long IdPhanQuyen { get; set; }

        [Required]
        [StringLength(20)]
        public string MaNhom { get; set; }

        [Required]
        [StringLength(30)]
        public string MaQuyenHan { get; set; }
    }
}