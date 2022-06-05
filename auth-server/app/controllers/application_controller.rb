class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    include ActionController::Cookies

    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
        #@current_user ||= User.find_by_id(session[:user_id])
        puts session.keys
        #puts session.keys
    end
end
