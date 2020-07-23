namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemQuyenLoi2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.SanPhams", "OutOfStock", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.SanPhams", "OutOfStock");
        }
    }
}
