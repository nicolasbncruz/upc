using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityApartment : EntityBase
    {
        public int idDepartamento { get; set; }
        public int idProyecto { get; set; }
        public string nombre { get; set; }
        public decimal precio { get; set; }
        public string piso { get; set; }
        public string ubicacion { get; set; }
        public List<EntityImage> image { get; set; }
    }
}