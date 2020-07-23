using System.Collections.Generic;
using ChieuTrucDB.Models;

namespace ChieuTrucDB.Areas.UM.Models
{
    public class ReplyContactViewModel
    {
        public long IdContact { get; set; }
        public string Email { get; set; }
        public string SubjectReply  { get; set; }
        public string MessageReply { get; set; }
    }
}