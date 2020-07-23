namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChinhSuaSP2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.HinhAnhSanPhams",
                c => new
                    {
                        IdHinhAnhSanPham = c.Long(nullable: false, identity: true),
                        IdSanPham = c.Long(nullable: false),
                        Url = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdHinhAnhSanPham)
                .ForeignKey("dbo.SanPhams", t => t.IdSanPham, cascadeDelete: true)
                .Index(t => t.IdSanPham);
            
            AddColumn("dbo.DMSanPhams", "MetaTitle", c => c.String());
            AddColumn("dbo.DMSanPhams", "MetaDescription", c => c.String());
            AddColumn("dbo.DMSanPhams", "MetaKeyword", c => c.String());
            AddColumn("dbo.DMSanPhams", "Tags", c => c.String());
            AddColumn("dbo.DMSanPhams", "NgayTao", c => c.DateTime());
            AddColumn("dbo.DMSanPhams", "NguoiTao", c => c.String());
            AddColumn("dbo.DMSanPhams", "NgaySua", c => c.DateTime());
            AddColumn("dbo.DMSanPhams", "NguoiSua", c => c.String());
            AddColumn("dbo.SanPhams", "MetaTitle", c => c.String());
            AddColumn("dbo.SanPhams", "MetaDescription", c => c.String());
            AddColumn("dbo.SanPhams", "MetaKeyword", c => c.String());
            AddColumn("dbo.SanPhams", "MoTa", c => c.String());
            AddColumn("dbo.SanPhams", "Tags", c => c.String());
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.HinhAnhSanPhams", "IdSanPham", "dbo.SanPhams");
            DropIndex("dbo.HinhAnhSanPhams", new[] { "IdSanPham" });
            DropColumn("dbo.SanPhams", "Tags");
            DropColumn("dbo.SanPhams", "MoTa");
            DropColumn("dbo.SanPhams", "MetaKeyword");
            DropColumn("dbo.SanPhams", "MetaDescription");
            DropColumn("dbo.SanPhams", "MetaTitle");
            DropColumn("dbo.DMSanPhams", "NguoiSua");
            DropColumn("dbo.DMSanPhams", "NgaySua");
            DropColumn("dbo.DMSanPhams", "NguoiTao");
            DropColumn("dbo.DMSanPhams", "NgayTao");
            DropColumn("dbo.DMSanPhams", "Tags");
            DropColumn("dbo.DMSanPhams", "MetaKeyword");
            DropColumn("dbo.DMSanPhams", "MetaDescription");
            DropColumn("dbo.DMSanPhams", "MetaTitle");
            DropTable("dbo.HinhAnhSanPhams");
        }
    }
}
