﻿using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Models
{
    public class Director
    { 
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
