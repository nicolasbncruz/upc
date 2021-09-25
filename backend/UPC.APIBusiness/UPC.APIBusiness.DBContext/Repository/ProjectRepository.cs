using Dapper;
using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Linq;

namespace DBContext
{
    public class ProjectRepository : BaseRepository, IProjectRepository
    {
        public BaseResponse GetProject(int id)
        {
            var entityProject = new EntityProject();
            var returnEntity = new BaseResponse();
            var imageRepository = new ImageRepository();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_ObtenerProyecto";
                    
                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", value: id, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    entityProject = db.Query<EntityProject>(sql: sql, param: p, commandType: CommandType.StoredProcedure).FirstOrDefault();

                    if(entityProject != null)
                    {
                        entityProject.Images = imageRepository.GetImagesProject(entityProject.idProyecto);

                        returnEntity.isSuccess = true;
                        returnEntity.errorCode = "0000";
                        returnEntity.errorMessage = string.Empty;
                        returnEntity.data = entityProject;
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

        public BaseResponse GetProjects()
        {
            var entitiesProject = new List<EntityProject>();
            var returnEntity = new BaseResponse();
            var imageRepository = new ImageRepository();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_ListarProyectos";

                    entitiesProject = db.Query<EntityProject>(sql: sql, commandType: CommandType.StoredProcedure).ToList();

                    if(entitiesProject.Count > 0)
                    {
                        foreach(var obj in entitiesProject)
                        {
                            obj.Images = imageRepository.GetImagesProject(obj.idProyecto);
                        }

                        returnEntity.isSuccess = true;
                        returnEntity.errorCode = "0000";
                        returnEntity.errorMessage = string.Empty;
                        returnEntity.data = entitiesProject;
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

        public BaseResponse Insert(EntityProject project)
        {
            var returnEntity = new BaseResponse();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_InsertarProyecto";

                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", dbType: DbType.Int32, direction: ParameterDirection.Output);
                    p.Add(name: "@NOMBRE", value: project.Nombre, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@PRECIO", value: project.Precio, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                    p.Add(name: "@DIRECCION", value: project.Direccion, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@UBICACION", value: project.Ubicacion, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@IMAGENNOMBRE", value: project.Images.Count > 0 ? project.Images[0].Nombre : string.Empty, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@IMAGENRUTA", value: project.Images.Count > 0 ? project.Images[0].Ruta : string.Empty, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@USUARIOCREA", value: project.UsuarioCrea, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    db.Query<EntityProject>(sql: sql, param: p, commandType: CommandType.StoredProcedure).FirstOrDefault();

                    int idProject = p.Get<int>("@IDPROYECTO");

                    if(idProject > 0)
                    {
                        returnEntity.isSuccess = true;
                        returnEntity.errorCode = "0000";
                        returnEntity.errorMessage = string.Empty;
                        returnEntity.data = new { 
                            id = idProject,
                            nombre = project.Nombre
                        };
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