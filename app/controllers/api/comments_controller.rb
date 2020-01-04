class Api::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def create
    comment = current_user.comments.new(comment_params)
    if comment.save
      render json: comment 
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    comment = current_user.comments.find(params[:id])
    comment.update(complete: !comment.complete)
    render json: comment
  end

  def show
    render json: current_user.comments.find(params[:id])
  end

  def destroy
    current_user.comments.find(params[:id]).destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
