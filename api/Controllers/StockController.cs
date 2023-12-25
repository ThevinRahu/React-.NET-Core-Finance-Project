using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.DTOs.Stock;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController: ControllerBase
    {
        private readonly ApplicationDBContext _context;
        // private readonly IStockRepository _stockRepo;
        public StockController(ApplicationDBContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = _context.Stocks.ToList().Select(s => s.ToStockDto());

            return Ok(stocks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var stock =  _context.Stocks.Find(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
        {
            var stockModel = stockDto.ToStockFromCreateDTO();
            // await _stockRepo.CreateAsync(stockModel);
             _context.Stocks.Add(stockModel);
             _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
        {
            var stock =  _context.Stocks.Find(id);
            // var stockModel = await _stockRepo.UpdateAsync(id, updateDto);

            if (stock == null)
            {
                return NotFound();
            }else{
                stock.Symbol = updateDto.Symbol;
                stock.CompanyName = updateDto.CompanyName;
                stock.Purchase = updateDto.Purchase;
                stock.LastDiv = updateDto.LastDiv;
                stock.Industry = updateDto.Industry;
                stock.MarketCap = updateDto.MarketCap;
                _context.SaveChanges();
                return Ok(stock.ToStockDto());
            }
        }

    }
}