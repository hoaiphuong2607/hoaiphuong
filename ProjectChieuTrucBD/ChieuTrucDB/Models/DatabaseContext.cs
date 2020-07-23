namespace ChieuTrucDB.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
            : base("name=DatabaseContext")
        {
        }

        public virtual DbSet<HoaDon> HoaDon { get; set; }
        public virtual DbSet<ChiTietHoaDon> ChiTietHoaDon { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<DMSanPham> DMSanPhams { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<HinhAnhSanPham> HinhAnhSanPhams { get; set; }
        public virtual DbSet<ThongTinDN> ThongTinDNs { get; set; }
        public virtual DbSet<CauHoi> CauHois { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<ContactInfo> ContactInfos { get; set; }
        public virtual DbSet<ChinhSachBH> ChinhSachBHs { get; set; }
        public virtual DbSet<MaintCenter> MaintCenters { get; set; }
        public virtual DbSet<DanhMucHeThong> DanhMucHeThongs { get; set; }
        public virtual DbSet<Distributor> Distributors { get; set; }
        public virtual DbSet<QuyenLoi> QuyenLois { get; set; }
        public virtual DbSet<KhachHangThanThiet> KhachHangThanThiet { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
    }
}