using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class Servicio : IServicio
    {
        Random rmd = new Random();
        public List<Alumno> GetAlumnos()
        {
            List<Alumno> result = new List<Alumno>();
            result.Add(new Alumno() { CI = 237, Nombre = "Juan Perez", Nota=40});
            result.Add(new Alumno() { CI = 347, Nombre = "Maria Luz", Nota = 50 });
            result.Add(new Alumno() { CI = 287, Nombre = "Andres Villaroel", Nota = 60 });
            result.Add(new Alumno() { CI = 327, Nombre = "Andrea Rojas", Nota = 70 });
            result.Add(new Alumno() { CI = 500, Nombre = "Carlos Vargas", Nota = 80 });
            return result;
        }

        public string GetEstado(int nota)
        {
            String estado;
            if (nota > 50)
            {
                estado = "Aprobado";
            }
            else
            {
                estado = "Reprobado";
            }
            return estado;
        }



        public int GetNota(int CI)
        {
            int nota = rmd.Next(1, 100);
            
            if (CI == 500)
            {
                nota = 0;
            }
           
            return nota; 
        }

        public void Validar(string token)
        {
            if (String.IsNullOrEmpty(token))
            {
                throw new Exception("token invalido");
            }
        }
    }
}
