json.array!(@problemas) do |problema|
  json.extract! problema, :id, :descricao, :resposta, :status, :usuario, :created_at
  json.url problema_url(problema, format: :json)
end
