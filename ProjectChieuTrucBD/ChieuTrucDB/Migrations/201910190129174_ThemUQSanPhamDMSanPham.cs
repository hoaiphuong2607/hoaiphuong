namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemUQSanPhamDMSanPham : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.DMSanPhams", "TenDanhMucSanPham", c => c.String(maxLength: 450));
            AlterColumn("dbo.SanPhams", "TenSanPham", c => c.String(maxLength: 450));
            CreateIndex("dbo.DMSanPhams", "TenDanhMucSanPham", unique: true, name: "UQ_DMSanPham_TenDanhMucSanPham");
            CreateIndex("dbo.SanPhams", "TenSanPham", unique: true, name: "UQ_SanPham_TenSanPham");
        }
        
        public override void Down()
        {
            DropIndex("dbo.SanPhams", "UQ_SanPham_TenSanPham");
            DropIndex("dbo.DMSanPhams", "UQ_DMSanPham_TenDanhMucSanPham");
            AlterColumn("dbo.SanPhams", "TenSanPham", c => c.String());
            AlterColumn("dbo.DMSanPhams", "TenDanhMucSanPham", c => c.String());
        }
    }
}
