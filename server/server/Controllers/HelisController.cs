using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using server.Models;
using System.Collections;

namespace server.Controllers
{
    public class HelisController : ApiController
    {
        private static List<Heli> helis = new List<Heli>();

        // GET: api/Helis
        [ResponseType(typeof(List<Heli>))]
        public IHttpActionResult GetHelis()
        {
            return Ok(helis);
        }

        // GET: api/Helis/5
        [ResponseType(typeof(Heli))]
        public async Task<IHttpActionResult> GetHeli(string id)
        {
            int i = Int32.Parse(id);
            Heli heli = helis[i];
            if (heli == null)
            {
                return NotFound();
            }

            return Ok(heli);
        }

        //// PUT: api/Helis/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutHeli(string id, Heli heli)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != heli.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(heli).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!HeliExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Helis
        [ResponseType(typeof(Heli))]
        public async Task<IHttpActionResult> PostHeli(Heli heli)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(heli.geolocation == null)
            {
                heli.geolocation = new Geolocation();
            }
            helis.Add(heli);
            return Ok(heli);
            //db.Helis.Add(heli);

            //try
            //{
            //    await db.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (HeliExists(heli.Id))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtRoute("DefaultApi", new { id = heli.Id }, heli);
        }

        //// DELETE: api/Helis/5
        //[ResponseType(typeof(Heli))]
        //public async Task<IHttpActionResult> DeleteHeli(string id)
        //{
        //    Heli heli = await db.Helis.FindAsync(id);
        //    if (heli == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Helis.Remove(heli);
        //    await db.SaveChangesAsync();

        //    return Ok(heli);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool HeliExists(string id)
        //{
        //    return db.Helis.Count(e => e.Id == id) > 0;
        //}
    }
}