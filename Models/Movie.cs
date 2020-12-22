using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Models
{
    public class Movie
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime ReleaseDate { get; set; }

        public int Rating { get; set; }

        public virtual ICollection<Genre>  Genres { get; set; }

        public virtual ICollection<Actor> Cast { get; set; }

        public Director Director { get; set; }
    }
}
