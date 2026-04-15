require "test_helper"

class SocialPostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @social_post = social_posts(:one)
  end

  test "index returns all posts with expected fields" do
    get social_posts_url, as: :json

    assert_response :success

    body = JSON.parse(response.body)
    assert_equal SocialPost.count, body.length

    post = body.find { |record| record["id"] == @social_post.id }
    assert_not_nil post
    assert_equal @social_post.title, post["title"]
    assert_equal @social_post.post_text, post["post_text"]
    assert_equal @social_post.scheduled_date.as_json, post["scheduled_date"]

    assert_equal %w[id title post_text scheduled_date created_at updated_at].sort, post.keys.sort
  end

  test "show returns a single post with expected fields" do
    get social_post_url(@social_post), as: :json

    assert_response :success

    post = JSON.parse(response.body)
    assert_equal @social_post.id, post["id"]
    assert_equal @social_post.title, post["title"]
    assert_equal @social_post.post_text, post["post_text"]
    assert_equal @social_post.scheduled_date.as_json, post["scheduled_date"]
    assert_equal %w[id title post_text scheduled_date created_at updated_at].sort, post.keys.sort
  end

  test "show returns not found for a missing post" do
    get social_post_url(id: SocialPost.maximum(:id).to_i + 1), as: :json

    assert_response :not_found
  end
end
