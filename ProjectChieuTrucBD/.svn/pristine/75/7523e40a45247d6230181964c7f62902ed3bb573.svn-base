namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemCustomerService : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CauHois",
                c => new
                    {
                        IdCauHoi = c.Long(nullable: false, identity: true),
                        TieuDe = c.String(maxLength: 450),
                        ChiTiet = c.String(storeType: "ntext"),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdCauHoi)
                .Index(t => t.TieuDe, unique: true, name: "UQ_CauHoi_TieuDe");
            
            CreateTable(
                "dbo.ContactInfoes",
                c => new
                    {
                        IdContactInfo = c.Long(nullable: false, identity: true),
                        Email = c.String(nullable: false, maxLength: 100),
                        MatKhauEmail = c.String(nullable: false, maxLength: 200),
                        DiaChi = c.String(nullable: false),
                        DienThoai = c.String(nullable: false),
                        FAX = c.String(),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdContactInfo)
                .Index(t => t.Email, unique: true, name: "UQ_ContactInfo_Email");
            
            CreateTable(
                "dbo.Contacts",
                c => new
                    {
                        IdContact = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        Email = c.String(),
                        Phone = c.String(),
                        Message = c.String(),
                        NgayGui = c.DateTime(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdContact);
            
            CreateTable(
                "dbo.ThongTinDNs",
                c => new
                    {
                        IdThongTinDN = c.Long(nullable: false, identity: true),
                        LoaiThongTin = c.String(maxLength: 450),
                        ChiTiet = c.String(storeType: "ntext"),
                        NgaySua = c.DateTime(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdThongTinDN)
                .Index(t => t.LoaiThongTin, unique: true, name: "UQ_ThongTinDN_LoaiThongTin");
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.ThongTinDNs", "UQ_ThongTinDN_LoaiThongTin");
            DropIndex("dbo.ContactInfoes", "UQ_ContactInfo_Email");
            DropIndex("dbo.CauHois", "UQ_CauHoi_TieuDe");
            DropTable("dbo.ThongTinDNs");
            DropTable("dbo.Contacts");
            DropTable("dbo.ContactInfoes");
            DropTable("dbo.CauHois");
        }
    }
}
