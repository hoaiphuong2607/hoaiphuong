namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SuaBanDoTrungTamBH : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.MaintCenters", "BanDo", c => c.String(nullable: false, storeType: "ntext"));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.MaintCenters", "BanDo", c => c.String(nullable: false, maxLength: 200));
        }
    }
}
