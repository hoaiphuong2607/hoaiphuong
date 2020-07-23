namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemChinhSachBH : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChinhSachBHs",
                c => new
                    {
                        IdChinhSachBH = c.Long(nullable: false, identity: true),
                        ChiTiet = c.String(storeType: "ntext"),
                        NgayCapNhat = c.DateTime(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdChinhSachBH);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ChinhSachBHs");
        }
    }
}
