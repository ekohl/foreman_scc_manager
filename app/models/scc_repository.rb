class SccRepository < ActiveRecord::Base
  self.include_root_in_json = false

  belongs_to :scc_account
  has_one :organization, through: :scc_account
  has_and_belongs_to_many :scc_products

  def full_url
    token.blank? ? url : url + '?' + token
  end

end