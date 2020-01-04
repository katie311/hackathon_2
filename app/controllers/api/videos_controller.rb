class Api::VideosController < ApplicationController
  def index
    render json: Video.all
  end

  def create
    video = current_user.videos.new(video_params)
      if video.save
       render json: video
      else 
        render json: { errors: video.errors }, status: :unprocessable_entity
    end
  end

  def update
    video = current_user.videos.find(params[:id])
    video.update(complete: !video.complete)
    render json: video
  end

  def show
    render json: current_user.videos.find(params[:id])
  end

  def destroy
    current_user.videos.find(params[:id]).destroy
  end

  private

  def video_params
    params.require(:video).permit(:title, :duration, :genre, :description, :trailer)
  end

end
