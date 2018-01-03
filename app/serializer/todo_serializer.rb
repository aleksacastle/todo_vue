class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :status
end
