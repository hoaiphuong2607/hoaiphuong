namespace DataModel.Resources
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class InforNguoiTuyenDungs
    {
        [Key]
        public long IdInforTuyenDung { get; set; }

        public string MaInforTuyenDung { get; set; }

        [Required]
        [StringLength(50)]
        public string HoTen { get; set; }

        [Required]
        [StringLength(50)]
        public string Email { get; set; }

        [Required]
        [StringLength(13)]
        public string SDT { get; set; }

        public string DiaChi { get; set; }

        public string NgayGui { get; set; }

        public string TaiLieuDinhKem { get; set; }
    }
}
