# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
title1 = 'fake news'
description1 = 'The problem of fake news has gained a lot of attention as it
is claimed to have had a significant impact on 2016 US Presidential Elections. Fake news is not a new problem and its
spread in social networks is well-studied. Often an underlying assumption in fake news discussion is that it is written to look like real news, fooling the reader who does not check
for reliability of the sources or the arguments in its content.'

title2 = 'Aerosol-printed graphene unveiled as low cost, faster food toxin sensor'
description2 = 'Researchers in the USA have developed a graphene-based electrochemical sensor capable of detecting histamines (allergens) and toxins in food much faster than standard laboratory tests.
The team used aerosol-jet printing to create the sensor. The ability to change the pattern geometry on demand through software control allowed rapid prototyping and efficient optimization of the sensor layout.'



Comment.destroy_all
Article.destroy_all
User.destroy_all


@user_1 = User.create!(username: "saad2", email: "saad2@gmail.com", password: "123456")
@user_2 = User.create!(username: "admin", email: "admin@email.com", password: "123456")
@user_3 = User.create!(username: "saad", email: "saad@email.com", password: "123456")


@article_1 = Article.create!(title: title1,  description: description1, user: @user_1)
@article_2 = Article.create!(title: title2,  description: description2, user: @user_1)

@comment_2 = Comment.create!(my_comment: "I didn't read it yet", user: @user_1, article: @article_1)
@comment_1 = Comment.create!(my_comment: "the article sounds amazing", user: @user_1, article: @article_2)
