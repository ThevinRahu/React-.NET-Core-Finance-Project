using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMappers
    {
        public static CommentDTO ToCommentDto(this Comment commentModel)
        {
            return new CommentDTO
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
                StockId = commentModel.StockId
            };
        }

        public static Comment ToCommentFromCreate(this CreateCommentDTO commentModel, int stockId)
        {
            return new Comment
            {
                // Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                // CreatedOn = commentModel.CreatedOn,
                StockId = stockId
            };
        }
    }
}