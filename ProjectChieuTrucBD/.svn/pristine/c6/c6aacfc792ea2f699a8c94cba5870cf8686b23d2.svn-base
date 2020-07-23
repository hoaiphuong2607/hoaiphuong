using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class HinhAnhSanPham
    {
        public HinhAnhSanPham()
        {
            TrangThai = true;
            Deleted = false;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdHinhAnhSanPham { get; set; }

        public long IdSanPham { get; set; }
        [ForeignKey("IdSanPham")]
        public virtual SanPham SanPham { get; set; }

        public string Url { get; set; }

        public bool TrangThai { get; set; }

        public bool Deleted { get; set; }
    }
}