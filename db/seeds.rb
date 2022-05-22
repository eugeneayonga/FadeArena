p "Seeding START!"

p "Seeding barbers"
BARBERS = [
  { first_name: "Jesus", last_name: "Plowman", wage: 20.0, station: 1, start_date: Date.today },
  { first_name: "George", last_name: "Webb", wage: 16.50, station: 2, start_date: Date.today },
  { first_name: "Carl", last_name: "Morgan", wage: 14.0, station: 3, start_date: Date.today },
  { first_name: "Richard", last_name: "Robinson", wage: 12.0, station: 4, start_date: Date.today },
  { first_name: "Armando", last_name: "Mauk", wage: 12.0, station: 5, start_date: Date.today },
  { first_name: "David", last_name: "Matin", wage: 12.0, station: 6, start_date: Date.today },
]
BARBERS.each do |b|
  Barber.create(b)
end
p "Barbers count is now #{Barber.count}"

# CLIENTS
p "Seeding clients"

p "Clients count is now #{Client.count}"

# PRODUCTS
p "Seeding products"
CONDITIONER_TYPES = ["Thickening", "Deep", "Moisturizing", "Protein", "Cream Rinse", "Instant", "Leave-in"]
SHAMPOO_TYPES = ["Regular", "Dry", "Anti-breakage", "Purifying", "Clarifying", "Moisturizing", "Volumizing", "Color-treated", "Curly Hair"]
PRODUCTS = [
  *CONDITIONER_TYPES.map { |t| { name: "#{t} Conditioner", price: 15, description: "A #{t} conditioner" } },
  *SHAMPOO_TYPES.map { |t| { name: "#{t} Shampoo", price: 20, description: "A #{t} shampoo" } },
  { name: "Hairspray", price: 12, description: "Bed Head " },
]
PRODUCTS.each do |product|
  Product.create product
end
p "Products count is now #{Product.count}"

# SERVICES
p "Seeding services"
SERVICES = [
  { name: "Adult men's haircut", price: 22, description: "" },
  { name: "Haircut & beard trim", price: 28, description: "" },
  { name: "Haircut, beard, & eyebrows trim", price: 30, description: "" },
  { name: "Hot towel, straight razor face shave", price: 30, description: "" },
  { name: "Hot towel, straight razor face shave & facial", price: 35, description: "" },
  { name: "Hot towel, straight razor head shave", price: 30, description: "" },
  { name: "Kids haircut (10 & under)", price: 18, description: "" },
  { name: "Beard trim", price: 15, description: "" },
  { name: "Shampoo", price: 7, description: "" },
]
SERVICES.each do |service|
  Service.create service
end
p "Services count is now #{Service.count}"

p "Seeding END!"
