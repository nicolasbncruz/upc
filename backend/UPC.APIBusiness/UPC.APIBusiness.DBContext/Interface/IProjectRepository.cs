using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBContext
{
    public interface IProjectRepository
    {
        BaseResponse GetProjects();
        BaseResponse GetProject(int id);
        BaseResponse Insert(EntityProject project);
    }
}