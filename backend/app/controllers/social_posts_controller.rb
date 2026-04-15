class SocialPostsController < ApplicationController
  before_action :set_social_post, only: %i[ show update destroy ]

  # GET /social_posts
  def index
    @social_posts = SocialPost.all

    render json: @social_posts
  end

  # GET /social_posts/1
  def show
    render json: @social_post
  end

  # POST /social_posts
  def create
    @social_post = SocialPost.new(social_post_params)

    if @social_post.save
      render json: @social_post, status: :created, location: @social_post
    else
      render json: @social_post.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /social_posts/1
  def update
    if @social_post.update(social_post_params)
      render json: @social_post
    else
      render json: @social_post.errors, status: :unprocessable_content
    end
  end

  # DELETE /social_posts/1
  def destroy
    @social_post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_social_post
      @social_post = SocialPost.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def social_post_params
      params.expect(social_post: [ :title, :post_text, :scheduled_date ])
    end
end
