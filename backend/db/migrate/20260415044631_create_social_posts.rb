class CreateSocialPosts < ActiveRecord::Migration[8.1]
  def change
    create_table :social_posts do |t|
      t.string :title
      t.text :post_text
      t.datetime :scheduled_date

      t.timestamps
    end
  end
end
