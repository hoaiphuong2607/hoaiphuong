using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class CauHoi
    {
        public CauHoi()
        {
            TrangThai = true;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdCauHoi { get; set; }

        [Index("UQ_CauHoi_TieuDe", IsUnique = true)]
        [StringLength(450)]
        public string TieuDe { get; set; }

        [Column(TypeName = "ntext")]
        public string ChiTiet { get; set; }
        public DateTime? NgayTao { get; set; }
        public string NguoiTao { get; set; }
        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }

        public bool TrangThai { get; set; }
    }
}