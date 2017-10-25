class Api::V1::DemographicsController < ApplicationController
  def index
    testdata = {
      "name": "UNC-CH Student Data",
      "description": "UNC-CH Student Data",
      "children": [
        {
          "name": "Race",
          "description": "Race",
          "children": [
            {
              "name": "American Indian or Alaskan Native",
              "description": "American Indian or Alaskan Native",
              "children": [
                {
                  "name": "American Indian or Alaskan Native",
                  "description": "American Indian or Alaskan Native",
                  "size": 21
                }
              ]
            },
            {
              "name": "Asian",
              "description": "Asian",
              "children": [
                {
                  "name": "Asian",
                  "description": "Asian",
                  "size": 37
                }
              ]
            },
            {
              "name": "Black or African-American",
              "description": "Black or African-American",
              "children": [
                {
                  "name": "Black or African-American",
                  "description": "Black or African-American",
                  "size": 23
                }
              ]
            },
            {
              "name": "Hispanic",
              "description": "Hispanic",
              "children": [
                {
                  "name": "Hispanic",
                  "description": "Hispanic",
                  "size": 21
                }
              ]
            },
            {
              "name": "Native Hawaiian or Pacific Islander",
              "description": "Native Hawaiian or Pacific Islander",
              "children": [
                {
                  "name": "Native Hawaiian or Pacific Islander",
                  "description": "Native Hawaiian or Pacific Islander",
                  "size": 4
                }
              ]
            },
            {
              "name": "Race/Ethnicity Unknown",
              "description": "Race/Ethnicity Unknown",
              "children": [
                {
                  "name": "Race/Ethnicity Unknown",
                  "description": "Race/Ethnicity Unknown",
                  "size": 11
                }
              ]
            },
            {
              "name": "Two or More Races",
              "description": "Two or More Races",
              "children": [
                {
                  "name": "Two or More Races",
                  "description": "Two or More Races",
                  "size": 16
                }
              ]
            },
            {
              "name": "White",
              "description": "White",
              "children": [
                {
                  "name": "White",
                  "description": "White",
                  "size": 182
                }
              ]
            }
          ]
        },
        {
          "name": "Gender",
          "description": "Gender",
          "children": [
            {
              "name": "Female",
              "description": "Female",
              "children": [
                {
                  "name": "Female",
                  "description": "Female",
                  "size": 188
                }
              ]
            },
            {
              "name": "Male",
              "description": "Male",
              "children": [
                {
                  "name": "Male",
                  "description": "Male",
                  "size": 126
                }
              ]
            }
          ]
        },
        {
          "name": "Age",
          "description": "Age",
          "children": [
            {
              "name": "Under 25",
              "description": "Under 25",
              "children": [
                {
                  "name": "Under 25",
                  "description": "Under 25",
                  "size": 208
                }
              ]
            },
            {
              "name": "25 and Over",
              "description": "25 and Over",
              "children": [
                {
                  "name": "25 and Over",
                  "description": "25 and Over",
                  "size": 105
                }
              ]
            }
          ]
        },
        {
          "name": "Attendance",
          "description": "Attendance",
          "children": [
            {
              "name": "Full-Time",
              "description": "Full-Time",
              "children": [
                {
                  "name": "Full-Time",
                  "description": "Full-Time",
                  "size": 250
                }
              ]
            },
            {
              "name": "Part-Time",
              "description": "Part-Time",
              "children": [
                {
                  "name": "Part-Time",
                  "description": "Part-Time",
                  "size": 63
                }
              ]
            }
          ]
        },
        {
          "name": "Residency",
          "description": "Residency",
          "children": [
            {
              "name": "In-State",
              "description": "In-State",
              "children": [
                {
                  "name": "In-State",
                  "description": "In-State",
                  "size": 212
                }
              ]
            },
            {
              "name": "Out-of-State",
              "description": "Out-of-State",
              "children": [
                {
                  "name": "Out-of-State",
                  "description": "Out-of-State",
                  "size": 82
                }
              ]
            }
          ]
        },
        {
          "name": "Enrollment",
          "description": "Enrollment",
          "children": [
            {
              "name": "Undergraduate",
              "description": "Undergraduate",
              "children": [
                {
                  "name": "Undergraduate",
                  "description": "Undergraduate",
                  "size": 185
                }
              ]
            },
            {
              "name": "Graduate",
              "description": "Graduate",
              "children": [
                {
                  "name": "Graduate",
                  "description": "Graduate",
                  "size": 84
                }
              ]
            },
            {
              "name": "Professional",
              "description": "Professional",
              "children": [
                {
                  "name": "Professional",
                  "description": "Professional",
                  "size": 45
                }
              ]
            }
          ]
        },
        {
          "name": "Citizenship",
          "description": "Citizenship",
          "children": [
            {
              "name": "US Citizen",
              "description": "US Citizen",
              "children": [
                {
                  "name": "US Citizen",
                  "description": "US Citizen",
                  "size": 200
                }
              ]
            },
            {
              "name": "Resident Alien",
              "description": "Resident Alien",
              "children": [
                {
                  "name": "Resident Alien",
                  "description": "Resident Alien",
                  "size": 70
                }
              ]
            },
            {
              "name": "Nonresident Alien",
              "description": "Nonresident Alien",
              "children": [
                {
                  "name": "Nonresident Alien",
                  "description": "Nonresident Alien",
                  "size": 16
                }
              ]
            }
          ]
        },
        {
          "name": "Proximity",
          "description": "Proximity",
          "children": [
            {
              "name": "On-Campus",
              "description": "On-Campus",
              "children": [
                {
                  "name": "On-Campus",
                  "description": "On-Campus",
                  "size": 100
                }
              ]
            },
            {
              "name": "Off-Campus",
              "description": "Off-Campus",
              "children": [
                {
                  "name": "Off-Campus",
                  "description": "Off-Campus",
                  "size": 70
                }
              ]
            }
          ]
        }
      ]
    }

  render json: testdata
  end
end
