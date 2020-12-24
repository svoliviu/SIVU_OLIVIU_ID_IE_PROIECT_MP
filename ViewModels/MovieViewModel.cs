using System;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels
{
    public class MovieViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public IEnumerable<int> Actors { get; set; }
        public IEnumerable<int> Genres { get; set; }
    }
}
