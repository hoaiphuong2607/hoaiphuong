namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemBanDoContactInfo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ContactInfoes", "BanDo", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ContactInfoes", "BanDo");
        }
    }
}
