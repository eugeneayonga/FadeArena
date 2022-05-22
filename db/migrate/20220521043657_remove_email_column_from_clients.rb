class RemoveEmailColumnFromClients < ActiveRecord::Migration[7.0]
  def change
    remove_column :clients, :email
  end
end
