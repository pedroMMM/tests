using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{

    public class Geolocation
    {

        public int latitude { get; set; }
        public int longitude { get; set; }

        public Geolocation()
        {
            var random = new Random();
            latitude = random.Next(1, 100);
            longitude = random.Next(1, 100);
        }
    }
}