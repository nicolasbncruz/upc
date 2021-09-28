using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityUser : EntityBase
    {
        public int idusuario { get; set; }
		public string email { get; set; }
		public string passwordusuario { get; set; }
		public int idperfil { get; set; }
		public string nombres { get; set; }
		public string apellidos { get; set; }
		public string documentoidentidad { get; set; }
		public string telefono { get; set; }

	}
}
