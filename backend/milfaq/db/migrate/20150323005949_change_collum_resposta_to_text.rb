class ChangeCollumRespostaToText < ActiveRecord::Migration
  def change
  	change_column :problemas, :resposta, :text
  end
end
