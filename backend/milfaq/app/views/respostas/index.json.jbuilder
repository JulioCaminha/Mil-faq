json.array!(@respostas) do |resposta|
  json.extract! resposta, :id, :descricao, :problema_id, :usuario_id
  json.url resposta_url(resposta, format: :json)
end
