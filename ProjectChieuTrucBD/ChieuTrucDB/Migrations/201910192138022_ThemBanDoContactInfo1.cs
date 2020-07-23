namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemBanDoContactInfo1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ContactInfoes", "ChiNhanh", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ContactInfoes", "ChiNhanh");
        }
    }
}
