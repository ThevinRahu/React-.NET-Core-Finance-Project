using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Helpers;
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

        async Task<List<Stock>> IStockRepository.GetAllAsync(QueryObject queryObject)
        {
           var stocks = _context.Stocks.Include(c => c.Comments).AsQueryable();

            if (!string.IsNullOrWhiteSpace(queryObject.CompanyName))
            {
                stocks = stocks.Where(s => s.CompanyName.Contains(queryObject.CompanyName));
            }

            if (!string.IsNullOrWhiteSpace(queryObject.Symbol))
            {
                stocks = stocks.Where(s => s.Symbol.Contains(queryObject.Symbol));
            }

            if (!string.IsNullOrWhiteSpace(queryObject.SortBy))
            {
                if (queryObject.SortBy.Equals("Symbol", StringComparison.OrdinalIgnoreCase))
                {
                    stocks = queryObject.IsDecsending ? stocks.OrderByDescending(s => s.Symbol) : stocks.OrderBy(s => s.Symbol);
                }
            }


            var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;


            return await stocks.Skip(skipNumber).Take(queryObject.PageSize).ToListAsync();

        }

        async Task<Stock?> IStockRepository.GetByIdAsync(int id)
        {
            var stock = await _context.Stocks.Include(c=>c.Comments).FirstOrDefaultAsync(i=>i.Id==id);
            return stock;
        }

        Task<bool> IStockRepository.StockExists(int id)
        {
            return _context.Stocks.AnyAsync(s=>s.Id==id);
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