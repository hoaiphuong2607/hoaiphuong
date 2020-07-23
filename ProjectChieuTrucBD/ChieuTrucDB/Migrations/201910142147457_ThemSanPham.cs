namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemSanPham : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SanPhams",
                c => new
                    {
                        IdSanPham = c.Long(nullable: false, identity: true),
                        MaSanPham = c.String(),
                        TenSanPham = c.String(),
                        MaDanhMucSanPham = c.String(maxLength: 128),
                        GiaTien = c.Decimal(precision: 18, scale: 2),
                        SoLuong = c.Decimal(precision: 18, scale: 2),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdSanPham)
                .ForeignKey("dbo.DMSanPhams", t => t.MaDanhMucSanPham)
                .Index(t => t.MaDanhMucSanPham);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SanPhams", "MaDanhMucSanPham", "dbo.DMSanPhams");
            DropIndex("dbo.SanPhams", new[] { "MaDanhMucSanPham" });
            DropTable("dbo.SanPhams");
        }
    }
}
