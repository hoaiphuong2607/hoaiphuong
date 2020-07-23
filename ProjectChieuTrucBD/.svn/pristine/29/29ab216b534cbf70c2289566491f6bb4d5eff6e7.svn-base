namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TuyenDungCates
    {
        [Key]
        public long IdLoaiTuyenDung { get; set; }

        public string MaLoaiTuyenDung { get; set; }

        [Required]
        [StringLength(50)]
        public string TenLoaiTuyenDung { get; set; }

        public bool TrangThai { get; set; }
    }
}
