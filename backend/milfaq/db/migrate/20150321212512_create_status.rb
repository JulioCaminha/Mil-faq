class CreateStatus < ActiveRecord::Migration
  def change
    create_table :status do |t|
      t.string :decricao

      t.timestamps null: false
    end
  end
end
