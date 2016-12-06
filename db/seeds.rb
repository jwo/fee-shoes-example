Product.delete_all

json_text = File.read(Rails.root + "products.json")
json = JSON.parse(json_text)

json.each do |product_json|
  Product.create! product_json
end
