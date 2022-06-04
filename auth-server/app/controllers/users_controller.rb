class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        users = User.all
        #render json: BandSerializer.new(bands, {include: [:players]})
        render json: users.to_json(only: [:id, :username, :email])
    end

    def show
        #band = Band.find(params[:id])
        render json: @user.to_json(only: [:id, :username, :email])
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
          session[:user_id] = @user.id
          render json: @user, status: :ok
        else
          render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @user.update(user_params)
        render json: @user
    end

    def destroy
        @user.destroy
    end   

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
