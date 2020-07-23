using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class QuyenLoi
    {
        public QuyenLoi()
        {
            TrangThai = true;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdQuyenLoi { get; set; }

        [Index("UQ_QuyenLoi_TieuDe", IsUnique = true)]
        [StringLength(450)]
        public string TieuDe { get; set; }

        [Column(TypeName = "ntext")]
        public string ChiTiet { get; set; }
        public DateTime? NgaySua { get; set; }

        public bool TrangThai { get; set; }
    }
}