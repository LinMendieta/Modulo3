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
            result.Add(new Alumno() { CI = 667, Nombre = "Pedro juares", Nota = 10 });
            result.Add(new Alumno() { CI = 117, Nombre = "Maria Peres", Nota = 80 });
            result.Add(new Alumno() { CI = 227, Nombre = "Juan Alarcon", Nota = 20 });
            result.Add(new Alumno() { CI = 337, Nombre = "Marcelo Paz", Nota = 30 });
            result.Add(new Alumno() { CI = 500, Nombre = "Julia Flores", Nota = 90 });
            return result;
        }

        public string GetEstado(int nota)
        {
            string estado = "Reprovado";
            if (nota > 50)
            {
                estado = "Aprobado";
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
