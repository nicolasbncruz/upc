using DBContext;
using DBEntity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NSwag.Annotations;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;

namespace UPC.APIBusiness.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Produces("application/json")]
    [Route("api/project")]
    [ApiController]
    public class ProjectController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        protected readonly IProjectRepository _ProjectRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="projectRepository"></param>
        public ProjectController(IProjectRepository projectRepository)
        {
            _ProjectRepository = projectRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Produces("application/json")]
        [AllowAnonymous]
        [HttpGet]
        [Route("getprojects")]
        public ActionResult GetProjects()
        {
            var ret = _ProjectRepository.GetProjects();
            return Json(ret);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [AllowAnonymous]
        [HttpGet]
        [Route("getproject")]
        public ActionResult GetProject(int id)
        {
            var ret = _ProjectRepository.GetProject(id);
            return Json(ret);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="project"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [AllowAnonymous]
        [HttpPost]
        [Route("admin/insert")]
        public ActionResult Insert(EntityProject project)
        {
            var ret = _ProjectRepository.Insert(project);
            return Json(ret);
        }

    }
}