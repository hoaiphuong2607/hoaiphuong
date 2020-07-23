using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class ThongTinDN
    {
        public ThongTinDN()
        {
            TrangThai = true;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdThongTinDN { get; set; }

        [Index("UQ_ThongTinDN_LoaiThongTin", IsUnique = true)]
        [StringLength(450)]
        public string LoaiThongTin { get; set; }

        [Column(TypeName = "ntext")]
        public string ChiTiet { get; set; }
        public DateTime? NgaySua { get; set; }

        public bool TrangThai { get; set; }
    }
}