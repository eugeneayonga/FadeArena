class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :price
      t.boolean :active
      t.integer :current_stock
      t.integer :total_sold

      t.timestamps
    end
  end
end
