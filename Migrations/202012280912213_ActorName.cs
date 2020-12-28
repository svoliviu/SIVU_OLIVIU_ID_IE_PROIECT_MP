namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActorName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Actors", "Name", c => c.String());
            DropColumn("dbo.Actors", "FirstName");
            DropColumn("dbo.Actors", "LastName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Actors", "LastName", c => c.String());
            AddColumn("dbo.Actors", "FirstName", c => c.String());
            DropColumn("dbo.Actors", "Name");
        }
    }
}
