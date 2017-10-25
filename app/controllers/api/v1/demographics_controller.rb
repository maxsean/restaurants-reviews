class Api::V1::DemographicsController < ApplicationController
  def show
    data = {
      "name": "Restaurant Reviewer Data",
      "description": "Restaurant Reviewer Data",
      "children": [
        {
          "name": "Reason of Visit",
          "description": "Reason of Visit",
          "children": [
              Review.tally_reasons(params[:id], "Date"),
              Review.tally_reasons(params[:id], "Sports Event"),
              Review.tally_reasons(params[:id], "Lunch"),
              Review.tally_reasons(params[:id], "Dinner"),
              Review.tally_reasons(params[:id], "Breakfast"),
              Review.tally_reasons(params[:id], "Brunch"),
              Review.tally_reasons(params[:id], "Family Outing"),
              Review.tally_reasons(params[:id], "Celebration"),
              Review.tally_reasons(params[:id], "Takeout"),
              Review.tally_reasons(params[:id], "Other")
          ]
        },
        {
          "name": "Quality of Service",
          "description": "Quality of Service",
          "children": Review.fives(params[:id], :quality_of_service)
        },
        {
          "name": "Noise Level",
          "description": "Noise Level",
          "children": Review.fives(params[:id], :noise_level)
        },
        {
          "name": "Lighting",
          "description": "Lighting",
          "children": Review.fives(params[:id], :lighting)
        },
        {
          "name": "Cleanliness",
          "description": "Cleanliness",
          "children": Review.fives(params[:id], :cleanliness)
        },
        {
          "name": "Fits Taste",
          "description": "Fits Taste",
          "children": [
            Review.tally_taste(params[:id], true),
            Review.tally_taste(params[:id], false)
          ]
        }
      ]
    }
    render json: data
  end
end
