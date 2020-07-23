namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tags
    {
        [Key]
        [StringLength(50)]
        public string TagID { get; set; }

        [StringLength(500)]
        public string Name { get; set; }
    }
}
