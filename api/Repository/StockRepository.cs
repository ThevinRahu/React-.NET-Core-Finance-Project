using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
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
        async Task<Stock> IStockRepository.CreateAsync(Stock stockModel)
        {
          
            await _context.Stocks.AddAsync(stockModel);
            await _context.SaveChangesAsync();
            return stockModel;
        }

        async Task<Stock?> IStockRepository.DeleteAsync(int id)
        {
            var stockModel = await _context.Stocks.FirstOrDefaultAsync(x=>x.Id==id);
            if (stockModel == null)
            {
                return null;
            }

            _context.Stocks.Remove(stockModel);

            await _context.SaveChangesAsync();

            return stockModel;
        }

        async Task<List<Stock>> IStockRepository.GetAllAsync()
        {
            return await _context.Stocks.ToListAsync();
        }

        async Task<Stock?> IStockRepository.GetByIdAsync(int id)
        {
            var stock = await _context.Stocks.FindAsync(id);
            return stock;
        }

        Task<bool> IStockRepository.StockExists(int id)
        {
            throw new NotImplementedException();
        }

        async Task<Stock?> IStockRepository.UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {
              var stock =  _context.Stocks.Find(id);
            // var stockModel = await _stockRepo.UpdateAsync(id, updateDto);

            if (stock == null)
            {
                return null;
            }else{
                stock.Symbol = stockDto.Symbol;
                stock.CompanyName = stockDto.CompanyName;
                stock.Purchase = stockDto.Purchase;
                stock.LastDiv = stockDto.LastDiv;
                stock.Industry = stockDto.Industry;
                stock.MarketCap = stockDto.MarketCap;
                await _context.SaveChangesAsync();
                return stock;
            }  
        }
    }
}