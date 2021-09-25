using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityImage : EntityBase
    {
        public int idImagen { get; set; }
        public string Nombre { get; set; }
        public string Ruta { get; set; }
        public int idProyecto { get; set; }
        public int idDepartamento { get; set; }
        public string Tipo { get; set; }
    }
}