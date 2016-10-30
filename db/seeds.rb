# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# require 'date'
# require 'byebug'
# years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
# years.each_with_index do |year, idx|
#   unless idx == (years.length - 1)
#     Season.create(start_year: year, end_year: years[idx+1])
#   end
# end
# #2009-2010 Values
# dates = ["09/13/09", "10/13/09", "10/19/09", "11/17/09", "11/27/09", "11/27/09", "12/07/09", "12/12/09", "12/13/09", "12/22/09", "12/27/09", "12/27/09", "12/28/09", "12/29/09", "01/11/10", "01/18/10", "01/20/10", "01/23/10", "01/23/10", "01/30/10", "02/05/10", "02/08/10", "02/21/10", "02/26/10", "02/28/10", "03/03/10", "03/05/10", "03/10/10", "03/25/10", "03/30/10", "03/31/10", "04/03/10", "04/05/10", "04/11/10", "04/12/10", "04/13/10", "04/20/10", "04/21/10", "04/22/10", "04/27/10", "04/28/10", "05/09/10", "05/10/10", "05/12/10", "05/25/10", "05/26/10"]
# inches = [0.75, 3.65, 0.6, 0.1, 0.3, 0.2, 0.3, 1.0, 1.0, 1.0, 0.5, 0.5, 0.1, 0.2, 1.0, 0.5, 4.7, 1.1, 0.2, 0.7, 1.0, 0.8, 0.4, 1.8, 1.2, 1.5, 0.5, 0.7, 0.6, 0.4, 0.3, 0.4, 1.5, 0.3, 0.7, 0.8, 0.8, 0.2, 0.4, 0.2, 0.2, 0.1, 0.5, 0.1, 0.3, 0.3]
#
# dates.each_with_index do |obj, idx|
#   year = "20".concat(dates[idx].slice(6,2))
#   month = dates[idx].slice(0,2)
#   day = dates[idx].slice(3,2)
#   temp_date = Time.new(year.to_i, month.to_i, day.to_i)
#   Rain.create(season_id: 1, amount_in_inches: inches[idx] , time_info: temp_date)
# end