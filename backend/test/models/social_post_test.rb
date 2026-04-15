require "test_helper"

class SocialPostTest < ActiveSupport::TestCase
  test "allows nil and empty scheduling attributes" do
    post = SocialPost.new(title: nil, post_text: "", scheduled_date: nil)

    assert post.valid?
  end

  test "validate all attributes" do
    post = SocialPost.new(title: "Test Post", post_text: "This is a test post.", scheduled_date: 1.day.from_now)

    assert post.valid?
  end
end
