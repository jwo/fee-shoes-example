json.product do
  json.id @product.id
  json.name @product.name
  json.brand @product.brand
  json.description @product.description
  json.sport @product.sport
  json.review @product.review
  json.image @product.image_url
  json.price @product.price
end
