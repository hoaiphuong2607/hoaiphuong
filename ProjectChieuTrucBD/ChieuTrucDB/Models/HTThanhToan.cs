using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    [Serializable]
    public class HTThanhToan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public HTThanhToan(int iD, string name)
        {
            this.Id = iD;
            this.Name = name;
        }
    }
}