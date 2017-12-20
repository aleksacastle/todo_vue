class TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |format|
      format.html
      format.json { render :json => @todos }
    end
  end

  def create
    @todo = Todo.new(todo_params)
    respond_to do |format|
      format.json do
        if @todo.save
          render :json => @todo
        else
          render :json => { :errors => @todo.errors.messages }, :status => 422
        end
      end
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:name, :status)
  end
end
