class FizzBuzz
  for i in 1..100

    x = ''
    x +=  "Fizz" if (i % 3 == 0)
    x +=  "Buzz" if (i % 5 == 0)

    puts(x.empty? ? i : x)

  end
end
