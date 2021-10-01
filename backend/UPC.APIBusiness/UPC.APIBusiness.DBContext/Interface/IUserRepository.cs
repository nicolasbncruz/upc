using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBContext
{
    public interface IUserRepository
    {
        BaseResponse Insert(EntityUser user);
        BaseResponse Login(EntityLogin login);
    }
}
