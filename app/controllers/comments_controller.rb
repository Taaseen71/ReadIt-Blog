class CommentsController < ApplicationController
#   before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: {user: {only:[:id, :username]}}
  end

  # GET /comments/1
  def show
    render json: @comment, include: {user: {only:[:id, :username]}}
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

#   def comments_to_article
#     @article = Article.find(params[:article_id])
#     @comment = Comment.find(params[:id])

#     @article.comments.push(@comment)

#   end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:my_comment, :user_id)
    end
end
