using System;
using System.Web;

namespace server.Models
{
    public class Heli
    {
        private Guid _guid;

        public Heli()
        {
            _guid = Guid.NewGuid();
        }

        public string id
        {
            get { return _guid.ToString(); }
            private set
            {
                Guid guid;
                if (Guid.TryParse(value, out guid))
                {
                    _guid = guid;
                }
            }
        }

        public Geolocation geolocation { get; set; }

        public string name { get; set; }
    }
}
