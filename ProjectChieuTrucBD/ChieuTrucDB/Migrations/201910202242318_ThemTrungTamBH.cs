namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemTrungTamBH : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MaintCenters",
                c => new
                    {
                        IdMaintCenter = c.Long(nullable: false, identity: true),
                        TinhThanh = c.String(nullable: false, maxLength: 100),
                        BanDo = c.String(nullable: false, maxLength: 200),
                        NgayTao = c.DateTime(),
                        NguoiTao = c.String(),
                        NgaySua = c.DateTime(),
                        NguoiSua = c.String(),
                        TrangThai = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IdMaintCenter)
                .Index(t => t.TinhThanh, unique: true, name: "UQ_MaintCenter_TinhThanh");
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.MaintCenters", "UQ_MaintCenter_TinhThanh");
            DropTable("dbo.MaintCenters");
        }
    }
}
