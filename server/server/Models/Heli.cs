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

        public string Id
        {
            get { return _guid.ToString(); }
            set
            {
                Guid guid;
                if (Guid.TryParse(value, out guid))
                {
                    _guid = guid;
                }
            }
        }

        public Geolocation geolocation { get; set; }
    }
}
