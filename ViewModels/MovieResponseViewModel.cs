using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels
{
    public class MovieResponseViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ReleaseDate { get; set; }
        public int Rating { get; set; }
        public string Director { get; set; }
        public List<string> Cast { get; set; }
        public List<string> Genres { get; set; }
    }
}
