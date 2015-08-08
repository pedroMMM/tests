using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace server.Controllers
{
    public class ValuesController : ApiController
    {
        string echo;

        // GET api/values
        public IEnumerable<string> Get()
        {
            echo = "hit";
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "hit";
        }

        // POST api/values
        [ResponseType(typeof(string))]
        public IHttpActionResult Post([FromBody]string value)
        {
            if(value == null)
            {
                return BadRequest("it's null");
            }
            return Ok(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
