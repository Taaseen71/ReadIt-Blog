class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]
    before_action :authorize_request, only: [:create, :update, :destroy]
    before_action :is_this_mine, only: [:update, :destroy]

  # GET /articles
  def index
    @articles = Article.all

    # render json: @articles, include: {{user: {only:[:id, :username]}}, {comments: {include: {user: {only:[:id, :username]}}}}}

    render json: @articles, include: {user: {only:[:id, :username]}, comments: {include: {user: {only:[:id, :username]}}}}
    # , include: {comments: {include: {user: {only:[:id, :username]}}}}
  end

  # GET /articles/1
  def show
    render json: @article, include: {comments: {include: {user: {only:[:id, :username]}}}}
  end

  # POST /articles
  def create
    @article = Article.new(article_params)
    @article.user = @current_user
    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def article_params
      params.require(:article).permit(:title, :description, :user_id)
    end

    def is_this_mine
        if @current_user.id != @article.user_id
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

end
