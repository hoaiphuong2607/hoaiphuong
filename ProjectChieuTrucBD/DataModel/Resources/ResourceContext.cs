namespace DataModel.Resources
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ResourceContext : DbContext
    {
        public ResourceContext()
            : base("name=ResourceContext")
        {
        }

        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<Abouts> Abouts { get; set; }
        public virtual DbSet<Activities> Activities { get; set; }
        public virtual DbSet<Contacts> Contacts { get; set; }
        public virtual DbSet<ContentCategories> ContentCategories { get; set; }
        public virtual DbSet<Contents> Contents { get; set; }
        public virtual DbSet<ContentTags> ContentTags { get; set; }
        public virtual DbSet<Credentials> Credentials { get; set; }
        public virtual DbSet<ChiTietTuyenDungs> ChiTietTuyenDungs { get; set; }
        public virtual DbSet<DiemManhs> DiemManhs { get; set; }
        public virtual DbSet<DoiTacs> DoiTacs { get; set; }
        public virtual DbSet<Emails> Emails { get; set; }
        public virtual DbSet<InforNguoiTuyenDungs> InforNguoiTuyenDungs { get; set; }
        public virtual DbSet<LiDoDauTus> LiDoDauTus { get; set; }
        public virtual DbSet<Menus> Menus { get; set; }
        public virtual DbSet<ProjectCategories> ProjectCategories { get; set; }
        public virtual DbSet<Projects> Projects { get; set; }
        public virtual DbSet<Slides> Slides { get; set; }
        public virtual DbSet<Tags> Tags { get; set; }
        public virtual DbSet<TaiLieuCategories> TaiLieuCategories { get; set; }
        public virtual DbSet<TaiLieux> TaiLieux { get; set; }
        public virtual DbSet<TongQuans> TongQuans { get; set; }
        public virtual DbSet<TuyenDungCates> TuyenDungCates { get; set; }
        public virtual DbSet<TuyenDungs> TuyenDungs { get; set; }
        public virtual DbSet<UserCredentials> UserCredentials { get; set; }
        public virtual DbSet<UserGroups> UserGroups { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<YKienKhachHangs> YKienKhachHangs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
