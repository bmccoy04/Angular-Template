using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Angular_Template.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private ILogger _logger;
        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }
        public IList<User> Users = new List<User>{
            new User(){
                Id = 1,
                FirstName = "Bryan",
                LastName = "McCoy",
                Email = "bryanmccoy04@gmail.com",
                Password = "password"
            }
        };

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("Get");

            return Ok(Users);
        }        

        [HttpPost]
        public IActionResult Post(User user)
        {
            var u = Users.FirstOrDefault(x => x.Id == user.Id);
            _logger.LogInformation(" -----  POST   ----- ");
            _logger.LogInformation(user.Id + " " +
                                   user.LastName + " " +
                                   user.FirstName + " " +
                                   user.Email + " ");

            if(user.Id == 0 || u == null)
            {
                var id = Users.OrderByDescending(x => x.Id).FirstOrDefault().Id;
                user.Id = id + 1;
                Users.Add(user);
            } else {
                u.Id = user.Id;
                u.LastName = user.LastName;
                u.FirstName = user.FirstName;
                u.Password = user.Password;
            }

            return Ok(user);
        }
    }

    public class User {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
