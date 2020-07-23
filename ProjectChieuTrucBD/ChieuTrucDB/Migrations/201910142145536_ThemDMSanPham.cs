namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemDMSanPham : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DMSanPhams",
                c => new
                    {
                        MaDanhMucSanPham = c.String(nullable: false, maxLength: 128),
                        TenDanhMucSanPham = c.String(),
                        HinhAnh = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.MaDanhMucSanPham);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DMSanPhams");
        }
    }
}
