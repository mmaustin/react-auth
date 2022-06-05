class ApplicationController < ActionController::Base
    include ActionController::Cookies

    def current_user
        User.find_by_id(session[:user_id])
        #@current_user ||= User.find_by_id(session[:user_id])
        puts session.keys
        #puts session.keys
    end
end
