@movie = [
  "https://www.youtube.com/embed/WWINlGQxrZM",
  "https://www.youtube.com/embed/k9tgLnI0fFc",
  "https://www.youtube.com/embed/3Xl0Qr0uXuY",
  "https://www.youtube.com/embed/eT4shwU4Yc4",
  "https://www.youtube.com/embed/Sv_hGITmNuo",
  "https://www.youtube.com/embed/JRAOdRq-1lw",
  "https://www.youtube.com/embed/1w8Z0UOXVaY",
  "https://www.youtube.com/embed/UkiI2vM2lfA",
  "https://www.youtube.com/embed/_Ge4_stUpqs"
]

10.times do |i|
  user = User.create(
    nickname: Faker::Internet.username,
    email: "test#{i}@test.com",
    password: "password",
    password_confirmation: "password"
  )

  3.times do 
    @video = user.videos.create(
      title: Faker::Space.star,
      duration: rand(60..180),
      genre: Faker::Game.genre,
      description: Faker::Lorem.paragraph,
      trailer: @movie.sample
    )
  end

end

Video.all.each do |video|
  
  rand(1..3).times do
    
    user = User.all.sample
    Comment.create(
      body: Faker::Lorem.sentence,
      user_id: user.id,
      video_id: video.id
    )

  end

end

puts "database seeded"
