namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DirectorName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Directors", "Name", c => c.String());
            DropColumn("dbo.Directors", "FirstName");
            DropColumn("dbo.Directors", "LastName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Directors", "LastName", c => c.String());
            AddColumn("dbo.Directors", "FirstName", c => c.String());
            DropColumn("dbo.Directors", "Name");
        }
    }
}
