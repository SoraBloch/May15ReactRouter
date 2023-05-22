using Microsoft.EntityFrameworkCore;

namespace May15ReactRouter.Data
{
    public class PersonCarsRepo
    {
        private readonly string _connectionString;

        public PersonCarsRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAllPeople()
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public List<Car> GetAllCarsForPerson(int personId)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void AddCarForPerson(Car car)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public void DeleteCarsForPerson(int personId)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonId = {personId}");
        }
        public Person GetPersonById(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
    }

}