namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemDVPhanPhoi : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DanhMucHeThongs",
                c => new
                    {
                        MaDanhMucHeThong = c.String(nullable: false, maxLength: 128),
                        TenDanhMucHeThong = c.String(nullable: false, maxLength: 200),
                        MoTa = c.String(),
                        UrlHinhAnh = c.String(),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.MaDanhMucHeThong)
                .Index(t => t.TenDanhMucHeThong, unique: true, name: "UQ_DanhMucHeThong_TenDanhMucHeThong");
            
            CreateTable(
                "dbo.Distributors",
                c => new
                    {
                        IdDistributor = c.Long(nullable: false, identity: true),
                        TenNhaPhanPhoi = c.String(nullable: false, maxLength: 200),
                        MaDanhMucHeThong = c.String(maxLength: 128),
                        UrlHinhAnh = c.String(),
                        MoTa = c.String(),
                        DiaChi = c.String(),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdDistributor)
                .ForeignKey("dbo.DanhMucHeThongs", t => t.MaDanhMucHeThong)
                .Index(t => t.TenNhaPhanPhoi, unique: true, name: "UQ_Distributor_TenNhaPhanPhoi")
                .Index(t => t.MaDanhMucHeThong);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Distributors", "MaDanhMucHeThong", "dbo.DanhMucHeThongs");
            DropIndex("dbo.Distributors", new[] { "MaDanhMucHeThong" });
            DropIndex("dbo.Distributors", "UQ_Distributor_TenNhaPhanPhoi");
            DropIndex("dbo.DanhMucHeThongs", "UQ_DanhMucHeThong_TenDanhMucHeThong");
            DropTable("dbo.Distributors");
            DropTable("dbo.DanhMucHeThongs");
        }
    }
}
