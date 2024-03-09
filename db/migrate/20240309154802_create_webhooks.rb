class CreateWebhooks < ActiveRecord::Migration[7.1]
  def change
    create_table :webhooks do |t|
      t.string :job_id
      t.string :status
      t.json :details

      t.timestamps
    end
  end
end
