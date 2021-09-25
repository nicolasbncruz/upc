using Dapper;
using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Linq;

namespace DBContext
{
    public class ImageRepository : BaseRepository, IImageRepository
    {
        public List<EntityImage> GetImagesApartment(int id)
        {
            var entitiesImage = new List<EntityImage>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_Listar_Images_X_Departamento";

                    var p = new DynamicParameters();
                    p.Add(name: "@IDDEPARTAMENTO", value: id, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    entitiesImage = db.Query<EntityImage>(sql: sql, param: p, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return entitiesImage;
        }

        public List<EntityImage> GetImagesProject(int id)
        {
            var entitiesImage = new List<EntityImage>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_Listar_Images_X_Proyecto";

                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", value: id, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    entitiesImage = db.Query<EntityImage>(sql: sql, param: p, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return entitiesImage;
        }
    }
}