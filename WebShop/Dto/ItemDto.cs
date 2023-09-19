namespace WebShop.Dto
{
    public class ItemDto
    {

        public string SellerId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }

        public string? ImageUrl { get; set; }
    }
}
