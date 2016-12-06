class AddFieldsToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :brand, :string
    add_column :products, :sport, :string
  end
end
