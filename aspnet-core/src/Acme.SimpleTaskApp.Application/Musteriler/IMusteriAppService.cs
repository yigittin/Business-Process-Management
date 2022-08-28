using Abp.Application.Services;
using Acme.SimpleTaskApp.Projeler.Musteriler.MusteriTalep;
using System.Threading.Tasks;

namespace Acme.SimpleTaskApp.Projeler.Customers
{
    public interface IMusteriAppService : IApplicationService
    {
        Task MusteriIstekEkle([FormData] MusteriIstekEkleDto input);
    }
}