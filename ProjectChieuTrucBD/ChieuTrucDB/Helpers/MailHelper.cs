using System;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using ChieuTrucDB.Areas.UM.Models;
using ChieuTrucDB.Models;

namespace ChieuTrucDB.Helpers
{
    public class MailHelper
    {
        DatabaseContext _db;
        public MailHelper()
        {
            _db = new DatabaseContext();
        }
        public void SendMail(Contact contact)
        {
            var e = _db.ContactInfos.FirstOrDefault(x => x.TrangThai == true);
            var fromEmailAddress = e.Email;
            var fromEmailDisplayName = "[BDMAT] Chúng tôi đã nhận được phản hồi của bạn!";
            var fromEmailPassword = Encryptor.Decrypt(e.MatKhauEmail);
            var smtpHost = "smtp.gmail.com";
            var smtpPort = "587";

            bool enabledSsl = true;

            string body = contact.Message;
            MailMessage message = new MailMessage(new MailAddress(fromEmailAddress, fromEmailDisplayName), new MailAddress(contact.Email));
            message.Subject = fromEmailDisplayName;//contact.Phone;//phone ở đây là subject - tiêu đề
            message.IsBodyHtml = true;
            message.Body = body;

            var client = new SmtpClient();
            client.Credentials = new NetworkCredential(fromEmailAddress, fromEmailPassword);
            client.Host = smtpHost;
            client.EnableSsl = enabledSsl;
            client.Port = !string.IsNullOrEmpty(smtpPort) ? Convert.ToInt32(smtpPort) : 0;

            client.Send(message);
        }
        public void ReplyMail(ReplyContactViewModel data)
        {
            var e = _db.ContactInfos.FirstOrDefault(x => x.TrangThai == true);
            var fromEmailAddress = e.Email;
            var fromEmailDisplayName = data.SubjectReply;
            var fromEmailPassword = Encryptor.Decrypt(e.MatKhauEmail);
            var smtpHost = "smtp.gmail.com";
            var smtpPort = "587";

            bool enabledSsl = true;

            string body = data.MessageReply;
            MailMessage message = new MailMessage(new MailAddress(fromEmailAddress, fromEmailDisplayName), new MailAddress(data.Email));
            message.Subject = data.SubjectReply;//phone ở đây là subject - tiêu đề
            message.IsBodyHtml = true;
            message.Body = body;

            var client = new SmtpClient();
            client.Credentials = new NetworkCredential(fromEmailAddress, fromEmailPassword);
            client.Host = smtpHost;
            client.EnableSsl = enabledSsl;
            client.Port = !string.IsNullOrEmpty(smtpPort) ? Convert.ToInt32(smtpPort) : 0;

            client.Send(message);
        }
    }
}
