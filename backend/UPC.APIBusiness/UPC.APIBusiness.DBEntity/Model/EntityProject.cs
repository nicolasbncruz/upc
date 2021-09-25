using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityProject : EntityBase
    {
        public int idProyecto { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public string Direccion { get; set; }
        public string Ubicacion { get; set; }
        public List<EntityImage> Images { get; set; }
    }
}