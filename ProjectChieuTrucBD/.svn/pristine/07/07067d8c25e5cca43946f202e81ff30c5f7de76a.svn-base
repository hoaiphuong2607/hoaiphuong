namespace ChieuTrucDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class delPRODUCT : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "cateId", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "cateId" });
            DropTable("dbo.Products");
            DropTable("dbo.Categories");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false, maxLength: 50),
                        valid = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false, maxLength: 50),
                        price = c.Double(nullable: false),
                        amount = c.Int(nullable: false),
                        description = c.String(maxLength: 500),
                        thumbnail = c.String(maxLength: 250),
                        valid = c.Boolean(nullable: false),
                        cateId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateIndex("dbo.Products", "cateId");
            AddForeignKey("dbo.Products", "cateId", "dbo.Categories", "id", cascadeDelete: true);
        }
    }
}
