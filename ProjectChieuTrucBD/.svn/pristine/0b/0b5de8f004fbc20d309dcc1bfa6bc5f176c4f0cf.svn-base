using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChieuTrucDB.Models
{
    public class Cart
    {
        public int id { get; set; }
        public string nameProduct { get; set; }
        public string image { get; set; }
        public Decimal price { get; set; }
        public int quantity { get; set; }
        public Decimal intoMoney
        {
            get { return price * quantity; }
        }
    }
}