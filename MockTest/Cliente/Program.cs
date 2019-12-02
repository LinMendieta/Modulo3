using Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cliente
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("##############################################");
            IServicio serv = new Servicio();
            try
            {
                Admin admin = new Admin("agustin", "123", serv);
                List<Alumno> ListaNota = admin.GetNotas();
                foreach (var item in ListaNota)
                {
                    Console.WriteLine("CI:{0} - Nombre:{1} - Nota:{2} - Estado:{3}",
                        item.CI, item.Nombre, item.Nota, item.Estado);
                }
                Console.WriteLine("##############################################");
                ListaNota = admin.GetEstado();
                foreach (var item in ListaNota)
                {
                    Console.WriteLine("CI:{0} - Nombre:{1} - Nota:{2} - Estado:{3}",
                        item.CI, item.Nombre, item.Nota, item.Estado);
                }
                Console.WriteLine("##############################################");


            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }
            
            
            Console.ReadKey();
        }
    }
}
