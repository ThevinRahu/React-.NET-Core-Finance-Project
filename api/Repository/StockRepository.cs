using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _context;

        public StockRepository(ApplicationDBContext context)
        {
            _context = context; 
        }
        Task<Stock> IStockRepository.CreateAsync(Stock stockModel)
        {
          
            throw new NotImplementedException();
        }

        Task<Stock?> IStockRepository.DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<List<Stock>> IStockRepository.GetAllAsync()
        {
            return _context.Stocks.ToListAsync();
        }

        Task<Stock?> IStockRepository.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<bool> IStockRepository.StockExists(int id)
        {
            throw new NotImplementedException();
        }

        Task<Stock?> IStockRepository.UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {
            throw new NotImplementedException();
        }
    }
}