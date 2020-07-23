namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class YKienKhachHangs
    {
        [Key]
        public long IdYKien { get; set; }

        public string YKienType { get; set; }

        [Column(TypeName = "ntext")]
        public string Detail { get; set; }

        public bool TrangThai { get; set; }
    }
}
