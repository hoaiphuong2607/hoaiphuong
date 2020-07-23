namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThemHinhAnhChoSP : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.SanPhams", "HinhAnh", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.SanPhams", "HinhAnh");
        }
    }
}
