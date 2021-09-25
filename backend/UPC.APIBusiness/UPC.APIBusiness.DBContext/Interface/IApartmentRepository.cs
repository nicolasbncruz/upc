using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBContext
{
    public interface IApartmentRepository
    {
        BaseResponse GetApartmentsByProject(int id);
    }
}