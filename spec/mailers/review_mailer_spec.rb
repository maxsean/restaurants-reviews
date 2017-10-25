require "rails_helper"

RSpec.describe ReviewMailer, type: :mailer do
  describe "send an email after review" do
    ActionMailer::Base.deliveries.clear
  end
end
