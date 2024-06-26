﻿using API.Data;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : BaseApiController
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task< ActionResult<List<Product>>> GetProducts()
        {
           return await _context.Products.ToListAsync();

            
        }

        [HttpGet("{id}")]
        public async Task< ActionResult<Product>> GetProduct(int id)
        {
            var product= await _context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;

        }
    }


}
