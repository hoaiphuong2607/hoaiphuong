using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class ChinhSachBH
    {
        public ChinhSachBH()
        {
            TrangThai = true;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long IdChinhSachBH { get; set; }

        [Column(TypeName = "ntext")]
        public string ChiTiet { get; set; }
        public DateTime? NgayCapNhat { get; set; }

        public bool TrangThai { get; set; }
    }
}