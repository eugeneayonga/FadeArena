p "Seeding START!"

p "Seeding barbers"
barbers = [
  { first_name: "Jesus", last_name: "Plowman", wage: 20.0, station: 1, start_date: Date.today },
  { first_name: "George", last_name: "Webb", wage: 16.50, station: 2, start_date: Date.today },
  { first_name: "Carl", last_name: "Morgan", wage: 14.0, station: 3, start_date: Date.today },
  { first_name: "Richard", last_name: "Robinson", wage: 12.0, station: 4, start_date: Date.today },
  { first_name: "Armando", last_name: "Mauk", wage: 12.0, station: 5, start_date: Date.today },
  { first_name: "David", last_name: "Matin", wage: 12.0, station: 6, start_date: Date.today },
]
barbers.each do |b|
  Barber.create(b)
end

p "Seeding clients"
p "Seeding products"
p "Seeding services"

p "Seeding END!"
