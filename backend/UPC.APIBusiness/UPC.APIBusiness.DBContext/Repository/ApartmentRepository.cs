using Dapper;
using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Linq;

namespace DBContext
{
    public class ApartmentRepository : BaseRepository, IApartmentRepository
    {
        public BaseResponse GetApartmentsByProject(int id)
        {
            var returnEntity = new BaseResponse();
            var entitiesApartment = new List<EntityApartment>();
            var imageRepository = new ImageRepository();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_Listar_Departamentos_X_Proyecto";

                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", value: id, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    entitiesApartment = db.Query<EntityApartment>(sql: sql, param: p, commandType: CommandType.StoredProcedure).ToList();

                    if(entitiesApartment.Count > 0)
                    {
                        foreach(var obj in entitiesApartment)
                        {
                            obj.image = imageRepository.GetImagesApartment(obj.idDepartamento);
                        }

                        returnEntity.isSuccess = true;
                        returnEntity.errorCode = "0000";
                        returnEntity.errorMessage = string.Empty;
                        returnEntity.data = entitiesApartment;
                    }
                    else
                    {
                        returnEntity.isSuccess = true;
                        returnEntity.errorCode = "0000";
                        returnEntity.errorMessage = string.Empty;
                        returnEntity.data = null;
                    }
                }
            }
            catch(Exception ex)
            {
                returnEntity.isSuccess = false;
                returnEntity.errorCode = "0001";
                returnEntity.errorMessage = ex.Message;
                returnEntity.data = null;
            }

            return returnEntity;
        }
    }
}