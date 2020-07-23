namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemQuyenLoi : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.QuyenLois",
                c => new
                    {
                        IdQuyenLoi = c.Long(nullable: false, identity: true),
                        TieuDe = c.String(maxLength: 450),
                        ChiTiet = c.String(storeType: "ntext"),
                        NgaySua = c.DateTime(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdQuyenLoi)
                .Index(t => t.TieuDe, unique: true, name: "UQ_QuyenLoi_TieuDe");
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.QuyenLois", "UQ_QuyenLoi_TieuDe");
            DropTable("dbo.QuyenLois");
        }
    }
}
