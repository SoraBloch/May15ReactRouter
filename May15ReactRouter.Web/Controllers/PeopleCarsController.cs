using May15ReactRouter.Data;
using May15ReactRouter.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace May15ReactRouter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;

        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("getallpeople")]
        public List<Person> GetAllPeople()
        {
            var repo = new PersonCarsRepo(_connectionString);
            return repo.GetAllPeople();
        }
        [HttpGet]
        [Route("getallcarsforperson")]
        public List<Car> GetAllCarsForPerson(int personId)
        {
            var repo = new PersonCarsRepo(_connectionString);
            return repo.GetAllCarsForPerson(personId);
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person p)
        {
            var repo = new PersonCarsRepo(_connectionString);
            repo.AddPerson(p);
        }
        [HttpPost]
        [Route("addcarforperson")]
        public void AddCarForPerson(Car c)
        {
            var repo = new PersonCarsRepo(_connectionString);
            repo.AddCarForPerson(c);
        }
        [HttpPost]
        [Route("deletecarsforperson")]
        public void DeleteCarsForPerson(int personId)
        {
            var repo = new PersonCarsRepo(_connectionString);
            repo.DeleteCarsForPerson(personId);
        }
        [HttpGet]
        [Route("getpersonbyid")]
        public Person GetPersonById(int personId)
        {
            var repo = new PersonCarsRepo(_connectionString);
            return repo.GetPersonById(personId);
        }

    }
}
